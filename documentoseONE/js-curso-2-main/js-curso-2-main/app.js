titulo = document.querySelector('h1');
titulo.innerHTML = '¡Hora del desafio!';

function consoleBoton(){
    console.log('El botón fue clicado');
};


function botonPrompt(){
    let ciudad = prompt('Escriba por favor el nombre de una ciudad de Brasil ');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
};

function alertBoton(){
    alert('Yo amo JS');
};

function botonSuma(){
    let numero1 = parseInt(prompt('Ingrese el primer número'));
    let numer2 = parseInt(prompt('ingrese el segundo número'));
    alert(`El resultado es: ${numero1 + numer2}`);
};
