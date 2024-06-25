let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTL = document.querySelector('h1');
    elementoHTL.innerHTML = texto;
    return;
}

function verificarIntrnto(){
    let numeroUsuario = document.getElementById('valorUsuario').value;
    console.log(numeroUsuario);
    return;
}

function intentoDeUsuario(){
    alert('Click desde el botón');
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número del 1 al 100');
