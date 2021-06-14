//MODALS
function btnPlay (event){
    if(event.target.classList.contains("btn-One")){
         let modal = document.querySelector(".modal-bg-one")
         modal.classList.toggle("is-visible")
     };
    if(event.target.classList.contains("btn-Two")){
        let modal = document.querySelector(".modal-bg-two")
        modal.classList.toggle("is-visible")
    };
    if(event.target.classList.contains("btn-Three")){
        let modal = document.querySelector(".modal-bg-three")
        modal.classList.toggle("is-visible")
    }
};
 

function closeModal (event) {
   const close = document.querySelectorAll(".close")
   for (let i = 0; i < close.length; i++) {
    close[i].closest(".modal-bg").classList.remove("is-visible")
       }
};