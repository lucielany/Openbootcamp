// Qué son las funciones, cómo se declaran y cómo se utilizan
const nom = "Gorka"

// saludar("Miguel")
saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`)//Hola Gorka
}

////

let nombre_2 = "Juan"
console.log(nombre_2)//Juan

despedir(nombre_2)
console.log(nombre_2)//Juan

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adiós ${nombre}`)//Adiós Diego
}

////

let persona = { nombre: "Juan", apellido: "González" }
console.log(persona)

saludarPersona(persona)

console.log(persona)//{ nombre: 'Juan', apellido: 'González' }

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)//Hola Juan Villar
}

saludar()

///////

function imprimeNumero(numero = 7) { // Parámetros por defecto
    console.log(numero)//7
}

imprimeNumero()

/////////

function imprimir(...parametros) {
    console.log(parametros)//[ 1, 3, 9, 2, 'hola', { id: 9 } ]
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

/////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)

console.log(s)//50

//////
let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)             //hola
    let variable_interna = "adiós"
    console.log(variable_interna)   //adiós
    return a * b
}


console.log(multiplicar(4, 9)) //36