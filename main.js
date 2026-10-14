'use strict';

(() => {
  const data = window.CHEF_PORTFOLIO;
  if (!data || !Array.isArray(data.works)) {
    console.error('content.js 파일을 찾을 수 없습니다.');
    return;
  }

  const grid = document.getElementById('work-grid');
  const filtersWrap = document.getElementById('work-filters');
  const count = document.getElementById('gallery-count');
  const dialog = document.getElementById('detail-dialog');
  const modalImage = document.getElementById('dialog-image');
  const modalTags = document.getElementById('dialog-tags');
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  let activeFilter = 'all';
  let visibleWorks = data.works.slice();
  let currentIndex = 0;
  let previouslyFocusedElement = null;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function makeCard(work, index) {
    const card = el('button', 'work-card' + (work.featured && activeFilter === 'all' ? ' is-featured' : ''));
    card.type = 'button';
    card.setAttribute('aria-label', `${work.title} 상세 설명 보기`);
    const photo = el('img');
    photo.src = work.image;
    photo.alt = work.alt;
    photo.loading = index < 3 ? 'eager' : 'lazy';
    photo.decoding = 'async';
    if (work.objectPosition) photo.style.objectPosition = work.objectPosition;

    const overlay = el('span', 'work-card-copy');
    const group = el('span', 'work-card-text');
    group.append(el('span', 'work-card-category', work.categoryLabel));
    group.append(el('span', 'work-card-title', work.title));
    const arrow = el('span', 'work-card-arrow', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    overlay.append(group, arrow);
    card.append(photo, overlay);
    card.addEventListener('click', () => openModal(index, card));
    return card;
  }

  function renderGallery() {
    visibleWorks = data.works.filter(item => activeFilter === 'all' || item.category === activeFilter);
    const fragment = document.createDocumentFragment();
    visibleWorks.forEach((work, index) => fragment.appendChild(makeCard(work, index)));
    grid.replaceChildren(fragment);
    count.textContent = `총 ${visibleWorks.length}점`; 

    filtersWrap.querySelectorAll('.filter-button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter));
    });
  }

  for (const option of data.filters) {
    const btn = el('button', 'filter-button');
    btn.type = 'button';
    btn.dataset.filter = option.id;
    btn.textContent = option.label;
    if (option.count) {
      btn.append(el('span', 'filter-total', `(${data.works.length})`));
    }
    btn.addEventListener('click', () => {
      activeFilter = option.id;
      renderGallery();
    });
    filtersWrap.append(btn);
  }

  function updateModal() {
    if (!visibleWorks.length) return;
    const work = visibleWorks[currentIndex];
    const index = data.works.findIndex(item => item.id === work.id) + 1;
    modalImage.src = work.image;
    modalImage.alt = work.alt;
    if (work.objectPosition) modalImage.style.objectPosition = work.objectPosition;
    document.getElementById('dialog-number').textContent = String(index).padStart(2, '0');
    document.getElementById('dialog-category').textContent = work.categoryLabel;
    document.getElementById('dialog-title').textContent = work.title;
    document.getElementById('dialog-korean').textContent = work.subtitle || '';
    document.getElementById('dialog-description').textContent = work.description;
    document.getElementById('dialog-counter').textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(visibleWorks.length).padStart(2, '0')}`;
    modalTags.replaceChildren(...work.details.map(detail => el('span', '', detail)));
  }

  function openModal(index, trigger) {
    currentIndex = index;
    previouslyFocusedElement = trigger;
    updateModal();
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.classList.add('dialog-open');
      document.getElementById('dialog-close').focus();
    } else {
      // Older browsers: show modal as normal element rather than silently failing.
      dialog.setAttribute('open', '');
      document.body.classList.add('dialog-open');
    }
  }

  function closeModal() {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  }

  function moveModal(step) {
    if (!visibleWorks.length) return;
    currentIndex = (currentIndex + step + visibleWorks.length) % visibleWorks.length;
    updateModal();
  }

  document.getElementById('dialog-close').addEventListener('click', closeModal);
  document.getElementById('dialog-prev').addEventListener('click', () => moveModal(-1));
  document.getElementById('dialog-next').addEventListener('click', () => moveModal(1));
  dialog.addEventListener('click', event => {
    // Click on the dark backdrop closes the native dialog.
    if (event.target === dialog) closeModal();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (previouslyFocusedElement?.isConnected) previouslyFocusedElement.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', event => {
    if (!dialog.open || event.target instanceof HTMLInputElement) return;
    if (event.key === 'ArrowLeft') moveModal(-1);
    if (event.key === 'ArrowRight') moveModal(1);
    if (event.key === 'Escape' && typeof dialog.close !== 'function') closeModal();
  });

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', '메뉴 열기');
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });

  const email = data.chef.email?.trim();
  if (email) {
    document.getElementById('email-link').href = `mailto:${email}`;
    document.getElementById('contact-email').textContent = email;
  } else {
    document.getElementById('email-link').href = '#top';
  }
  document.getElementById('year').textContent = new Date().getFullYear();

  renderGallery();
})();
