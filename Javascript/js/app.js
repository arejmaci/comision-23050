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
var nota1 = parseInt(prompt("ingrese primer nota: "));
var nota2 = parseInt(prompt("ingrese segunda nota: "));

if (nota1 > nota2) {
    alert("nota1 es mayor que nota2");
    console.log("paso por aca");
} else {
    alert("nota1 es menor o igual que nota2");
    }

