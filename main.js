(function () {
  'use strict';

  var nav = document.querySelector('.top-nav');
  var navMenu = document.getElementById('nav-menu');
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelectorAll('.nav-item');

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('is-open', !expanded);
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      });
    });
  }

  // Smooth scroll for anchor links (account for fixed nav)
  var navHeight = nav ? nav.offsetHeight : 56;
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Set active nav link based on scroll position
  function updateActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var scrollY = window.pageYOffset;
    var threshold = navHeight + 120;
    var current = '';

    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      var top = section.offsetTop;
      var height = section.offsetHeight;
      if (scrollY >= top - threshold) {
        current = id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      var href = link.getAttribute('href');
      if (href && href.charAt(0) === '#' && href.slice(1) === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  window.addEventListener('load', updateActiveNav);

  // Open external links in new tab
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (link.hostname !== window.location.hostname && !link.getAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
})();
