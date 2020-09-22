/* Escribe un programa que pida dos números al usuario y muestre el resultado de sumarlos, multiplicarlos, restarlos, dividirlos y el resto de la división*/

let num1 = parseInt(window.prompt("Introduce un número"));
let num2 = parseInt(window.prompt("Introduce otro número"));

let suma = "La suma de los números introducidos es: " + (num1 + num2);
console.log(suma);

let resta = "La resta de los números introducidos es: " + (num1 - num2);
console.log(resta);

let division = "La división de los números introducidos es: " + num1 / num2;
console.log(division);

let restoDivision =
  "El resto de la división de los números introducidos es: " + num1 % num2;
console.log(restoDivision);
