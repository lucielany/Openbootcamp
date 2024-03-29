// Cómo unir dos listas .concat(lista2)
const lista1 = ["hola", 2, false, null]
const lista2 = ["adiós", 8, true, undefined]

console.log(lista1.concat(lista2))//["hola", 2, false, null,"adiós", 8, true, undefined]
console.log(lista1)// No modifica las listas originales

const lista3 = lista1.concat(lista2)//aquí almacena los valores de ambas listas
console.log(lista3)

// Cómo unir dos listas con el factor de propagación (...)
console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4)

// ERROR!! Mal entendido el concepto del factor de propagación
const lista5 = [lista1, lista2]
console.log(lista5) //[["hola", 2, false, null], ["adiós", 8, true, undefined]]