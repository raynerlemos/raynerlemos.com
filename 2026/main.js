(function () {
  // Nav scroll effect
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, { passive: true });

  // Project card toggle
  document.querySelectorAll('.project-card').forEach(function (card) {
    var expand = card.querySelector('.project-expand');
    var arrow = card.querySelector('.toggle-arrow');

    function toggle() {
      var isOpen = card.classList.toggle('open');
      expand.classList.toggle('open', isOpen);
      arrow.textContent = isOpen ? '↑' : '↓';
    }

    card.addEventListener('click', toggle);
    arrow.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
  });

  // Reveal on scroll
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

  // Active nav link on scroll
  var navLinks = document.querySelectorAll('.nav-links a[data-nav]');
  var sectionIds = ['sobre', 'penso', 'projetos', 'lab', 'contato'];
  var activeObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('data-nav') === e.target.id);
        });
      }
    });
  }, { threshold: 0.35 });
  sectionIds.forEach(function (id) { var el = document.getElementById(id); if (el) activeObs.observe(el); });
})();
