let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
}