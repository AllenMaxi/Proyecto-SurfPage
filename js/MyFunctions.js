// function GuardarUsusarioResgistrado(nuevoUsuario) {
//   //Cargar los usuarios existentes
//   var obtenemosTodosLosUsuariosAnteriores = JSON.parse(
//     sessionStorage.getItem("users")
//   );

//   if (!obtenemosTodosLosUsuariosAnteriores) {
//     obtenemosTodosLosUsuariosAnteriores = [];
//   }

//   //Agrego el nuevo registro
//   obtenemosTodosLosUsuariosAnteriores.push(nuevoUsuario);
//   //Formateo para persistir la informacion
//   var nuevoUsuarioJSON = JSON.stringify(obtenemosTodosLosUsuariosAnteriores);
//   //guardo
//   sessionStorage.setItem("users", nuevoUsuarioJSON);
// }