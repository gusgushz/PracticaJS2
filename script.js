// 1-Encontrar el número más grande en un arreglo: se pedira una serie de números y al final se mostrará cual fue el número mas grande 
// ingresado, unicamente se debe detener hasta que la persona indique que ya no desea seguir ingresando números.
let Btn1 = document.getElementById("Btn1");
Btn1.addEventListener("click", function() {
    let numeros = [];
    let numero;

    do {
      numero = prompt("Ingresa un número (o escribe 'fin' para detenerse):");

      if (numero !== null && numero !== "" && !isNaN(numero)) {
        numeros.push(parseFloat(numero));
      }
    } while (numero !== null && numero.toLowerCase() !== "fin");

    if (numeros.length > 0) {
      let numeroMasGrande = Math.max.apply(null, numeros);
      alert("El número más grande ingresado es: " + numeroMasGrande);
    } else {
      alert("No se ingresaron números.");
    }
  });

// 2-Validar si una palabra es un palíndromo: se pedira una palabra o frase completa y se debera indicar si la palabra es palindromo o no 
// ( que se lee igual de derecha a izquierda y viceversa).
let Btn2 = document.getElementById("Btn2");
    function esPalindromo(cadena) {
        let cadenaSinEspacios = cadena.toLowerCase().replace(/\s/g, "");
        let cadenaInvertida = cadenaSinEspacios.split("").reverse().join("");
        return cadenaSinEspacios === cadenaInvertida;
        }

      Btn2.addEventListener("click", function() {
        let palabra = prompt("Ingresa una palabra o frase:");
  
        if (palabra !== null && palabra !== "") {
          if (esPalindromo(palabra)) {
            alert("La palabra/frase es un palíndromo.");
          } else {
            alert("La palabra/frase no es un palíndromo.");
          }
          } else {
          alert("No se ingresó ninguna palabra o frase.");
          }
    });

// 3-Calcular la suma de los dígitos de un número: se deberá pedir un número y sumar los valores de dicho numero, ejemplo si se ingresa el 
// número 1342 se debe mostrar como resultado la suma de sus digitos que seria 1+3+4+2 = 10.
let Btn3 = document.getElementById("Btn3");
function calcularSumaDigitos(numero) {
    let suma = 0;
    let numeroString = numero.toString();

    for (let i = 0; i < numeroString.length; i++) {
      suma += parseInt(numeroString.charAt(i));
    }
    return suma;
  }

  Btn3.addEventListener("click", function() {
    let numero = prompt("Ingresa un número:");

    if (numero !== null && numero !== "" && !isNaN(numero)) {
      let sumaDigitos = calcularSumaDigitos(numero);
      alert("La suma de los dígitos es: " + sumaDigitos);
    } else {
      alert("No se ingresó un número válido.");
    }
  });

// 4-Generar un número aleatorio dentro de un rango dado: se debera pedir un rango de números y devolver un número aleatorio que se 
// encuentre dentro de dicho rango, ejemplo se ingresa un rango del 5 al 40  y se devueve un aleatorio de 25.
let Btn4 = document.getElementById("Btn4");
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  Btn4.addEventListener("click", function() {
    let rangoMin = parseInt(prompt("Ingresa el número mínimo del rango:"));
    let rangoMax = parseInt(prompt("Ingresa el número máximo del rango:"));

    if (!isNaN(rangoMin) && !isNaN(rangoMax)) {
      let numeroAleatorio = generarNumeroAleatorio(rangoMin, rangoMax);
      alert("El número aleatorio generado es: " + numeroAleatorio);
    } else {
      alert("Los valores ingresados no son válidos.");
    }
  });


// 5-Generar la secuencia de Fibonacci hasta un número dado: se debera pedir un número y posteriormente generar su secuencia fibonnacci, 
// ejemplo si se agrega el número 20, se deberá devolver su secuencia fibonnacci que seria: 0,1,1,2,3,5,8,13 .
let Btn5 = document.getElementById("Btn5");
function generarSecuenciaFibonacci(numero) {
    let secuencia = [0, 1];

    while (secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2] <= numero) {
      let nuevoNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
      secuencia.push(nuevoNumero);
    }

    return secuencia;
  }

  Btn5.addEventListener("click", function() {
    let numeroLimite = parseInt(prompt("Ingresa un número límite:"));

    if (!isNaN(numeroLimite) && numeroLimite >= 0) {
      let secuenciaFibonacci = generarSecuenciaFibonacci(numeroLimite);
      alert("La secuencia de Fibonacci hasta " + numeroLimite + " es: " + secuenciaFibonacci.join(", "));
    } else {
      alert("El número ingresado no es válido.");
    }
  });