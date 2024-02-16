// Nivel bajo
//Ejercicio 1
// let num1 = 4
// let num2 = 5

// if (num1 > num2) {
//     console.log(`Es número mayor`, num1)
// } else {
//     console.log(`Es número mayor`, num2)
// }

//Ejercicio 2
// let num1 = 6
// let num2 = 5

// if (num1 > num2) {
//     console.log(`Es número mayor`, num1)
// } else if (num2 > num1) {
//     console.log(`Es número mayor`, num2)
// } else {
//     console.log(`Ambos numeros son iguales`)
// }

//Ejercicio 3

// let num1 = 4
// let num2 = 4

// if (num1 === num2) {
//     console.log(`Los numeros son iguales`)
// } else {
//     console.log(`Los numeros no son iguales`)
// }

//Ejercicio 4

// let fecha1 = "2023-12-28";
// let fecha2 = "2019-06-04";

// if (fecha1 > fecha2) {
//     console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
// } else {
//     console.log(`Las fechas ${fecha1} y ${fecha2} son iguales`);
// }

// Ejercicio 5

// let fecha1 = "2018-10-7";
// let fecha2 = "2018-02-17";

// if (fecha1 > fecha2) {
//     console.log(`La fecha ${fecha1} es mayor que ${fecha2}`);
// } else if (fecha1 === fecha2) {
//     console.log(`Las fechas ${fecha1} y ${fecha2} son iguales`);
// } else {
//     console.log(`La fecha ${fecha1} es menor que ${fecha2}`);
// }

// Ejercicio 6

// let dato1 = 5
// let dato2 = 7
// let dato3 = 9

// if (dato1 > dato2 && dato1 > dato3) {
//     console.log(`El número ${dato1} es el mayor`)
// } else if (dato2 > dato1 && dato2 > dato3) {
//     console.log(`El número ${dato2} es el mayor`)
// } else {
//     console.log(`El número ${dato3} es el mayor`)
// }

// Nivel
// Ejercicio 1

// let color = prompt("Ingresa un color (rojo, azul o verde)")

// switch (color) {
//     case "rojo":
//         console.log("El color de la pasión")
//         break;
//     case "azul":
//         console.log("El color del mar")
//         break;
//     case "verde":
//         console.log("El color de la naturaleza")
//         break;
//     default:
//         console.log("Color no reconocido")
//         break;
// }

// Ejercicio 2

// let valor1 = prompt("Ingrese el primer valor (de 1 a 100):")
// let valor2 = prompt("Ingrese el segundo valor (de 1 a 100):")
// let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):")
// valor1 = parseFloat(valor1);
// valor2 = parseFloat(valor2); 

// switch (operacion) {
//     case "suma":
//         console.log(`El resultado de la suma de ${valor1} + ${valor2} = ${valor1 + valor2}`);
//         break;
//     case "resta":
//         console.log(`El resultado de la resta de ${valor1} - ${valor2} = ${valor1 - valor2}`);
//         break;
//     case "multiplicacion":
//         console.log(`El resultado de la multiplicacion de ${valor1} * ${valor2} = ${valor1 * valor2}`);
//         break;
//         case "división":
//             console.log(`El resultado de la division de ${valor1} / ${valor2} = ${valor1 / valor2}`)
//         break;
//     default:
//         console.log("Operación no reconocida");
//         break;
// }

// Ejercicio 3

// let persona1 = {
//     nombre: "Eric",
//     edad: "26",
//     altura: "185"
// }

// let persona2 = {
//     nombre: "Gabriel",
//     edad: "27",
//     altura: "175"
// }

// if (persona1.altura > persona2.altura) {
//     console.log(`${persona1.nombre} es más alto que ${persona2.nombre}`);
// } else if(persona1.altura < persona2.altura) {
//     console.log(`${persona2.nombre} es más alto que ${persona1.nombre}`);
// } if (persona1.edad > persona2.edad) {
//     console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
// } else (persona1.edad < persona2.edad); {
//     console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`);
// }

// Ejercicio 4

// let nombre = prompt("Ingrese su nombre:")
// let edad = prompt("Ingrese su edad:")
// let altura = Number(prompt("Ingrese su altura:"))
// let vision = Number(prompt("Ingrese su vision ocular:"))

// if (edad >= 18 && altura > 150 && vision >= 8) {
//     console.log("Estas capacitado para conducir");
// } else {
//     console.log("No estas capacitado para conducir")
// }

// Ejercicio 5

// let edad = Number(prompt("Ingrese su edad:"))

// if (edad <= 12){
//     alert("Eres un infante")
// } else if (edad <= 18){
//     alert("Eres un adolescente")
// } else if (edad < 45){
//     alert("Eres mayor joven")
// } else {
//     alert("Eres anciano")
// } 

// Ejercicio 6

// let numeroPrincipal = Number(prompt("Ingresa un número del 1 al 3"))


// if (numeroPrincipal >= 1 && numeroPrincipal <= 3) {
//     let otroNumero = parseInt(prompt("Ingrese otro número:"));

//     switch (numeroPrincipal) {
//         case 1:
//             alert(`El número ingresado es ${otroNumero}`);
//             break;
//         case 2:
//             alert(`El doble del número ingresado es ${otroNumero * 2}`);
//             break;
//         case 3:
//             alert(`El triple del número ingresado es ${otroNumero * 3}`);
//             break;
//     }
// } else {
//     alert("Ese valor no está permitido");
// }

// Nivel Alto
// Ejercicio 1

// let nombreCliente = prompt("Ingrese su nombre:");
// let tipoPase = prompt("Ingrese el tipo de pase (vip o normal):");
// let miNombre = "eric";
// let pase = "vip";
// let pase2 = "normal";

// if (nombreCliente === miNombre || tipoPase === pase) {
//     alert("¡Bienvenido! Disfruta el evento.");
// } else if (tipoPase === pase2) {
//     let tieneEntrada = prompt("¿Tienes una entrada? (sí o no):");
//     if (tieneEntrada === "si") {
//         alert("¡Bienvenido! Disfruta del evento.");
//     } else {
//         let quiereComprar = prompt("¿Quieres comprar? (sí o no):");
//         if (quiereComprar === "si") {
//             let dineroDisponible = Number(prompt("Ingrese su dinero disponible:"));
//             if (dineroDisponible >= 1000) {
//                 alert("Venta exitosa. ¡Bienvenido!");
//             } else {
//                 alert("Lo sentimos, no tienes suficiente dinero para la compra. ¡Hasta luego!");
//             }
//         } else {
//             alert("¡Hasta luego! Esperamos verte en otra ocasión.");
//         }
//     }
// } else {
//     alert("¡Hasta luego! Esperamos verte en otra ocasión.");
// }