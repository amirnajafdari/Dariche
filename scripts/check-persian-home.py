"""Check built /fa/ content, links, assets, and optional pre-change page snapshots.

Run after npm run build: python scripts/check-persian-home.py [baseline-dist]
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'


class Node:
    def __init__(self, tag='', attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []

    def all(self, tag=None):
        for child in self.children:
            if isinstance(child, Node):
                if tag is None or child.tag == tag:
                    yield child
                yield from child.all(tag)

    def text(self):
        return ''.join(c.text() if isinstance(c, Node) else c for c in self.children)


class Document(HTMLParser):
    void = set('area base br col embed hr img input link meta param source track wbr'.split())

    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in self.void:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.void:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                return

    def handle_data(self, value):
        self.stack[-1].children.append(value)


def normalized(value):
    return re.sub(r'\s+', ' ', value).strip()


source = (DIST / 'fa/index.html').read_text(encoding='utf8')
doc = Document(source).root
nodes = list(doc.all())
by_id = {n.attrs['id']: n for n in nodes if 'id' in n.attrs}
assert len(by_id) == len([n for n in nodes if 'id' in n.attrs]), 'Duplicate IDs'
assert next(doc.all('html')).attrs == {'lang': 'fa', 'dir': 'rtl'}
assert len(list(doc.all('h1'))) == 1
assert len(list(doc.all('footer'))) == 1
assert [n.attrs.get('aria-labelledby') for n in doc.all('section')] == [
    'hero-title', 'intro-title', 'services-title', 'work-title', 'beliefs-title',
    'pricing-title', 'monthly-title', 'about-title', 'bilingual-title', 'seo-title',
    'faq-title', 'contact-title',
]
for forbidden in ['£950', '£1,950', '£3,450', '447000000000', '07000 000000',
                  'hello@daricheh.co.uk', 'نام هم‌بنیان‌گذار', 'از زبون مشتری‌هامون.', '????']:
    assert forbidden not in source, f'Unwanted content: {forbidden}'

content = json.loads(subprocess.check_output([
    'node', '--input-type=module', '-e',
    "import * as data from './src/data/persianHome.ts'; console.log(JSON.stringify(data))",
], cwd=ROOT, encoding='utf8'))
assert [p['price'] for p in content['oneOffServices']] == ['£399', '£699', '£199']
assert [p['price'] for p in content['monthlyPackages']] == ['£49', '£129', '£329']
assert [len(p['features']) for p in content['monthlyPackages']] == [7, 12, 19]
for plan in content['oneOffServices'] + content['monthlyPackages']:
    card = by_id[plan['id']]
    inclusions = [normalized(n.text()) for n in card.all('li')]
    assert inclusions == plan['features'], f"Missing/reordered features: {plan['id']}"
    assert plan['price'] in card.text()
    assert plan['cta'] in card.text()
    if 'en' in plan:
        details = list(card.all('details'))
        assert len(details) == 1 and 'data-monthly-features' in details[0].attrs
        assert plan['price'] not in details[0].text(), 'Price must remain outside disclosure'
        assert list(details[0].all('summary')), 'Feature disclosure needs keyboard control'

main_text = normalized(by_id['main'].text())
for group in ['primaryServices', 'supportingServices', 'projects', 'beliefs', 'searchExamples', 'seoServices']:
    for item in content[group]:
        assert normalized(item['text']) in main_text, f'Missing copy in {group}'
for item in content['persianHomeFaqs']:
    assert item['q'] in by_id['faq'].text()
    for paragraph in item['a'].split('\n\n'):
        assert normalized(paragraph) in normalized(by_id['faq'].text())
assert len(list(by_id['faq'].all('details'))) == 10
schemas = [json.loads(n.text()) for n in doc.all('script') if n.attrs.get('type') == 'application/ld+json']
graph = schemas[0]['@graph']
faq = next(n for n in graph if n['@type'] == 'FAQPage')
assert [n['acceptedAnswer']['text'] for n in faq['mainEntity']] == [q['a'] for q in content['persianHomeFaqs']]
for kind in ['Organization', 'ProfessionalService']:
    entity = next(n for n in graph if n['@type'] == kind)
    assert entity['telephone'] == '+447428567080' and entity['email'] == 'info@daricheh.co.uk'
assert next(n for n in graph if n['@type'] == 'Organization')['sameAs'] == []
assert next(doc.all('form')).attrs['data-email'] == 'info@daricheh.co.uk'
assert any('data-wa-float' in n.attrs for n in doc.all('a'))

for anchor in doc.all('a'):
    target = urlsplit(anchor.attrs['href'])
    if target.scheme or target.netloc:
        if target.netloc == 'wa.me':
            assert target.path == '/447428567080'
        if target.scheme == 'tel':
            assert target.path == '+447428567080'
        if target.scheme == 'mailto':
            assert target.path == 'info@daricheh.co.uk'
        continue
    page = DIST / (target.path.lstrip('/') or 'fa/')
    if page.is_dir():
        page /= 'index.html'
    assert page.is_file(), f'Broken local link: {anchor.attrs["href"]}'
    if target.fragment:
        linked_doc = doc if page == DIST / 'fa/index.html' else Document(page.read_text(encoding='utf8')).root
        assert any(n.attrs.get('id') == unquote(target.fragment) for n in linked_doc.all()), f'Missing anchor: {target.fragment}'

portfolio = list(by_id['work'].all('img'))
assert len(portfolio) == 6
for image in portfolio:
    asset = DIST / image.attrs['src'].lstrip('/')
    assert asset.is_file() and image.attrs.get('alt')
    assert '/images/work/' in image.attrs['src']
print('PASS: section order, copy, six prices, exact features, FAQ schema, verified contacts, all local links and six real portfolio images')


def page_signature(path, root):
    """Compare markup plus actual CSS/JS, independent of bundler chunk names/whitespace."""
    parsed = Document(path.read_text(encoding='utf8')).root
    styles, scripts = [], []

    def walk(node):
        if isinstance(node, str):
            return normalized(node)
        if node.tag == 'style':
            styles.append(re.sub(r'\s+', '', node.text()))
            return ''
        if node.tag == 'link' and node.attrs.get('rel') == 'stylesheet':
            styles.append(re.sub(r'\s+', '', (root / node.attrs['href'].lstrip('/')).read_text(encoding='utf8')))
            return ''
        if node.tag == 'script' and node.attrs.get('type') != 'application/ld+json':
            code = (root / node.attrs['src'].lstrip('/')).read_text(encoding='utf8') if 'src' in node.attrs else node.text()
            scripts.append(code)
            return ''
        children = [walk(child) for child in node.children]
        return [node.tag, node.attrs, [c for c in children if c]]

    markup = walk(parsed)
    return markup, ''.join(styles), scripts


if len(sys.argv) > 1:
    baseline = Path(sys.argv[1])
    checked = 0
    for page in DIST.rglob('*.html'):
        relative = page.relative_to(DIST)
        if relative.as_posix() == 'fa/index.html':
            continue
        old = baseline / relative
        assert old.is_file(), f'Unexpected route: {relative}'
        current, previous = page_signature(page, DIST), page_signature(old, baseline)
        assert current == previous, f'Out-of-scope markup, styles or scripts changed: {relative}'
        checked += 1
    for image in portfolio:
        asset = image.attrs['src'].lstrip('/')
        assert (DIST / asset).read_bytes() == (baseline / asset).read_bytes(), f'Portfolio asset changed: {asset}'
    print(f'PASS: all {checked} other pages (including English homepage), styles, scripts and portfolio image bytes match baseline')
