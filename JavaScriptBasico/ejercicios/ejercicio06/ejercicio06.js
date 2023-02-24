let lista = ["patata", "zanahoria", "leche", "pan", "huevos", "carne"]
lista.push("Aceite de girasol")
lista.pop()

const peliculas = [
  {nombre: "Hacia la libertad", director: "Antoine Fuqua", fecha: new Date(2022, 1, 3)},
  {nombre: "Matrix", director: "Lana Wachowski", fecha: new Date(1999, 6, 25)},
  {nombre: "Avatar", director: "James Cameron", fecha: new Date(2022, 1, 3)}
]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculaPosteior = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = peliculas.map(pelicula => pelicula.director)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = peliculas.map(pelicula => pelicula.nombre)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaConcatenada = listaDirectores.concat(listaTitulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaPropagacion = [...directores, ...nombre]
