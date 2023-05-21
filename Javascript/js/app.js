//Ejecricio 1

var variable_a;
var variable_b;
var resultado;

variable_a = 33;
variable_b = 77;
resultado = variable_a + variable_b;
// alert("resulado ejercicio 1: " + resultado);

//Ejecricio 2

var variable_a = 1;
var variable_b = 2;
var variable_c = 3;
var variable_d = 4;
var variable_e = 5;
var variable_promedio = (variable_a+variable_b+variable_c+variable_d+variable_e)/5;
//alert("resulado ejercicio 2: " + variable_promedio);


//Ejecricio 3

var nota1 = 10;
var nota2 = 25;

/*
if (nota1 > nota2 )
{
    alert("resulado ejercicio 3:  Nota1 es mayor que Nota2 ");
    
}
else
{
    alert("resulado ejercicio 3:  Nota1 es menor que Nota2 ");
}
*/

//Ejecricio 4
/*
var precio = prompt("ingrese precio");
var calculo;

if (precio > 100) {
    calculo = (15*precio)/100;
    alert("resulado ejercicio 4: producto con desscuento del 15%  " + (precio - calculo) );
} else {
    alert("resulado ejercicio 4: producto sin descuento del 15% " + precio  );
}
*/

//Ejecricio 5
/*
Crear un programa que calcule el pago que hacen un grupo de personas para ver una película  
teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona 
y  para grupos de 8 personas o más el pago es 0.5 pesos por persona. 

var cant_personas = prompt("ingrese cantidad de personas del grupo");

if (cant_personas > 8) {
    alert("Total pago (0,5): " + (0.5*cant_personas))
    
} else {
    alert("Total pago (1,5): " + (1.5*cant_personas))
}
*/

//Ejercicio 6. 
/*
Crear un programa que defina las variables “nota1” y “nota2”. Asignarle valores a ambas.  
Comparar si “nota1” es mayor a “nota2” imprimir el mensaje “Nota1 es mayor” o “Nota2 es  mayor” 
según el resultado de la comparación. 
*/
/*
var nota1 = parseInt(prompt("ingrese primer nota: "));
var nota2 = parseInt(prompt("ingrese segunda nota: "));

if (nota1 > nota2) {
    alert("nota1 es mayor que nota2");
    console.log("paso por aca");
} else {
    alert("nota1 es menor o igual que nota2");
    }

  */
    //Ejercicio 7.
  /*   
    Las puntuaciones de las películas se clasifican en: 
    0: mala, 1: regular, 2: buena,3: muy buena, 4: excelente 
    Crear un programa donde se pide al usuario que ingrese un valor entre 0 a 4. Imprimir la  clasificación de la película según el valor numérico. 
    
  
    var puntuacion = prompt("ingrese puntuacion de la pelicula");

    switch (puntuacion) {
        case "0":
            alert("Mala")
            break;
        case "1":
            alert("regular")
            break;
        case "2":
            alert("buena")
            break;
        case "3":
            alert("muy buena")
            break;            
        case "4":
            alert("excelente")
            break;          
    
        default:
            alert("categoria erronea");
            break;
    }
 */
//    Ejercicio 8. 
 /* Crear un programa que imprima una cuenta regresiva de 59 a 0. 

 for (let i = 59; i >= 0; i--) {
    console.log("El valor de i con For es: " + i);
 }
*/
// Ejercicio 9. 
/* Crear un programa que imprima los números pares de 0 a 100. 

for (let i = 0; i <= 100; i++) {
    console.log("El valor de i con For es: " + i);
 }
*/
// Ejercicio 10.
 /* Crear un programa para imprimir todos los números de 100 a 0 inclusive, en 
 
 for (let i = 100; i >= 0; i--) {
    console.log("El valor de i con For es: " + i);
 }
*/
// Ejercicio 11. 
/*Crear un programa en donde el usuario ingresa números y se guardan en un array. Al ingresar “-1”  
se imprimirán los números ingresado junto con sus posiciones dentro del array. 

var puntuacion = parseInt(prompt("ingrese puntuacion de la pelicula: "));
var puntuaciones = [];
var posicion = 0;


while (puntuacion !== -1) {    
    puntuaciones[posicion] = puntuacion;
    posicion++; 
    puntuacion = parseInt(prompt("ingrese puntuacion de la pelicula: "));
}
for (let i = 0; i < puntuaciones.length; i++) {
    console.log("El valor de la puntuacion es: " + puntuaciones[i] + " posicion: " + i);
 }
*/
 // Ejercicio 12. 
/* Crear un programa en donde el usuario ingresa números hasta que ingresa “-1”, en dicho caso el  
programa termina e imprime el promedio de los números ingresados. */

var puntuacion = parseInt(prompt("ingrese puntuacion de la pelicula: "));
var puntuaciones = [];
var posicion = 0;
var puntuacion_suma = 0;
while (puntuacion !== -1) {    
    puntuaciones[posicion] = puntuacion;
    posicion++; 
    puntuacion = parseInt(prompt("ingrese puntuacion de la pelicula: "));
}
for (let i = 0; i < puntuaciones.length; i++) {
    puntuacion_suma = puntuacion_suma +  puntuaciones[i]
 }
 console.log("Promedio: " + (puntuacion_suma/puntuaciones.length) );
