/* Escribe un programa que pida tres números al usuario y que calcule y muestre su media. */

let num1 = parseInt(window.prompt("Introduce un número"));
let num2 = parseInt(window.prompt("Introduce otro número"));
let num3 = parseInt(window.prompt("Introduce número más"));

let resultadoMedia = (num1 + num2 + num3) / 3;

console.log("La media de los números introducidos es: " + resultadoMedia);
