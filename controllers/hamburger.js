const d = document
const headerBg = d.querySelector(".header")
const panelIsActive = d.querySelector(".navbar__list")

export default function menuHamburger(btnhamburguer,navbar__list,navbar__link){
    d.addEventListener("click", (e)=> {
        if(e.target.matches(btnhamburguer) || e.target.matches(`${btnhamburguer} *`)){
            d.querySelector(navbar__list).classList.toggle("is-active")
            d.querySelector(btnhamburguer).classList.toggle("is-active")
        }
        if(e.target.matches(navbar__link)){
            d.querySelector(navbar__list).classList.remove("is-active")
            d.querySelector(btnhamburguer).classList.remove("is-active")
        }
    })
}

menuHamburger(".hamburger", ".navbar__list", ".navbar__link")