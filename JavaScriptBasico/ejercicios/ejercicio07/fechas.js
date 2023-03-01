const fecha = new Date()

const fecha_nacimiento = new Date(1986, 9, 31, 22, 30, 00)

const EsMasTarde = fecha > fecha_nacimiento

const mes = fecha_nacimiento.getMonth() + 1

const anio = fecha_nacimiento.getFullYear()