const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];//De esta manera obtenemos el ultimo slider slide

const btnNext = document.querySelector("#btn-left");
const btnPrev = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast)//Esto insertara la ultima imagen al inicio cuando se le de al boton prev


btnNext.addEventListener("click", Next)
btnPrev.addEventListener("click", Previus)

function Next () {
 let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
 slider.style.marginLeft = "-200%";//Este margin negativo hara aparecer el segundo elemento
 slider.style.transition = "all 0.5s";
 setTimeout(function(){
    slider.style.transition = "none";//No necesitamos que se tenga transicion del primero al ultimo
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);//que el primer elemento aparezca cuando terminamos el slider
    slider.style.marginLeft = "-100%";
}, 500)
}


function Previus () {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
       slider.style.transition = "none";
       slider.insertAdjacentElement("afterbegin", sliderSectionLast);
       slider.style.marginLeft = "-100%";
   }, 500)
   }

setInterval(() => {
    Next()
}, 5000);



 



