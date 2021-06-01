const btnSeccion = document.querySelector(".seccion");

console.log("localStorage", localStorage);

btnSeccion.addEventListener("click", (e) => {
    e.preventDefault()
let username = document.querySelector(".username").value;
let contraseña = document.querySelector(".contraseña").value;
if(username === "" || contraseña === ""){
alert("todos los campos son obligatorios")
}else{
window.location.href = "carrito.html"
}
} )

function LimpiarsessionStorage() {
  console.log("SessionStorage antes", sessionStorage);
  sessionStorage.clear();
  console.log("SessionStorage despues ", sessionStorage);
}

function CrearUsuario() {
  var nombre = prompt("Ingresa tu nombre:");
  var email = prompt("Ingresa tu email:");
  //convertimos el objeto literal en una clase
  // var userInfo = {
  //   nombre: nombre,
  //   email: email,
  //   agregarProduct: function (id) {
  //     console.log(`se agrego el prod: ${id} al carrito`);
  //   },
  // };
  //Esta es la clase final del usuario
  var nuevoUsuario = new User(nombre, email);

  GuardarUsusarioResgistrado(nuevoUsuario);
}






