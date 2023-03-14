// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import

// const moduloMatematicas = require("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial;
// const { factorial, suma } = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas.suma)

const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

// console.log(module)

/*function suma(a, b) {
  return a + b
}

function multiplicar(a, b) {
  return a * b
}

function eleva(a, b) {
  return a ** b
}

function factorial(a) {
  //factorial de 5: 5 * 4 * 3 * 2 * 1
  for(let i = 1; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

const fact = factorial(5)
console.log(fact)
*/
