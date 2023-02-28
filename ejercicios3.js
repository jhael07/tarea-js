/*
Realizar en una web pida la edad del visitante
y dependiendo de la edad despliegue un mensaje dando la bienvenida al usuario. Si es
mayor de edad el mensaje deberá decir que “Usted tiene acceso a todos nuestros
servicios”. Si es menor de edad el mensaje deberá decir “Usted tiene accesos a
servicios limitados”.

*/

alert("Bienvenido/a a mi sistema");
const edad = prompt("¿Cuantos años tienes? (solo numeros)");

if (+edad >= 18) {
	alert("Usted tiene acceso a todos nuestro servicios");
} else {
	alert("Usted tiene accesos a servicios limitados");
}
