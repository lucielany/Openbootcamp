// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"] 

const miSet = new Set(array)

console.log(array)//[1, 2, 3, 4, 5, 'hola', {id: 5}, 'hola']
console.log(miSet)//set {1, 2, 3, 4, 5, 6, 'hola', {id: 5}} // Sólo almacena valores ÚNICOS, no repetidos

// .add()
miSet.add(9)
console.log(miSet)//set {1, 2, 3, 4, 5, 6, 'hola', {id: 5}, 9}
miSet.add(4)
console.log(miSet)//set {1, 2, 3, 4, 5, 6, 'hola', {id: 5}, 9} // no añade el 4 porque ya está incluído

// .delete() // METODO ELIMINAR
miSet.delete("hola")
console.log(miSet)//set {1, 2, 3, 4, 5, 6, {id: 5}, 9}

// .clear() // METODO VACIAR
// miSet.clear()
// console.log(miSet) //set{ }

// .has() //METODO CONTIENE
// console.log(array.includes(2)) // true (contiene)
console.log(miSet.has(40)) // false (no contiene)

// .size
console.log(miSet.size)//8 

miSet.forEach(valor => {
    console.log(valor) //1, 2, 3, 4, 5, 6, {id: 5}, 9
})

const it_miSet = miSet.values()
console.log(it_miSet) //{[Iterator]}

const ar_miSet = [ ...miSet ]
console.log(ar_miSet[1])//2