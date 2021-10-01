//ESTO ES CÓDIGO JAVASCRIPT

//variables
var mivariable= 80;
var mivariable='Hola';
var mivariable=true;
var mivariable=3.5;

let nombre='Juan';
let edad=10;
let trabaja=false;
let estatura=1.80;
let inicial='J';

//constantes 
const pi = 3.141516;

//arreglos
let colores=['naranja', "rojo", 'azul', 'verde'];

colores[4]='blanco';
colores[9]='negro';

let mixto=['hola', true, 27, '@', 3.1548, colores];

//objeto = Ansi C => estructura 
let persona = {
    nombre: 'Juan',
    estatura: 1.80,
    trabaja: true,
    pasatiempos: ['correr', 'bailar', 'peliculas'],
    domicilio: {
        calle: 'hidalgo',
        numero: 345,
        colonia: 'centro',
        ciudad: 'victoria'
    }
}

console.log('Nombre: ' + persona['nombre'] + ' Estatura: ' + persona['estatura']);

/*alert('Nombre: ' + persona['nombre'] + ' Estatura: ' + persona['estatura']);

persona['edad'] = prompt('Que edad tienes');*/

/*estructuras de control */

//operador ternario

let salario = edad>18?10000:5000;
alert(salario);

if(trabaja && edad>=18){
    alert("es trabajador");
}else if(trabaja && edad>18){
    alert("Es muy joven para trabajar");
}else if(!trabaja && edad>=18){
    alert("no seas flojo");
}else{
    alert("Sigue descansando");
}

let nota='A';
switch(nota){
    case 'A':
        console.log('10');
        break;
    case 'B':
        console.log('9');
        break;
    case 'C':
        console.log('8');
        break;
    case 'D':
        console.log('7');
        break;
    default:
        console.log('tronado');
}

/*estructuras de repetición */

for(let i; i<5; i++){
    console.log(i);
}

let resp = 's';

while(resp=='s'){
    console.log('Hola');
    resp = prompt("Deseas continuar en ciclo (s/n)");
}

do{
    console.log('Hola de nuevo');
}while(prompt("Deseas continuar en ciclo (s/n)")=='s');

/* 
    la CFE genera la factura con base en 
    la lectura de Kwh consumidos en un bimestre

    los primeros 300kw son a la tarifa1 (basica)
    los siguientes 300 kw son a la tarifa 2(intermiedia)
    de 601 kw hacia arriba son a la tarifa de alto consumo

    dado un consumo en Kw y los costos de cada tarifa 
    escribir un pequeño programa  en javascipt que 
    obtenga el total a pagar y presente el detalle 
    a pagar de cada tarifa

    1000kw   t1 $1, t2 
        300 * $1 
        300 * $3
        400 * $5
       -----------------
       $3200 
*/