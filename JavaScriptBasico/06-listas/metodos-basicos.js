// Cómo trabajar con listas (arrays, arreglos, vectores...)
let var1 = { id: false }
let array = [1, "hola", false, { id: 5 }, null, undefined, var1]

console.log(array)

// Acceder a los valores de un array a través de su posición
// array[indice]  => 0, 1, 2, 3, 4, 5, ....
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

// Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array

// Valores al final -> Push
array.push("final", 45, 100, false) // añade valor al final
console.log(array)

// Valores al principio -> Unshift
array.unshift("inicio", 87, 99) // añade valor al principio
console.log(array)

// Métodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array


const array2 = [1, 3, "hola", false]
// Valores al final -> Pop
array2.pop()// elimina ultimo valor
console.log(array2)

// Valores al principio -> Shift
array2.shift() // elimina primer valor
console.log(array2)

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(2, 1);//elimina 1 valores a partir del parámetro 2
console.log(array3)// [1, 2, 4, 5, 6] elimina el 3

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola") //desde el parámetro "2" elimina "0" valores y añade "Hola"
console.log(array3) //[1, 2,'hola', 4, 5, 6]

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)// a partir del parámetro "2", elimina "1" y añade el "3"
console.log(array3)