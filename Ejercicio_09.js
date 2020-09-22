/* Escribe un programa que pida al usuario el radio de un círculo y que calcule y muestre el área y el perímetro (el área de un círculo es PI por radio cuadrado y el perímetro es 2 por radio por PI). PI es = 3.141593 */

let numRadio = parseInt(window.prompt("Introduce un número"));

let numPI = 3.141593;
let areaCirculo = numPI * (numRadio * numRadio);
let perimetroCirculo = 2 * (numRadio * numPI);

console.log(areaCirculo);
console.log(perimetroCirculo);
