
let menuItems = document.querySelectorAll('.adidas-menu ul li');
let dropdown = document.querySelector('.header-drpdwn');

function toggleDropdown(visible) {
    if (visible) {
        dropdown.style.visibility = 'visible';
    } else {
        dropdown.style.visibility = 'hidden';
    }
}

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => toggleDropdown(true));
    item.addEventListener('mouseout', (event) => !dropdown.contains(event.relatedTarget) && toggleDropdown(false));
});

dropdown.addEventListener('mouseover', () => toggleDropdown(true));
dropdown.addEventListener('mouseout', (event) => !Array.from(menuItems).some(item => item.contains(event.relatedTarget)) && toggleDropdown(false));










function burgerMenu(){
    let burger = document.getElementById("burger-js")

    if(burger.style.transform === "translateX(-100%)"){
        burger.style.transform = "translateX(0%)";
    } else{
        burger.style.transform = "translateX(-100%)"
    }
}



function player(){
    let goVideo = document.getElementById("shoes");
    let svg1 = document.getElementById("changer1")
    let svg2 = document.getElementById("changer2")
    if(goVideo.paused){
   goVideo.play()
       svg1.style.display = 'none'
        svg2.style.display = 'block'
    }else{
        goVideo.pause()
        svg1.style.display = 'block'
        svg2.style.display = 'none'
    }
    
}



function swich(){
    let svg3 = document.getElementById("unmute")
    let svg4 = document.getElementById("mute")
    if(svg3.style.display !== "none"){
        svg3.style.display = "none"
        svg4.style.display = "block"

        
    }else{
        svg3.style.display = "block"
        svg4.style.display = "none"
    }
}

