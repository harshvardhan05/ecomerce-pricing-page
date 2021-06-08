const btnDescriptionStartup = document.querySelector(".btn-description-startup");
const btnDescriptionBusiness = document.querySelector(".btn-description-business");
const btnDescriptionGrowth = document.querySelector(".btn-description-growth");
const btnDescriptionUltimate = document.querySelector(".btn-description-ultimate");

const btnCloseStartup = document.querySelector(".btn-close-startup");
const btnCloseBusiness = document.querySelector(".btn-close-business");
const btnCloseGrowth = document.querySelector(".btn-close-growth");
const btnCloseUltimate = document.querySelector(".btn-close-ultimate");

const overlayStartup = document.querySelector(".startup")
const overlayBusiness = document.querySelector(".business")
const overlayGrowth = document.querySelector(".growth")
const overlayUltimate = document.querySelector(".ultimate")

btnDescriptionStartup.addEventListener("click", function() {
    overlayStartup.style.display = "block"
})
btnDescriptionBusiness.addEventListener("click", function() {
    overlayBusiness.style.display = "block"
})
btnDescriptionGrowth.addEventListener("click", function() {
    overlayGrowth.style.display = "block"
})
btnDescriptionUltimate.addEventListener("click", function() {
    overlayUltimate.style.display = "block"
})


btnCloseStartup.addEventListener("click", function() {
    overlayStartup.style.display = "none"
})
btnCloseBusiness.addEventListener("click", function() {
    overlayBusiness.style.display = "none"
})
btnCloseGrowth.addEventListener("click", function() {
    overlayGrowth.style.display = "none"
})
btnCloseUltimate.addEventListener("click", function() {
    overlayUltimate.style.display = "none"
})