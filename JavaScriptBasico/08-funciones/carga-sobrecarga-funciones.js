// Carga y sobrecarga de funciones
function saludar() {
  hola()
}

function hola() {
  console.log("Hola! Soy la función hola()") //Hola! Soy la función hola()
}

saludar()

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

// function recursivo() {// error Maximum call stack size exceeded 
//     recursivo()
// }

// recursivo()