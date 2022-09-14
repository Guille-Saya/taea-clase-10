/* ejercicio frase completa */
let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida a ";
let palabra = " Es muy divertida!!"
let fraseCompleta = saludo + nombre + palabra;
console.log(fraseCompleta)

/* ejercicio javascript */
let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos.";

console.log(frase);

/* Concatenado números 1 */

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let texto = " Concatenando números y textos"
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3 + texto;

console.log(concatenaNumeros);

/* Trabajando console.warn */

var age = prompt("Cual es tu edad?");
console.log(age);
var nombre1 = prompt("Escriba su nombre:");
console.warn(nombre1, age); 

/* Mayor o menor de edad masculino y femenino */

let edad;
let sexo;
edad = prompt("Ingrese su edad:");
sexo = prompt("Ingrese su sexo: ");
if (edad >= 18 && sexo == "masculino" || "Masculino" || "MASCULINO"){
    alert("Puedes entrar, eres mayor de edad!!")
}
else{
    if(edad >= 20 && sexo == "femenino" || "Femenino" || "FEMENINO"){
        alert("Puedes entrar, eres mayor de edad")
     }
    else{
        alert("No puedes ingresar, eres menor de edad.")
    }
}

