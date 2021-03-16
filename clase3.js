/*
for(inicial;condición;ajuste){
    ..instrucciones..
}
*/

// for (var i = 1; i <= 10; i++) {
//     document.write(i + " - ");
// }
/*
solicitar al usuario un número
y mostrar la tabla de multiplicar de ese número
2 X 1 = 2
2 X 2 = 4
*/

// var num = parseInt(window.prompt("Escribe un número"));
// for (var i = 0; i <= 10; i++) {
//     console.log(num + " X " + i + " = " + (num * i) + "<br>");
// }

//arreglos
// var nombres = new Array('Jeremias', 'Luciano', 'Ale', 'Cesar');
// console.log(nombres[1]);
// var edad = [20, 5, 4, 10, 8, 6, 2, 12, 21, 1];
// console.log(edad[3]);
// var datos = ["Juan", 10, 80.2, true];
// console.log(datos.length);
// var tam = edad.length;
// for (var i = 0; i < tam; i++) {
//     console.log(edad[i]);
// }
/*
carrera: solicitar nombres de los atletas, tiempo
el atleta con menos tiempo
*/
// var atletas = ["Ale", "Cinthia", "Erica", "Ignacio", "Julian"];
// var tiempo = [20, 15, 8, 12, 11];
// var menor = tiempo[0];
// var ind = 0;
// for (var i = 0; i < tiempo.length; i++) {
//     if (tiempo[i] < menor) {
//         menor = tiempo[i];
//         ind = i;
//     }
// }
// document.write("El ganador es: " + atletas[ind] + " con un tiempo de: " + menor);

//funciones útiles para trabajar con arreglos
var x = [20, 5, 4];
//x.push(100);//agregar al final del arreglo
//x.unshift(100);//agregar al principio
//x.pop();//elimina al final
//x.shift();
//x[1] = 1;
// x.splice(1, 0, 1);//indice, cantidad a borrar, el nuevo dato
// console.log(x);//elimina al principio

//mostrar las actividades en común
// var persona1 = ['leer', 'programar', 'comer', 'bailar'];
// var persona2 = ['dormir', 'escribir', 'comer', 'programar'];
// var actividades = [];
// for (var i = 0; i < persona1.length; i++) {
//     for (var j = 0; j < persona2.length; j++) {
//         if (persona1[i] == persona2[j]) {
//             actividades.push(persona2[j]);
//         }
//     }
// }
// console.log(actividades);

/*
solicitar al usuario el inicio y el límite,
crer al arreglo,  
mostrar el promedio de esos números
*/
// var ini = parseInt(window.prompt('Escribe un número para iniciar'));
// var fin = parseInt(window.prompt('Escribe un número para finalizar'));
// var suma = 0;
// if (fin < ini) {
//     alert("Error el número fin debe ser mayor")
// } else {
//     var num = [];
//     for (var i = ini; i <= fin; i++) {
//         num.push(i);
//         suma += i;
//     }
// }
// console.log(num);
// console.log(num.length);
// console.log("El promedio es " + (suma / num.length));

//objetos -> clave:valor
// let cliente = { 'nombre': 'Pedro', 'apellido': 'Casanovas', 'edad': 20 };
// console.log(cliente.nombre);
// let clientes = [
//     { 'nombre': 'Pedro', 'apellido': 'Casanovas', 'edad': 20 },
//     { 'nombre': 'Ana', 'apellido': 'Perez', 'edad': 50 },
//     { 'nombre': 'Juan', 'apellido': 'Castillo', 'edad': 5 },
//     { 'nombre': 'Fulanito', 'apellido': 'De Tal', 'edad': 500 }
// ];
// console.log(clientes[1].apellido);
// document.write(clientes[1].nombre + " " + clientes[1].apellido);

//funciones
//sin parámetros
// function saludar() {
//     alert("Hola función!");
// }
// function saludar2() {
//     var saludo = "Hola función verdadera";
//     return saludo;
// }
// function saludar3(nombre) {
//     alert("Hola " + nombre);
// }
// function saludar4(nombre = "Fulano") {
//     alert("Hola " + nombre);
// }
// function sumar(a, b, c) {
//     let suma = a + b + c;
//     return suma;
// }
//saludar();
//document.write(saludar2());
//var n = window.prompt("Escribe tu nombre");
//saludar3(n);
//saludar4(n);
//document.write(sumar(10, 20, 30));
/*
crear un sistema solicitar usuario y clave
3 funciones
var nombre, contrasena;

function usuario(){
    var usuario = window.prompt("Por favor, ingrese el usuario");
    return usuario;
}
function clave(){
    var pass = parseInt(window.prompt("Por favor, ingrese la clave"));
    return pass;
}
function validar(nombre, contrasena){
    if((nombre == "Luciano") && (contrasena == 1234)){
        window.location.href = 'ingreso.html';
    }else{
        alert("Usuario o clave incorrecta");
    }
}
nombre = usuario();
contrasena = clave();
validar(nombre, contrasena);

*/
