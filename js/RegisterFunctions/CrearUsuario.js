function CrearUsuario() {
    let nombre, contraseña, email;
    nombre = document.getElementById("username").value
    contraseña = document.getElementById("password").value.toString()
    email = document.getElementById("email").value
  

  var nuevoUsuario = new User(nombre, contraseña, email);

  GuardarUsusarioResgistrado(nuevoUsuario);
}