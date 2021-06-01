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

//MODALS


//  let buttons = document.querySelectorAll(".btn")
//  console.log(buttons)
//  for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", (event) => {
    function btnPlay (event){
        if(event.target.classList.contains("btn-One")){
             let modal = document.querySelector(".modal-bg-one")
             modal.classList.toggle("is-visible")
         }
        if(event.target.classList.contains("btn-Two")){
            let modal = document.querySelector(".modal-bg-two")
            modal.classList.toggle("is-visible")
        }
        if(event.target.classList.contains("btn-Three")){
            let modal = document.querySelector(".modal-bg-three")
            modal.classList.toggle("is-visible")
        }
        
        }
     

//         const close = document.querySelectorAll(".close")
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener("click", () => {
function closeModal (event) {
       const close = document.querySelectorAll(".close")
       for (let i = 0; i < close.length; i++) {
        close[i].closest(".modal-bg").classList.remove("is-visible")
           
       }
        
}

 



