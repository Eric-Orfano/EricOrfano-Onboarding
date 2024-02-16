// for (let i = 10; i > 0; i = i - 2) {
//     console.log(i)
// }

// for (let i = 10; i > 0; i--) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// Nivel bajo
// Ejercicio 1

// let numeroIngresado = prompt("Ingrese un número del 1 al 100");

// if (numeroIngresado >= 1 && numeroIngresado <= 100) {
//     for (let i = numeroIngresado; i >= 0; i--) {
//         console.log(i);
//     }
// } else {
//     console.log("Numero ingresado fuera del rango permitido")
// }

// Ejercicio 2

// let numeroIngresado = Number(prompt("Ingrese un numero entre 1 y 10:"))

//  if (numeroIngresado >= 1 && numeroIngresado <=10) {

//     for (let i = 1; i<=10; i++ ) {
//         console.log(`${i} * ${numeroIngresado} = ${i * numeroIngresado}`);
//     }

//  } else {
//     console.log("Numero ingresado invalido");
//  }

// Ejercicio 3

// let suma = 0;

// let numeroIngresado;

// while ((numeroIngresado = prompt("Ingrese un número (ingrese 0 para finalizar):")) !== 0) {
 
//     if (!isNaN(numeroIngresado)) {
       
//         suma += numeroIngresado;
//     } else {
//         console.error("Ingrese un número válido.");
//     }
// }

// console.log(`La suma de los números ingresados es: ${suma}`);

// Ejercicio 4

// let suma = 0;
// let numero;

// do {
//     numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));

//     if (!isNaN(numero)) {
//         suma += numero;

//         console.log("Suma actual:", suma);
//     } else {
//         console.log("Por favor, ingrese un número válido.");
//     }

// } while (numero !== 0);

// console.log("Resultado final de la suma:", suma);

// Ejercicio 5 

// let persona = {
//     nombre: "Eric",
//     edad: 26,
//     ciudad: "Ciudad de Rio Negro",
//     profesion: "programador",
//     hobbies: ["video juegos", "softbol"]
// };

// for (let key in persona) {
//     console.log(key);
// }


// Ejercicio 6

// let persona = {
//     nombre: "Eric",
//     edad: 26,
//     ciudad: "Ciudad de Rio Negro",
//     profesion: "programador",
//     hobbies: ["video juegos", "softbol"]
// };

// for (let key in persona) {
//     console.log(`${persona[key]}`);
// }

// Nivel Medio
// Ejercicio 1

// let numeroSecreto = 4;
// let suma = 0;
// let intentos = 0;
// let numeroIngresado = parseInt(prompt("Intenta adivinar el número secreto. Ingresa un número:"));

// while (numeroIngresado !== numeroSecreto) {
//     intentos++;

//     if (numeroIngresado > numeroSecreto) {
//         console.log("El número ingresado es mayor. Intenta de nuevo.");
//     } else {
//         console.log("El número ingresado es menor. Intenta de nuevo.");
//     }

//     numeroIngresado = parseInt(prompt("Ingresa otro número:"));
// }

// console.log("¡Felicitaciones! Adivinaste el número secreto en " + intentos + " intentos.");

// Ejercicio 2

// let numero = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));

// console.log("Divisores de " + numero + ":");

// for (let i = 1; i <= numero; i++) {
//     if (numero % i === 0) {
//         let cociente = numero / i;
//         console.log(i + " es divisor. Resultado es " + cociente + " y sobra 0.");
//     }
// }

// Ejercicio 3

// function sonarCampana(){
//     console.log("Ding Dong")
//     return "Ding Dong,"
// }

// let repeticiones = 5;
// let resultado = "";

// for (let i = 0; i < repeticiones; i++) {
//     resultado += sonarCampana();
// }

// console.log(resultado);

// Ejercicio 4 

const fechaLimite = "1997-8-3"
const fechas = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-21-10", "2001-1-9"]

const fechaLimiteObj = new Date(fechaLimite);
for (const fecha of fechas) {
    const fechaActualObj = new Date(fecha);
    if (fechaActualObj >= fechaLimiteObj) {
        console.log(fecha);
    }
}