(function () {
  // Nav scroll effect
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, { passive: true });

  // Projects data
  var projects = [
    {
      id: 'tim-ds',
      accent: 'cyan',
      tagColor: 'oklch(50% 0.20 280 / 0.1)',
      tagText: 'oklch(50% 0.20 280)',
      tag: 'Design System',
      title: 'TIM Design System',
      year: '2021–hoje',
      company: 'TIM Brasil',
      subtitle: 'Construção e evolução de um sistema de design para os maiores apps de telecomunicação do país.',
      problem: 'A TIM operava com múltiplos times de produto sem consistência visual ou de interação. Cada equipe recriava componentes do zero, gerando retrabalho e lentidade no ciclo de entrega.',
      strategy: 'Design System modular, documentado e governado — tokens semânticos, biblioteca no Figma, integração com engenharia e processo de adoption gradual.',
      impact: [{ num: '40%', label: 'Redução de retrabalho' }, { num: '3×', label: 'Velocidade de entrega' }, { num: '100%', label: 'WCAG AA' }]
    },
    {
      id: 'meutim',
      accent: 'purple',
      tagColor: 'oklch(50% 0.20 280 / 0.1)',
      tagText: 'oklch(50% 0.20 280)',
      tag: 'Product Launch',
      title: 'App Meu TIM',
      year: '2024',
      company: 'TIM Brasil',
      subtitle: 'Lançamento e evolução de jornadas críticas do principal app de autoatendimento da TIM com foco em KPIs.',
      problem: 'O app precisava de jornadas mais eficientes para reduzir volume no SAC e aumentar o NPS, equilibrando complexidade com simplicidade.',
      strategy: 'Discovery com usuários reais, mapeamento de jornadas críticas, hipóteses priorizadas por impacto x esforço, ciclos curtos de validação.',
      impact: [{ num: '18%', label: 'Redução no SAC' }, { num: '+12pts', label: 'NPS' }, { num: '2M+', label: 'Usuários ativos' }]
    },
    {
      id: 'yduqs',
      accent: 'green',
      tagColor: 'oklch(48% 0.22 158 / 0.1)',
      tagText: 'oklch(48% 0.22 158)',
      tag: 'EdTech Product',
      title: 'App Educacional YDUQS',
      year: '2019–2021',
      company: 'YDUQS',
      subtitle: 'Redesenho da experiência de aprendizado mobile para um dos maiores grupos educacionais do Brasil.',
      problem: 'Alta taxa de abandono nas primeiras semanas. Estudantes não encontravam valor nos primeiros acessos e o onboarding gerava confusão.',
      strategy: 'Research qualitativo com estudantes de diferentes regiões, redesenho do onboarding, fluxos de engajamento baseados em progresso.',
      impact: [{ num: '35%', label: 'Queda no churn' }, { num: '2,4×', label: 'Retenção D7' }, { num: '500k+', label: 'Alunos' }]
    },
    {
      id: 'marlin',
      accent: 'cyan',
      tagColor: 'oklch(55% 0.18 40 / 0.1)',
      tagText: 'oklch(48% 0.18 40)',
      tag: 'Leadership',
      title: 'Liderança em Design',
      year: '2017–2019',
      company: 'Marlin',
      subtitle: 'Construção de time, cultura de design e visão estratégica para produto B2B de médio porte.',
      problem: 'Design inexistente como disciplina. Produto crescendo sem coerência de experiência, sem processo e sem cultura que valorizasse as decisões de design.',
      strategy: 'Estruturação do time, criação de processo integrado ao produto e à engenharia, construção de narrativa interna sobre o valor do design.',
      impact: [{ num: '4×', label: 'Time cresceu' }, { num: '60%', label: 'Satisfação' }, { num: '1ª', label: 'Cultura de design' }]
    }
  ];

  // Render project cards
  var grid = document.getElementById('projects-grid');

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  projects.forEach(function (p) {
    var kpiHtml = p.impact.map(function (k) {
      return '<div class="kpi"><div class="kpi-num" style="color:' + p.tagText + '">' + esc(k.num) + '</div><div class="kpi-label">' + esc(k.label) + '</div></div>';
    }).join('');

    var card = document.createElement('div');
    card.className = 'project-card reveal';
    card.setAttribute('data-accent', p.accent);
    card.innerHTML =
      '<button class="toggle-arrow" type="button" aria-label="Expandir">↓</button>' +
      '<div class="project-tag" style="background:' + p.tagColor + ';color:' + p.tagText + '">' + esc(p.tag) + '</div>' +
      '<div class="project-title">' + esc(p.title) + '</div>' +
      '<div class="project-subtitle">' + esc(p.subtitle) + '</div>' +
      '<div class="project-meta">' +
        '<div class="project-meta-item"><strong>' + esc(p.year) + '</strong>Período</div>' +
        '<div class="project-meta-item"><strong>' + esc(p.company) + '</strong>Empresa</div>' +
      '</div>' +
      '<div class="project-expand">' +
        '<div class="expand-section"><div class="expand-label">Problema</div><div class="expand-text">' + esc(p.problem) + '</div></div>' +
        '<div class="expand-section"><div class="expand-label">Estratégia</div><div class="expand-text">' + esc(p.strategy) + '</div></div>' +
        '<div class="expand-label">Impacto</div>' +
        '<div class="expand-kpis">' + kpiHtml + '</div>' +
      '</div>';

    var expand = card.querySelector('.project-expand');
    var arrow = card.querySelector('.toggle-arrow');

    function toggle() {
      var isOpen = card.classList.toggle('open');
      expand.classList.toggle('open', isOpen);
      arrow.textContent = isOpen ? '↑' : '↓';
    }

    card.addEventListener('click', toggle);
    arrow.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
    grid.appendChild(card);
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
