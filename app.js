let numeroSecreto = 0;
let intentos = 1; 
let listaNumerosSortados = [];
let numeroMax = 11;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);

    if(numeroDeUsuario=== numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ?'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
            
        }
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja(params) {
    document.querySelector('#ValorUsuario').value='';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSortados);
    //Si ya sorteamos los numeros 
    if(listaNumerosSortados.length == numeroMax){
        asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles');
        }else{
        //Si el numero generado esta en la lista
        if(listaNumerosSortados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaNumerosSortados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condiconesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Dame un numero del 1 al ${numeroMax}`); 
    numeroSecreto = generarNumeroAleatorio ();
    intentos = 1; 
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    condiconesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condiconesIniciales();
