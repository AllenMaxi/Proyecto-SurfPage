const btnDarkMode = document.querySelector(".dark-theme-btn");
const body = document.querySelector("body")


function enableDarkMode () {
    let sun = "☀";
    body.classList.toggle("dark-mode");
    btnDarkMode.textContent = sun;
    sessionStorage.setItem("darkMode", "enabled")
}

function disableDarkMode (){
    let moon = "🌙";
    body.classList.toggle("dark-mode")
    btnDarkMode.textContent = moon
    sessionStorage.setItem("darkMode", "disabled")
}
function btnDarkModeActive (){
 if(sessionStorage.getItem("darkMode") === "enabled"){
      disableDarkMode()
    } else {
      enableDarkMode()
    }
}

if(sessionStorage.getItem("darkMode") === "enabled"){
    enableDarkMode()
}