function validar(event){
    event.preventDefault()
    
        const form = document.querySelector(".form");
        const inputs = document.querySelectorAll(".form-control")
        const div = document.querySelector(".mensaje");
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
        }else{
            div.innerHTML = `<p> Te has registrado correctamente <br>
                                 Usuario: ${username} <br>
                                 Contraseña: ${password}</p>`
        inputs.forEach((input) => {
            input.value = "";
        })
            
        }
        setTimeout(() => {
            window.location.href = "inicio.html"
        }, 3000);
        SendEmail(username, email, password)
            }
        
const SendEmail = (username, email, password) => {
Email.send({
    Host: "smtp.gmail.com",
    Username: "maxiallende97@gmail.com",
    To: `${email}`,
    From: "maxiallende97@gmail.com",
    Password: "kfysjuuelinkxdzu",
    Subject: `Surf como estilo de vida te envio un mensaje`,
    Body: `${username} te has registrado correctamente <br/> 
    Tu password es: ${password} <br/>
    Muchas gracias por confiar en nosotros.`
}).then((email) => alert("register successfully"))
}

console.log("sessionStorage", sessionStorage);

function LimpiarLocalStorage() {
  console.log("SessionStorage antes", sessionStorage);
  localStorage.clear();
  console.log("SessionStorage despues ", sessionStorage);
}


