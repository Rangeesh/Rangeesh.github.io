(() => {
  'use strict';
  const controls = document.querySelector('[data-search-controls]');
  if (!controls) return;
  const search = document.getElementById('post-search');
  const cards = Array.from(document.querySelectorAll('.post-list .post-card'));
  const filters = Array.from(controls.querySelectorAll('[data-category]'));
  const status = document.getElementById('post-results-status');
  const empty = document.getElementById('post-empty');
  let category = 'all';
  function update() {
    const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const card of cards) {
      const matchesCategory = category.toLocaleLowerCase() === 'all' || card.dataset.category === category;
      const text = card.dataset.search || '';
      const visible = matchesCategory && terms.every(term => text.includes(term));
      card.hidden = !visible;
      if (visible) count += 1;
    }
    for (const filter of filters) {
      filter.setAttribute('aria-pressed', String(filter.dataset.category.toLocaleLowerCase() === category.toLocaleLowerCase()));
    }
    status.textContent = `${count} ${count === 1 ? 'article' : 'articles'}${terms.length || category.toLocaleLowerCase() !== 'all' ? ' found' : ''}`;
    empty.hidden = count !== 0;
  }
  search.addEventListener('input', update);
  for (const filter of filters) {
    filter.addEventListener('click', () => {
      category = filter.dataset.category;
      update();
    });
  }
  controls.hidden = false;
  update();
})();
