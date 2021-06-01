//Los objeto que creare
  const datos = {nombre : "",
                 email: "",
                 mensaje : "",
                 fecha : "",
                 experiencia : "",
  }
  

formulario.addEventListener("submit", (event) => {
  //PreventDefault para que no actualice la pagina
  event.preventDefault();
   //Validar el formulario
  
   //Usando destructuring
  const {nombre, email, mensaje, experiencia, fecha} = datos;
  
  if(nombre === "" ||email === "" || mensaje === "" || experiencia === "" || fecha === ""){
      MostrarError("Todos los campos son obligatorios");
      return;
      //Corta la ejecucion del codigo 
  } else if(!email.includes("@hotmail.com") || !email.includes("@gmail.com")|| !email.includes("@outlook.com")){
    MostrarMensaje("El email es incorrecto");
       return;
  } else{ MostrarEnvio("Tu clase de surf ha sido programada. Nos comunicaremos contigo a la brevedad");
  
}//Crear la otra alerta de enviar correctamente:
  } ) ;
  
  
  //Muestra un error en pantalla
  
  function MostrarError(mensaje){
      const error = document.createElement("P");
      error.textContent = mensaje;
      error.classList.add("error");
      
      formulario.appendChild(error);
  
      //Desaparezca despues de unos segundos:
      setTimeout(() => {
          error.remove();
      }, 4000);
  }
  
  //Muestra una alerta de que se envio correctamente
  function MostrarEnvio(mensaje){
      const envio = document.createElement("P");
      envio.textContent = mensaje;
      envio.classList.add("envio_correcto");
      
      formulario.appendChild(envio);
      
      setTimeout(() => {
          envio.remove();
      }, 4000);
  }
  
//   function MostrarMensaje(mensaje){
//       const message = document.createElement("P");
//       message.textContent = mensaje;
//       message.classList.add("mensaje_email")
      
//       formulario.appendChild(message);
      
//       setTimeout(() => {
//           message.remove();
//       }, 4000);
//   }

    
    


