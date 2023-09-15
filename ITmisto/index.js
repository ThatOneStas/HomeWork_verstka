const BURGER_BTN = document.querySelector(".burger")
const HEADER = document.querySelector("header")
BURGER_BTN.addEventListener("click", ()=>{
    BURGER_BTN.classList.toggle('active')
    HEADER.classList.toggle('active')
    const MOB_MENU = document.querySelector(".menu")
    MOB_MENU.classList.toggle('active')
})