const menu = document.querySelector(".burger-menu")
const close = document.querySelector(".close")
const nav = document.querySelector(".navigation")

menu.addEventListener("click", e => {
    nav.classList.add("open-nav")
    
})

close.addEventListener("click", e => {
    nav.classList.remove("open-nav")
})