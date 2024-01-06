//NAVEGACIÓN
document.getElementById("img-nav").addEventListener("click", mostrarMenu);
document.getElementById("back-nav").addEventListener("click", cerrarMenu);

let nav = document.getElementById("navegation-container");
let backgroundMenu = document.getElementById("back-nav");

function mostrarMenu() {
    //Muestra la columna de navegación.
    nav.style.right = "0px";
    backgroundMenu.style.display = "block"
}

function cerrarMenu() {
    //Cierra la columna de navegación.
    nav.style.right = "-250px"
    backgroundMenu.style.display = "none"
}


//LOGIN

document
    .getElementById("login")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        console.log(username);
        var password = document.getElementById("password").value;
        console.log(password);

        if (username === "lucas" && password === "123") {
            var url = "alumno.html?usuario=" + username;
            console.log(url);
            window.location.href = url;
        } else if (
            username === "alejandro" &&
            password === "12345"
        ) {
            var url = "docente.html?usuario=" + username;
            console.log(url);
            window.location.href = url;
        } else {
            alert("Usuario y/o contraseña inválidos.");
        }
    });


//WELCOME (No logré hacer que funcione. Ni insertándolo directo en el HTML)

document.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(windows.location.search)
    console.log(urlParams)
    var username = urlParams.get("usuario")
    console.log(username)

    document.getElementById("welcome").textContent =
        "¡Bienvenido, " + username + "!"
})


//ASISTENCIA DE SEMINARIO RESERVADA

//MODO NOCTURNO