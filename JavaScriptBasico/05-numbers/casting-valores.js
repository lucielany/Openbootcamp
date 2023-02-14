// Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a); //2
console.log(b); //Number 3 {}
console.log(a + b); //5
console.log(a.valueOf() + b.valueOf()); //5

console.log(b.valueOf());//3

let str = new String("Hola soy un string");
console.log(str); //0: 'H',1: 'o',2: 'l',3: 'a',4: ' ',5: 's',6: 'o',7: 'y',8: ' ',9: 'u',10: 'n',11: ' ',12: 's',13: 't',14: 'r',15: 'i',16: 'n',17: 'g' }
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n); //NaN
console.log(isNaN(n)); //true

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor); //Infinity cuano se divide por 0

let divisor_2 = null;
console.log(numerador / divisor_2); // Infinity cuando se divide por 2

// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);//string
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2);//23.09

console.log(parseInt(numero))//5
console.log(parseFloat(numero))//5.89

let num3 = 4;
console.log(parseInt(num3))//4
console.log(parseFloat(num3)) //4

// Números hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));//239031

// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);//0.0000000000000000222
console.log(min_valor_JS);//5e-324
console.log(max_valor_JS);