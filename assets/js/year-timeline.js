(function () {
  'use strict';
  var headings = Array.from(document.querySelectorAll('.archive h2')).filter(function (heading) {
    return /^(19|20)\d{2}$/.test(heading.textContent.trim());
  });
  if (headings.length < 2) return;

  var nav = document.createElement('nav');
  nav.className = 'year-timeline';
  nav.setAttribute('aria-label', 'Browse by year');
  var list = document.createElement('ol');
  var links = headings.map(function (heading) {
    if (!heading.id) heading.id = 'year-' + heading.textContent.trim();
    var item = document.createElement('li');
    var link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent.trim();
    link.setAttribute('aria-label', 'Jump to ' + link.textContent);
    link.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      history.pushState(null, '', link.hash);
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
      window.scrollTo({
        top: window.scrollY + heading.getBoundingClientRect().top - 90,
        behavior: 'instant'
      });
    }, true);
    item.appendChild(link);
    list.appendChild(item);
    return link;
  });
  nav.appendChild(list);
  document.body.appendChild(nav);
  document.body.classList.add('has-year-timeline');

  var queued = false;
  function update() {
    queued = false;
    var active = 0;
    headings.forEach(function (heading, index) {
      if (heading.getBoundingClientRect().top <= 130) active = index;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      active = headings.length - 1;
    }
    links.forEach(function (link, index) {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function schedule() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  update();
}());
