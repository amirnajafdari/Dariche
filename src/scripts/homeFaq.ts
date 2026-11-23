/** Progressively enhance the server-rendered FAQs; native details work without JS. */
export function initialiseHomeFaq(root: HTMLElement) {
  if (root.hasAttribute('data-enhanced')) return;
  const tablist = root.querySelector<HTMLElement>('[role="tablist"]')!;
  const tabs = Array.from(tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-faq-panel]'));
  const items = Array.from(root.querySelectorAll<HTMLDetailsElement>('[data-faq-item]'));
  const mobile = window.matchMedia('(max-width: 699px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animations = new WeakMap<HTMLDetailsElement, Animation>();

  const setOpen = (item: HTMLDetailsElement, expanded: boolean, animate = true) => {
    const summary = item.querySelector('summary')!;
    const answer = item.querySelector<HTMLElement>('.home-faq__answer')!;
    const startHeight = item.getBoundingClientRect().height;
    animations.get(item)?.cancel();
    animations.delete(item);
    summary.setAttribute('aria-expanded', String(expanded));
    answer.inert = !expanded;
    const finish = () => {
      item.open = expanded;
      item.style.overflow = '';
      animations.delete(item);
    };
    if (!animate || reducedMotion.matches || typeof item.animate !== 'function') {
      finish();
      return;
    }
    // Keep details open while its height animates in either direction.
    item.open = true;
    const endHeight = expanded ? item.getBoundingClientRect().height : summary.getBoundingClientRect().height + 1;
    item.style.overflow = 'hidden';
    const animation = item.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], {
      duration: 220, easing: 'ease-out',
    });
    animations.set(item, animation);
    animation.onfinish = finish;
  };

  items.forEach((item) => {
    // JS handles exclusivity and animations; native name handles the no-JS fallback.
    item.removeAttribute('name');
    const summary = item.querySelector('summary')!;
    setOpen(item, false, false);
    summary.addEventListener('click', (event) => {
      event.preventDefault();
      const expanded = summary.getAttribute('aria-expanded') !== 'true';
      if (expanded) items.forEach((other) => {
        if (other !== item && other.open) setOpen(other, false, false);
      });
      setOpen(item, expanded);
    });
  });

  const selectTab = (index: number, focus = false) => {
    items.forEach((item) => setOpen(item, false, false));
    tabs.forEach((tab, tabIndex) => {
      const selected = index === tabIndex;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[tabIndex].hidden = !selected;
    });
    if (focus) tabs[index].focus({ preventScroll: true });
    if (mobile.matches && focus) tabs[index].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  };

  tabs.forEach((tab, index) => {
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', (event) => {
      const rtl = root.dir === 'rtl';
      let next = index;
      if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else if (!mobile.matches && event.key === 'ArrowDown') next++;
      else if (!mobile.matches && event.key === 'ArrowUp') next--;
      else if (mobile.matches && event.key === 'ArrowRight') next += rtl ? -1 : 1;
      else if (mobile.matches && event.key === 'ArrowLeft') next += rtl ? 1 : -1;
      else return;
      event.preventDefault();
      selectTab((next + tabs.length) % tabs.length, true);
    });
  });
  const updateOrientation = () => tablist.setAttribute('aria-orientation', mobile.matches ? 'horizontal' : 'vertical');
  mobile.addEventListener('change', updateOrientation);
  updateOrientation();
  selectTab(0);
  tablist.hidden = false;
  root.setAttribute('data-enhanced', '');
}
