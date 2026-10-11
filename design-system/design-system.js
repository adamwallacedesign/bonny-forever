/* Design system exploration 03: fade sections in as they scroll into view. Moved from inline <script>, unchanged. */

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
}
