//Escribe aquí tú código
var resultado = 0;


for (var x = 1; x <= 10; x++) {
	var num = prompt("ingresa el numero"+ x);
	resultado = parseInt(num) + resultado
} 
alert(resultado);
