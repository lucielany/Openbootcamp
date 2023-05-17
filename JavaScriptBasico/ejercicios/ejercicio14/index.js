const botonInfo = document.querySelector("#btn")

botonInfo.addEventListener("click", () => {
    alert("Se ha hecho click en el botón")
 
})

// eslint-disable-next-line no-undef
$("button").click(function() {
    console.log("Hola, estoy utilizando jQuery")
})