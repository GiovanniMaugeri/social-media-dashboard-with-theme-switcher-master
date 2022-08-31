var darkmode = true;

const toggler = document.getElementById("toggle-wrapper")
const bigCards = document.getElementsByClassName("big-card")
const smallCards = document.getElementsByClassName("small-card")
const navBar = document.getElementsByClassName("top-navbar")
const doc = document.body;

toggler.addEventListener("click", ()=>{
    if(darkmode)
        toggler.children[0].style.left = (60-22-4) + "px";
    else{
        toggler.children[0].style.left = 4 + "px";
    }
    darkmode = !darkmode
    if(darkmode){
        switchToDarkMode()
    }else{
        switchLightMode()
    }
})
/*<div class="small-card light-mode-card-bg">
      <p class="small-card-action light-mode-text-gray">Profile Views</p>
      <img src="./images/icon-youtube.svg" alt="" class="small-card-logo">
      <p class="small-card-count light-mode-text-black">1407</p>
      <p class="small-card-perc negative"><img src="./images/icon-down.svg" alt="">12%</p>
</div>*/
function switchToDarkMode(){
    navBar[0].classList.remove("light-mode-bg")
    navBar[0].children[0].children[0].classList.remove("light-mode-text-black");
    navBar[0].children[0].children[1].classList.remove("light-mode-text-gray");

    navBar[0].children[1].children[0].classList.remove("light-mode-text-gray");
    navBar[0].children[1].children[1].classList.remove("light-mode-bg-gray");
    navBar[0].children[1].children[1].children[0].style.background= "black";
    Array.from(bigCards).forEach(card => {
        card.classList.remove("light-mode-card-bg")
        card.children[0].children[1].classList.remove("light-mode-text-gray")
        card.children[1].classList.remove("light-mode-text-black")
        card.children[1].children[0].classList.remove("light-mode-text-gray")
    })

    Array.from(smallCards).forEach(card => {
        card.classList.remove("light-mode-card-bg")
        console.log(card.children);
        card.children[0].classList.remove("light-mode-text-gray")
        card.children[2].classList.remove("light-mode-text-black")
    })

    doc.classList.remove("light-mode-bg")

}
function switchLightMode(){
    navBar[0].classList.add("light-mode-bg")
    navBar[0].children[0].children[0].classList.add("light-mode-text-black");
    navBar[0].children[0].children[1].classList.add("light-mode-text-gray");

    navBar[0].children[1].children[0].classList.add("light-mode-text-gray");
    navBar[0].children[1].children[1].classList.add("light-mode-bg-gray");
    navBar[0].children[1].children[1].children[0].style.background= "white";

    Array.from(bigCards).forEach(card => {
        card.classList.add("light-mode-card-bg")
        card.children[0].children[1].classList.add("light-mode-text-gray")
        card.children[1].classList.add("light-mode-text-black")
        card.children[1].children[0].classList.add("light-mode-text-gray")
    })

    Array.from(smallCards).forEach(card => {
        card.classList.add("light-mode-card-bg")
        card.children[0].classList.add("light-mode-text-gray")
        card.children[2].classList.add("light-mode-text-black")
    })

    doc.classList.add("light-mode-bg")
}