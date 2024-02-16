// // Nivel facil
// // Ejercicio 1

// function sumar() {
//     console.log(100 + 20);
// }

// // // Ejercicio 2

// function sumar() {
//     console.log(100 + 20);
// }
// sumar();

// // // Ejercicio 3

// function sumar(num1, num2) {
//     console.log(num1 + num2);
// }

// sumar(100, 20)
// sumar(20, 50)

// // //Ejercicio 4 

// function sumar(num1, num2) {
//     console.log(num1 + num2);
// }

// let numeroA = 100;
// let numeroB = 20;

// sumar(numeroA, numeroB)

// Ejercicio 5

// function sumar(num1, num2) {
//     let resultado = num1 + num2;
//     console.log(resultado);
// }

// let numeroA = 100;
// let numeroB = 20;

// sumar(numeroA, numeroB)

// Ejercicio 6

// let sumar = function(num1, num2){
//     let resultado = num1 + num2;
//     console.log(resultado);
// }

// let numeroA = 100;
// let numeroB = 20;

// sumar(numeroA, numeroB);

// Ejercicio 7

// let sumar = (num1 , num2) => console.log(num1 + num2);

// let numeroA = 100;
// let numeroB = 20;

// sumar(numeroA, numeroB);

// Nivel medio
// Ejercicio 8

// function saludar(mensaje){
//     console.log(mensaje);
// }

// saludar("Hola mi nombre es Eric");

// Ejercicio 9

// let multiplicacion = function(num1 , num2) {
//     let resultado = num1 * num2;
//     console.log(resultado)
// }

// let numeroA = 40
// let numeroB = 60

// multiplicacion(numeroA, numeroB);

// Ejercicio 10 

// function area(base, altura) {
//     return (base * altura) / 2;
// }

// let base = 5;
// let altura = 3;

// let resultadoArea = area(base, altura);
// console.log("El area del triangulo es: " + resultadoArea);

// function perimetro(ladoA, ladoB, LadoC) {
//     return ladoA + ladoB + LadoC;
// }

// let ladoA = 5;
// let ladoB = 3;
// let LadoC = 8;

// let resultadoPerimetro = perimetro(ladoA, ladoB, LadoC);
// console.log(`El perímetro del triángulo es: ${resultadoPerimetro}`);

// Ejercicio 11

// let calcularTotalCompra = (precio, cantidad) => {
//     let precioTotal = precio * cantidad;
    
//     if (cantidad >= 20){
//         precioTotal -= precioTotal * 0,2;
//     } else if (cantidad >= 10){
//         precioTotal -= precioTotal * 0,1;
//     }

//     return precioTotal;
// }

// let precioProducto1 = 10;
// let cantidadProducto1 = 5;
// console.log("Total de compra 1: $" + calcularTotalCompra(precioProducto1, cantidadProducto1));

// let precioProducto2 = 15;
// let cantidadProducto2 = 15;
// console.log("Total de compra 2: $" + calcularTotalCompra(precioProducto2, cantidadProducto2));

// let precioProducto3 = 25;
// let cantidadProducto3 = 25;
// console.log("Total de compra 3: $" + calcularTotalCompra(precioProducto3, cantidadProducto3));

// Ejercicio 12 

// function esMayorDeEdad(edad){
//     if (edad > 18){
//         return "Eres mayor de edad";
//     } else {
//         return "Eres menor de edad";
//     }
// }

// console.log(esMayorDeEdad(18)); 
// console.log(esMayorDeEdad(19));
// console.log(esMayorDeEdad(40));

// Ejercicio 13

// function calcularImpuesto(ingresoAnual) {
//     let impuesto;

//     if (ingresoAnual <= 10000) {
//         impuesto = ingresoAnual * 0.1; 
//     } else if (ingresoAnual <= 20000) {
//         impuesto = ingresoAnual * 0.15;  
//     } else {
//         impuesto = ingresoAnual * 0.2;  
//     }

//     return impuesto;
// }


// console.log("Impuesto para ingreso de $8,000: $" + calcularImpuesto(8000));
// console.log("Impuesto para ingreso de $15,000: $" + calcularImpuesto(15000));
// console.log("Impuesto para ingreso de $25,000: $" + calcularImpuesto(25000));

// Ejercicio 14

// function verificarDia(numero) {
//     let mensaje

//     switch (numero) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             mensaje = "Es un día laboral";    
//             break;
//         case 6:
//         case 7:
//             mensaje = "Es fin de semana";
//         break;
        
//         default:
//             mensaje = "Número de dia inválido"

//     }

//     return mensaje;
// }

// console.log(verificarDia(4));
// console.log(verificarDia(7));
// console.log(verificarDia(1));

// Ejercicio 15

// function ingresaDatos() {
//     let nombre = prompt("Ingrese su nombre: ");

//     if(!nombre) {
//         console.log("El nombre no puede estar vacío");
//         return;
//     }

//     let apellido = prompt("Ingresa su apellido: ");

//     if(!apellido) {
//         console.log("El apellido no puede estar vacío");
//         return;
//     }
    
//     let edad = prompt("Ingrese su edad: ");

//     if(!edad) {
//         console.log("El edad no puede estar vacío");
//         return;
//     }

//     let  usuario = {
//         nombre: nombre,
//         apellido: apellido,
//         edad: edad
//     }

//     console.log(usuario);
// }

// ingresaDatos();

// Ejercicio 16


// function saludar(nombre) {
//     return "Hola mi nombre es " + nombre;
// }

// function calcularEdad(añoNacimiento, añoActual) {
//     return añoActual - añoNacimiento;
// }

// function presentarse() {
//     let nombreUsuario = prompt("Ingrese su nombre:");

//     let añoNacimientoUsuario = prompt("Ingrese su año de nacimiento:");

//     let edadUsuario = calcularEdad(añoNacimientoUsuario, new Date().getFullYear());

//     let saludo = saludar(nombreUsuario);

//     alert(`${saludo}. Tengo ${edadUsuario} años.`);
// }

// presentarse();
