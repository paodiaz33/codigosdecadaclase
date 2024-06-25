//alert('Bienvenido al juego del número secreto');
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0; 
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 5;

//console.log(numeroSecreto);
while( numeroUsuario != numeroSecreto) {
     numeroUsuario = parseInt(prompt(`me indicas un número entre 1 y ${numeroMaximo} por favor:`));

    console.log(typeof(numeroUsuario));
    /* este codigo realizala comparacion*/
    if (numeroUsuario == numeroSecreto) {
        //acertamos, fue verdadera la condición.
        alert(`Acertaste, el numero secreto es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            
                alert('El número secreto es menor');
            }else{
                alert('El número secreto es mayor');
            }
         //incrementar el contador de intentos cuando la persona no acierta
        //intentos =  intentos + 1;
        //intentos += 1;
        intentos++;
       // palabraVeces = 'veces';
        if (intentos > maximosIntentos){
            alert(`llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
 

    }        
     // alert('El número secreto era ' + numeroSecreto);
}