(function () {
  'use strict';

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function () {
    setMenu(btn.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) setMenu(false);
  });

  // Highlight the nav link of the section in view
  var links = nav.querySelectorAll('a[href^="#"]:not(.btn)');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var s = document.querySelector(a.getAttribute('href'));
      if (s) io.observe(s);
    });
  }

  // Contact form: validates, then opens the visitor's email app with the message filled in
  var form = document.getElementById('form');
  var note = form.querySelector('.note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var ok = true;
    ['name', 'email', 'msg'].forEach(function (k) {
      var el = form.elements[k];
      var bad = !el.value.trim() || (k === 'email' && !el.checkValidity());
      el.classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) {
      note.textContent = 'Please fill in your name, a valid email and the project details.';
      return;
    }
    var subject = 'Project enquiry: ' + d.get('type');
    var body = d.get('msg') + '\n\nFrom: ' + d.get('name') + ' (' + d.get('email') + ')';
    window.location.href = 'mailto:shaikhumar06122001@gmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    note.textContent = 'Opening your email app. If nothing opens, email me directly at the address on the left.';
  });
})();
