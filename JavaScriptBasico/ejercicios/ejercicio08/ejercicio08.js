function devuelveTrue() {
  return true
}

const mpromesa = new Promise((resolve, reject) => {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000) 
})

function* munPares() {
  let id = 0
  while(true) {
      yield id += 2
  }
}


const par = munPares();

console.log(par.next().value)