const burgerMenu = document.querySelector('.burger-menu')
const headerButtons = document.querySelector('.header-buttons')
burgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active')
    headerButtons.classList.toggle('active')
    
})
    


