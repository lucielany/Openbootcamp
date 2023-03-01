const obj = {
  nombre: "Luciela",
  apellido: "Yapura",
  edad: 36,
  altura: 160,
  isDeveloper: true
}

const edad = obj.edad 

const lista = [
  
    { ...obj },
    {
      nombre: "Ani",
      apellido: "Tranchini",
      edad: 45,
      altura: 160,
      isDeveloper: false
    },
    {
      nombre: "Rubén",
      apellido: "Canovaca",
      edad: 40,
      altura: 178,
      isDeveloper: true
    }
    
  ]

  lista.sort((a, b) => a.edad - b.edad);