// Trabajando con Objetos
const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "González",
  isDeveloper: false,
  libros_favoritos: ["El método", "El código de la manifestación"],
  "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id)//4
console.log(obj["4-juegos"])//[1, 2, 3, 4]

const prop = "isDeveloper"
console.log(obj[prop])//false

const obj2 = obj;
console.log(obj2);//...,isDeveloped

obj2.nombre = "Iñigo"
console.log(obj2.nombre)//Iñigo
console.log(obj.nombre)//Iñigo // con objetos lo reemplaza

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)//4
console.log(val2)//6 Con datos primitivos no se reemplaza. Hace una copia.

//////////////

const obj3 = { ...obj } // forma correcta de declarar un objeto para que no se reemplacen los datos originales

console.log(obj.nombre)//Iñigo
console.log(obj3.nombre)//Iñigo

obj3.nombre = "Gorka"

console.log(obj.nombre)//iñigo
console.log(obj3.nombre)//Gorka

/////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
  { titulo: "Lo que el viento se llevó", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo: 2004 },
  { titulo: "TED", anyo: 2012 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.anyo - b.anyo)//MÉTODO PARA ORDENAR (POR AÑO)

console.log(listaPeliculas)
