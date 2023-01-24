/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//botão para ativar e desativar o modo noturno
const night = document.querySelector('body #header')
const night2 = document.querySelector('body main')
const night3 = document.querySelector('footer')
const power = document.querySelectorAll('nav .power')

for (const element of power) {
  element.addEventListener('click', function () {
    night.classList.toggle('dark')
    night2.classList.toggle('dark')
    night3.classList.toggle('dark')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

// TESTIMONIALS carousel swiper slider

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLLREVEAL: Faz com que os elementos da página surjam suavemente
 const scrollReveal = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
   reset: true
 })

 scrollReveal.reveal(
   `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #class .text, #class .image,
   #contact .text, #contact .links,
   footer .brand, footer .social`,
   { interval: 50 }
 )

/* botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

// MENU ATIVO CONFORME A SEÇAO VISIVEL NA PAGINA
