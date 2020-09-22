/* Escribe un programa que pida la temperatura en celsius y te la calcule en fahrenheit. (para hacer la conversión de celsius a Farenheit : (número de grados celsius * 9 / 5) + 32 */

let gradosCelsius = parseInt(window.prompt("Introduce un núméro"));
let gradosFarenheit = gradosCelsius * 9 / 5 + 32;

console.log(gradosCelsius + " grados celsius");
