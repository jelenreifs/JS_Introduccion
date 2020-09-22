/* Escribe un programa que pida un número de 3 dígitos y que muestre en pantalla el resultado de sumarlos. */

let num = window.prompt("Introduce un número de 3 dígitos");

let num1 = num.substring(1, 1);
let num2 = num.substring(2, 1);
let num3 = num.substring(3, 1);

console.log(parseInt(num1 + num2 + num3));
