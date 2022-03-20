const mudarTelaRelease = document.querySelector('[data-release-btn]')
const mudarTelaShop = document.querySelector('[data-shop-btn]')
const frame = document.querySelector('[data-frame]')

//navigationFrame
mudarTelaRelease.addEventListener('click',(e) => {
    e.preventDefault()
    frame.classList.toggle('active')
    frame.src = "release.html"
})
mudarTelaShop.addEventListener('click',(e) => {
    e.preventDefault()
    frame.classList.toggle('active')
    frame.src = "shop.html"
})
