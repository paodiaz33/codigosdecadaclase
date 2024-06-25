/*export let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
}*/


//variables 
/*/*let numerSecreto = 4;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

console.log(numeroUsuario);
/* este codigo realiza 
la comparacion del numero ingresado por el usuario*/

/*if (numeroUsuario == numerSecreto) {
    //acertamos, fue verdadera la condición.
    alert ("¡Acertaste el número");
}else{
    //la condición no se cumplio
    alert ("Lo siento, no acertaste el número");
}*/

/*let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}*/


alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto);
}