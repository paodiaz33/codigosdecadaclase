// Desafio de arrays

//Ejercicio 1
/*let listaGenerica = [];

//Ejercicio 2
let lenguajesProgamacion = ["JavaScript","C","C++","Kotlin","Python"];

//Ejercicio 3
//agregar elementos
lenguajesProgamacion.push('Java','Ruby','GoLang');

//Ejercicio 4
//mostrar elementos por separado
/*function mostrarElementos(languajesProgramacion){
    for(i = 0; i < lenguajesProgamacion.length; ){
        console.log(lenguajesProgamacion[i]);
        i++;
    }
}
console.log(lenguajesProgamacion);
mostrarElementos(lenguajesProgamacion);*/

//Ejercicio 5
//array inverso
/*let lenguajesInversos = [];
function mostrarElementosInversos(lenguajesProgamacion){
    for(i = lenguajesProgamacion.length-1; i >= 0; ){
        lenguajesInversos.push(lenguajesProgamacion[i]);
        console.log(lenguajesProgamacion[i]);
        i--;
    }
    console.log(lenguajesInversos);
}

 mostrarElementosInversos(lenguajesProgamacion);*/

//Ejercicio 6
//calcular promedio array de numeros
/*let numeros = [33, 45, 2, 1, 22, 3, 4, 5, 6, 8, 9, 10];
let suma = 0; 
let promedio = 0;
function calcularPromedio(numeros){
    for(i = 0; i < numeros.length; ){
        suma += numeros[i];
        i++;
    }
    promedio = suma / numeros.length;
    console.log(promedio);
}
calcularPromedio(numeros);*/

//Ejercicio 7
//calcular el numero maximo y minimo de un array de numeros

/*let listaNumeros = [1, 2,3, 4, 5, 6, 7, 8, 9, 10];
let numeroMaximo = 0;
let numeroMinimo = 1;
function calcularMaximoMinimo(listaNumero){
    for(let i = 0; i < listaNumeros.length; i++){
        if (listaNumeros[i] > numeroMaximo){
            numeroMaximo = listaNumeros[i];
        }else if(listaNumeros[i] < numeroMinimo){
            numeroMinimo = listaNumeros[i];
         }
    }
    console .log('El número maximo de la lista es :' + numeroMaximo);
    console.log('El número minimo de la lista es : '+ numeroMinimo);
}
calcularMaximoMinimo(listaNumeros);*/

//Ejercicio 8
//Suma de numeros de un array

/*let listaNumeros  = [6,44,66,76,94,3,52];
let suma = 0;
function sumaDeNumeros(listaNumeros){
    for (let i = 0; i < listaNumeros.length; ){
        suma = suma + listaNumeros[i];
        i++;

    }
    console.log (suma);

}
sumaDeNumeros(listaNumeros);*/

//Ejercicio 9
// posicion en las lista de un elemento
/*let listaElementos = ['Juan', 'Pedro', 'Maria', 'Ana', 'Luis', 'Carlos'];
let elemento = 'Ana';

function buscarElemento(listaElementos, elemento){
    for(let i = 0; i < listaElementos.length; i++){
        if(listaElementos[i] === elemento){
            console.log('El elemento ' + elemento + ' se encuentra en la posición ' + i);
        }
    }
}
 buscarElemento(listaElementos, elemento);*/

 //Ejercicio 10
 //Suma de dos arrays

 /*let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let listaSuma = [];
 let suma = 0;

 function sumaArrays( numeros1, numeros2){

        for( let i = 0; i < numeros1.length; i++ ){
            suma = numeros1[i] + numeros2[i];
            listaSuma.push(suma);
            console.log(listaSuma);
        }

 }
 sumaArrays( numeros1, numeros2);*/

    //Ejercicio 11
    //calcular el cuadrado de un array de numeros

/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listaDeCudrados = [];
let cuadrado = 0;
function calcularCuadrado(numeros){
    for( let i = 0; i < numeros.length; i++){
        cuadrado = numeros[i] * numeros[i];
        listaDeCudrados.push(cuadrado);
    }
    console.log(listaDeCudrados);

}
calcularCuadrado(numeros);*/