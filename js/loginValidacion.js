const arreglo = JSON.parse(sessionStorage.users)

function validar(event){
event.preventDefault()

    const form = document.querySelector(".form");
    
    const div = document.querySelector(".mensaje");
    const mensaje = document.createElement("div").textContent = "Has ingresado correctamente"
    let username, password;
    username = document.getElementById("username").value
    password = document.getElementById("password").value
    
    expresion =  /\w+@\w+\.+[a-z]/;
    if(username === "" || password === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(username.length < 5 || username.length > 20){
        alert("El usuario ingresado debe tener mas de 5 caracteres paro menos de 20");
        return false
    } else if(password.length < 5 && password.length > 20){
        alert("La contraseña debe contar con mas de 5 caracteres pero menos de 20")
        return false
    } else if (arreglo[0].nombre !== username || arreglo[0].contraseña !== password){
        alert("el usuario o contraseña son incorrectos")
        return false; }
    else{
     div.textContent = mensaje;
    setTimeout(() => {
    window.location.href = "carrito.html"
    }, 2000);
   
    }
    
}

//Forget Password
function recoverPassword (e) {
let modalBG = document.querySelector(".modal-bg");
modalBG.classList.add("is-visible");
}

let closeBtn = document.getElementsByClassName("close")[0]
closeBtn.addEventListener("click", (e) =>{
closeBtn.closest(".modal-bg").classList.remove("is-visible")
})


const inputEmail = document.querySelector(".email");
const btnSend = document.querySelector(".send");
const mensaje = document.querySelector(".mensajeConfirm")
btnSend.addEventListener("click", e => {
    
  mensaje.innerHTML = `Te enviaremos la confirmacion a ${inputEmail.value} <br>
    Gracias`;
setTimeout(() => {
    mensaje.innerHTML =""
}, 4000);
} )

inputEmail.addEventListener("change", e => {
    // console.log(e.target.value)
  
})

 





