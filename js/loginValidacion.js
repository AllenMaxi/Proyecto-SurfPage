function validar(event){
event.preventDefault()

    const form = document.querySelector(".form");
    
    const div = document.querySelector(".mensaje");
    const mensaje = document.createElement("div").textContent = "Te has registrado correctamente"
    let username, email, password;
    username = document.getElementById("username").value
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    
    expresion =  /\w+@\w+\.+[a-z]/;
    if(username === "" || email === "" || password === ""){
        alert("Todos los campos son obligatorios");
        return false;
    } else if(!expresion.test(email)){
      alert("El email es incorrecto")
      return false;
    }
    else if(username.length < 5 || username.length > 20){
        alert("El usuario ingresado debe tener mas de 5 caracteres paro menos de 20");
        return false
    } else if(password.length < 5 && password.length > 20){
        alert("La contraseña debe contar con mas de 5 caracteres pero menos de 20")
        return false
    } 
    else{
     div.textContent = mensaje;
    setTimeout(() => {
    window.location.href = "carrito.html"
    }, 2000);
   
    }
    
}



// console.log("SessionStorage", sessionStorage);

// function LimpiarLocalStorage() {
//   console.log("SessionStorage antes", sessionStorage);
//   localStorage.clear();
//   console.log("SessionStorage despues ", sessionStorage);
// }

// function CrearUsuario() {
//   var nombre = prompt("Ingresa tu nombre:");
//   var email = prompt("Ingresa tu email:");
//   //convertimos el objeto literal en una clase
//   // var userInfo = {
//   //   nombre: nombre,
//   //   email: email,
//   //   agregarProduct: function (id) {
//   //     console.log(`se agrego el prod: ${id} al carrito`);
//   //   },
//   // };
//   //Esta es la clase final del usuario
//   var nuevoUsuario = new User(nombre, email);

//   GuardarUsusarioResgistrado(nuevoUsuario);
// }





