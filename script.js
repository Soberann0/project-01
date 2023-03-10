let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
}

const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.myimageabout',{ delay:350, origin:'left' })
  sr.reveal('.about-text-content',{ delay:350, origin:'right' })
  sr.reveal('.home-image',{ delay:350, origin:'left' })
  sr.reveal('.home-text-content',{ delay:350, origin:'right' })

  sr.reveal('.appetizer-content',{ delay:350, origin:'left' })
  sr.reveal('.appetizer-image',{ delay:350, origin:'right' })
  sr.reveal('.gallery-image',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-content',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-text',{ delay:350, origin:'bottom' })
  sr.reveal('.food-main-content',{ delay:350, origin:'bottom' })
  sr.reveal('.before',{ delay:350, origin:'bottom' })
  sr.reveal('.footer-logo',{ delay:350, origin:'bottom' })


