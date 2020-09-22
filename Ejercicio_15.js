/* Escribe un programa que pida dos variables, y después intercambie sus valores (si por ejemplo ponemos 8 en la variable a y 
    5 en la variable b, que al final del programa la variable a tenga el valor 5 y la variable b el valor 8).
 */

let a = window.prompt("Introduce un número");
let b = window.prompt("Introduce otro número diferente");

console.log("a: " + a + "   b: " + b);

c = a;
a = b;
b = c;

console.log("a: " + a + "   b: " + b);
