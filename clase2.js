//tenemos 3 números, determinar el mayor
// var num1 = 20;
// var num2 = 10;
// var num3 = 5;
// if(num1 > num2 && num1 > num3){
//     document.write("El número mayor es " + num1);
// }else if(num2 > num1 && num2 > num3){
//     document.write("El número mayor es " + num2);
// }else if(num3 > num1 && num3 > num2){
//     document.write("El número mayor es " + num3);
// }

//boliche entre 18 y 25, 21 tienen bebida gratis
//debemos decir porque no puede pasar
// var edad = window.prompt('Edad para entrar al boliche');
// if (edad >= 18 && edad <= 25) {
//     document.write('Bienvenido, puedes pasar ;)');
//     if (edad == 21) {
//         document.write('<br>Tienes una bebida gratis!!');
//     }
// } else {
//     document.write('Ups! no puedes pasar ;(');
//     if (edad < 18) {
//         document.write('<br>por bebito');
//     } else {
//         document.write('<br>por viejito');
//     }
// }

//CALCULAR EL SALARIO SEMANAL DE UN OBRERO
//MAX 40 HORAS - > 16 U$D (40*16)
//HORAS EXTRAS -> 20 U$D (50)
// var horasNormales = 40, horasExtras = 0;
// var costoHE = 20;
// var costoHN = 16;
// var salario = 0;
// var salarioHE = 0;
// var salarioHN = 40 * 16;
// var nombre = window.prompt('Escribe tu nombre');
// var horas = window.prompt('Escribe las horas trabajadas en la semana');
// if (horas < horasNormales) {
//     salario = horas * costoHN;
// } else {
//     horasExtras = horas - horasNormales;
//     salarioHE = horasExtras * costoHE;
//     salario = salarioHN + salarioHE;
// }
// document.write(nombre + ' tu salario semanal total es ' + salario + ' y el detalle de  las horas extras tienes ' + salarioHE);

//window.location.href = 'archivo.html'

//LABORATORIO
// var rol = window.prompt('Cuál es su rol?');
// if (rol == 'admin' || rol == 'recursos') {
//     var clave = window.prompt('Cuál es su clave?');
//     if (clave == 1234) {
//         var usuario = window.prompt('Cuál es su usuario?');
//         document.write('Hola ' + usuario + ' bienvenido a nuestra aplicación');
//     } else {
//         document.write('Clave incorrecta');
//     }
// } else {
//     window.location.href = 'error.html';
// }

/*
switch(variable){
    case valor:
        ...instrucciones;
        break;
    case valor2:
        ...instrucciones;
        break;
    case valor3:
        ...instrucciones;
        break;
    default:
        ..instrucciones;
        break;

}
*/
// var dia = 'MIERCOLES';
// switch(dia){
//     case 'lunes':
//         document.write('Hoy es lunes de inicio');
//         break;
//     case 'martes':
//         document.write('Hoy es martes de helado');
//         break;
//     case 'miércoles':
//     case 'MIERCOLES':
//         document.write('Hoy es mièrcoles, mitad de semana');
//         break;
//     case 'jueves':
//         document.write('Hoy es jueves de asado');
//         break;
//     case 'viernes':
//         document.write('Hoy es viernes de fista');
//         break;
//     default:
//         document.write('Llegó el fin de semana, a bailar!');
//         break;
// }

//MANEJO DEL DOM
//var titulo = document.querySelector("h1");
//var titulo = document.querySelector("#titulo");
//var titulo = document.getElementById("titulo");
//var titulo = document.querySelector(".titu");
//var titulo = document.getElementsByClassName("titu")[0];
//alert(titulo.innerHTML);
// console.log(titulo);
// titulo.innerHTML = "Hola soy Javascript";
// titulo.style.color = "red";
// titulo.style.backgroundColor = "lightpink";
// titulo.style.border = "1px solid blue";
// titulo.style.padding = "10px";

//FECHAS
// var fecha = new Date();
// //var hoy = fecha.getDay();
// //var hoy = fecha.getFullYear();
// //var hoy = fecha.getDate();
// var dia = fecha.getDate();
// var mes = fecha.getMonth();
// var anio = fecha.getFullYear();
// //console.log(`hoy es  ${dia} / ${mes} / ${anio}`);
// console.log(`hoy es ${dia} / ${mes+1} / ${anio} y ${titulo.innerHTML}`);


//WHILE
/*
while(condición){
    ...instrucciones...
    ajuste
}
*/
var num = 1;
while (num <= 10) {
    document.write("Ganaste<br>");
    num++;//num = num + 1;
}
//num = 11
//impre Ganaste Ganaste Ganaste
/*
do{
    ..instrucciones..
    ajuste
}while(condición);
*/
var x = 10;
do {
    console.log(x);
    x++;
} while (x <= 5);

/*
Realizar un sistema de caja para una farmacia
(juntar las estructuras)
*/