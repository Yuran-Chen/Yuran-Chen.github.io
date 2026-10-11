(function () {
  'use strict';

  var nav = document.querySelector('.top-nav');
  var navMenu = document.getElementById('nav-menu');
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-item'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function closeMenu() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    navMenu.classList.remove('is-open');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(willOpen));
      navToggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
      navMenu.classList.toggle('is-open', willOpen);
    });

    document.addEventListener('click', function (event) {
      if (navMenu.classList.contains('is-open') && !nav.contains(event.target)) closeMenu();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      var href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      closeMenu();
      var navHeight = nav ? nav.getBoundingClientRect().height : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      history.replaceState(null, '', href);
    });
  });

  var sectionMap = new Map();
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href');
    var section = id && document.querySelector(id);
    if (section) sectionMap.set(section, link);
  });

  var trackedSections = Array.prototype.slice.call(document.querySelectorAll('.main > .section'));
  if ('IntersectionObserver' in window && trackedSections.length) {
    var visibleSections = new Map();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visibleSections.set(entry.target, entry.boundingClientRect.top);
        else visibleSections.delete(entry.target);
      });

      var current = Array.from(visibleSections.entries()).sort(function (a, b) {
        return Math.abs(a[1]) - Math.abs(b[1]);
      })[0];

      if (current) {
        navLinks.forEach(function (link) { link.classList.remove('active'); });
        var currentLink = sectionMap.get(current[0]);
        if (currentLink) currentLink.classList.add('active');
      }
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });

    trackedSections.forEach(function (section) { observer.observe(section); });
  }

  var rainyMoments = Array.prototype.slice.call(document.querySelectorAll('.rainy-moment'));
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    rainyMoments.forEach(function (moment) { moment.classList.add('rainy-ready'); });
    var rainyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        rainyObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.25 });
    rainyMoments.forEach(function (moment) { rainyObserver.observe(moment); });
  } else {
    rainyMoments.forEach(function (moment) { moment.classList.add('is-visible'); });
  }

  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (link.hostname !== window.location.hostname) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  var modal = document.querySelector('.image-modal');
  var modalImage = modal && modal.querySelector('.modal-image');
  var modalCaption = modal && modal.querySelector('.modal-caption');
  var modalClose = modal && modal.querySelector('.modal-close');
  var modalBackdrop = modal && modal.querySelector('.modal-backdrop');
  var lightboxTriggers = document.querySelectorAll('[data-lightbox-src]');
  var lastFocused = null;

  function openModal(trigger) {
    if (!modal || !modalImage || !modalCaption) return;
    lastFocused = trigger;
    modalImage.src = trigger.getAttribute('data-lightbox-src');
    modalImage.alt = trigger.getAttribute('data-lightbox-alt') || 'Expanded research figure';
    modalCaption.textContent = modalImage.alt;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    window.requestAnimationFrame(function () { modalClose.focus(); });
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modalImage.src = '';
    document.body.classList.remove('modal-open');
    if (lastFocused) lastFocused.focus();
  }

  lightboxTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () { openModal(trigger); });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (modal && !modal.hidden) closeModal();
      else closeMenu();
    }

    if (event.key === 'Tab' && modal && !modal.hidden) {
      var focusable = Array.prototype.slice.call(modal.querySelectorAll('button:not([disabled])'));
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 959) closeMenu();
  }, { passive: true });

  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    function updateBackToTop() {
      backToTop.classList.toggle('is-visible', window.scrollY > 640);
    }

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      history.replaceState(null, '', window.location.pathname + window.location.search);
    });

    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }
})();
