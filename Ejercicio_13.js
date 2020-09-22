/* Escribe un programa que pida al usuario la anchura y altura de un rectángulo y que calcule y
muestre su área y su perímetro (el área es la altura por la anchura y el perímetro es 2 por
    la suma de la altura y la anchura).

 */

let anchura = parseInt(window.prompt("Introduce un número"));
let altura = parseInt(window.prompt("Introduce otro número"));

let area = anchura * altura;
let perimetro = 2 * (anchura * altura);

console.log("Resultado del area: " + area);
console.log("Resultado del perímetro: " + perimetro);
