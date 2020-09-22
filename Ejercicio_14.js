/* Escribe un programa que pida una distancia (en metros), y el tiempo tardado (como tres números: horas, minutos y segundos)
y que muestre la velocidad en metros por segundo y kilómetros por hora. */

let distanciaMetros = parseInt(window.prompt("Introduce la distancia recorrida (metros)"));
let tiempo = parseInt(window.prompt("Introduce el tiempo tardado (formato: hh/mm/ss)"));

let tiempoHoras = tiempo.str.substring(1, 0);
let tiempoMinutos = tiempo.str.substring(4, 2);
let tiempoSegundos = tiempo.str.substring(8, 6);


/* Metros por segudo */
let segundos = (tiempoHoras * 60) + tiempoMinutos + (tiempoSegundos / 60);
console.log( 'Metros por segundo: ' + (distanciaMetros/segundos));

/* metro por segundo equivale a 3.6 kilómetros por hora(1m / s = 3.6kmH). */
console.log('Kilometros por hora: ' + (distanciaMetros / segundos) * 3.6);



