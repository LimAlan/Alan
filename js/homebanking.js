//Declaración de variables
var nombreUsuario = "Alan Lima";
var saldoCuenta = 8500;
var limiteExtraccion = "3000";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar


function cambiarLimiteDeExtraccion() {

var nuevolimite = prompt("Nuevo limite de extraccion");
var limiteingresado = parseInt(nuevolimite);
limiteExtraccion = limiteingresado;
actualizarLimiteEnPantalla();
alert("Tu nuevo limite de extraccion es " + limiteExtraccion);
}



function extraerDinero() {

    var ingresarDinero = prompt("¿Cuanto dinero quiere extraer?");
    var numeroingresado = parseInt(ingresarDinero);
    resultado = saldoCuenta - numeroingresado;
    alert("Usted retiro " + ingresarDinero  + "\nUsted tenia " + saldoCuenta + "\nUsted tiene " + resultado);
    saldoCuenta = resultado;
    actualizarSaldoEnPantalla();
    console.log(saldoCuenta);


saldoCuenta = saldoCuenta - sacar;
actualizarSaldoEnPantalla();
console.log(saldoCuenta);

}



function depositarDinero() {

    var ingresarDinero = prompt("¿Cuanto dinero quiere depositar?");
    var numeroingresado = parseInt(ingresarDinero);
    resultado = saldoCuenta + numeroingresado;
    alert("Usted deposito " + ingresarDinero  + "\nUsted tenia " + saldoCuenta + "\nUsted tiene " + resultado);
    saldoCuenta = resultado;
    actualizarSaldoEnPantalla();
    console.log(saldoCuenta);



}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}