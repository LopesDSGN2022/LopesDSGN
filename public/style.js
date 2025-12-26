document.addEventListener("DOMContentLoaded", () => {

  /* ===== CONTADOR ===== */
  const counters = document.querySelectorAll('.counter');
  let started = false;

  function startCounters() {
    if (started) return;

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 80;

      function update() {
        if (count < target) {
          count += increment;
          counter.innerText = '+' + Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = '+' + target;
        }
      }
      update();
    });

    started = true;
  }

  window.addEventListener('scroll', () => {
    const section = document.getElementById('branding');
    if (!section) return;

    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 120) {
      startCounters();
    }
  });

  /* ===== FIM CONTADOR ===== */


  /* ===== BANNER STRATEGY - IDV ===== */
  const strategyImages = [
    "images/logo/logo-1.webp",
    "images/logo/logo-2.webp",
    "images/logo/logo-3.webp",
    "images/logo/logo-4.webp",
    "images/logo/logo-5.webp",
    "images/logo/logo-6.webp",
    "images/logo/logo-7.webp",
    "images/logo/logo-8.webp",
    "images/logo/logo-9.webp"
  ];

  let strategyIndex = 0;
  let strategyInterval;
  const strategyImg = document.getElementById("strategyImg");

  function changeStrategyImage() {
    if (!strategyImg) return;

    const nextIndex = (strategyIndex + 1) % strategyImages.length;
    const preload = new Image();
    preload.src = strategyImages[nextIndex];

    preload.onload = () => {
      strategyImg.style.opacity = 0;
      setTimeout(() => {
        strategyImg.src = preload.src;
        strategyImg.style.opacity = 1;
        strategyIndex = nextIndex;
      }, 300);
    };
  }

  function startStrategySlider() {
    strategyInterval = setInterval(changeStrategyImage, 7000);
  }

  function stopStrategySlider() {
    clearInterval(strategyInterval);
  }

  if (strategyImg) {
    strategyImg.addEventListener("mousedown", stopStrategySlider);
    strategyImg.addEventListener("mouseup", startStrategySlider);
    strategyImg.addEventListener("mouseleave", startStrategySlider);
    strategyImg.addEventListener("touchstart", stopStrategySlider);
    strategyImg.addEventListener("touchend", startStrategySlider);

    startStrategySlider();
  }

  /* ===== FIM BANNER STRATEGY - IDV ===== */

  /* ===== BANNER PRINCIPAL ===== */
  const bannerImages = [
    "images/banner-principal/banner-1.webp",
    "images/banner-principal/banner-2.webp",
    "images/banner-principal/banner-3.webp",
    "images/banner-principal/banner-4.webp",
    "images/banner-principal/banner-5.webp"
  ];

  let bannerIndex = 0;
  const banner = document.getElementById("bannerImage");

  if (banner) {
    setInterval(() => {
      banner.classList.add("fade-out");

      setTimeout(() => {
        bannerIndex = (bannerIndex + 1) % bannerImages.length;
        banner.src = bannerImages[bannerIndex];
        banner.classList.remove("fade-out");
      }, 1200);
    }, 10000);
  }

});

/* ===== FIM BANNER PRINCIPAL ===== */

/* ===== CAMINHO BASE DAS IMAGENS ===== */
const basePath = window.location.pathname.includes("/projetos/") ? "../images/" : "images/";

/* ===== LISTA DE PROJETOS ===== */
const listaProjetos = [
  { slug: "barnno", nome: "Barnno", capa: basePath + "marcas/barnno/capa-barnno.webp" },
  { slug: "bestshape", nome: "Best Shape Health Food", capa: basePath + "marcas/Bestshape/capa-best.webp" },
  { slug: "lalolita", nome: "Lalolita Joias Folheadas", capa: basePath + "marcas/Lalolita/capa-lalolita.webp" },
  { slug: "nina", nome: "Nina Distribuidora EK", capa: basePath + "marcas/ninaek/capa-nina.webp" },
  { slug: "natane", nome: "Natane Menezes", capa: basePath + "marcas/natanemenezes/capa-natane.webp" },
  { slug: "viviane", nome: "Viviane Boniolo", capa: basePath + "marcas/vivianeboniolo/capa-viviane.webp" },
  { slug: "amarena", nome: "Amarena", capa: basePath + "marcas/Amarena/capa-amarena.webp" },
  { slug: "cafeconffe", nome: "Cafeteria Café Conffé", capa: basePath + "marcas/cafeconffe/capa-cafeconffe.webp" },
  { slug: "d2volt", nome: "D2VOLT - Soluções Elétricas", capa: basePath + "marcas/d2volt/capa-d2volt.webp" },
  { slug: "veritas", nome: "Veritas Joias", capa: basePath + "marcas/veritas/capa-veritas.webp" },
  { slug: "molupa", nome: "Molupa Lingerie", capa: basePath + "marcas/molupa/capa-molupa.webp" },
  { slug: "elevora", nome: "Elévora Digital", capa: basePath + "marcas/elevoradigital/capa-elevora.webp" }
];




/* ===== RENDERIZAÇÃO ===== */
const container = document.getElementById("listaProjetos")

if(container){
  // Verifica se a página definiu um array de projetos ativos
  const projetosAtivos = window.PROJETOS_ATIVOS || listaProjetos.map(p => p.slug)

  listaProjetos
    .filter(projeto => projetosAtivos.includes(projeto.slug))
    .forEach(projeto => {
      container.innerHTML += `
        <div class="image">
          <a href="telas2.html?projeto=${projeto.slug}">
            <img src="${projeto.capa}" class="banner-projeto" alt="${projeto.nome}">
            <div class="contenttt">
              <h1>${projeto.nome}</h1>
              <p>Ver Mais</p>
            </div>
          </a>
        </div>
      `
    })
}

 /* ===== FIM LISTA DE PROJETOS ===== */
