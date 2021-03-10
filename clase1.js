//alert('Hola externo');
// document.write('Hola document');
// console.log('Hola consola');
/*
VARIABLES
number(int, float, double), string, boolean(true,false),
undefined, arreglo, objeto
var - let - const
sintaxis:
var identificador;//declarando
identificador = valor; // inicializando
o también
var identificador = valor; //dos pasos en uno
identificador = valor2;
identificador = valor3;
*/
// var nombre = 'Austry';
// console.log(nombre);
// var edad = 20;
// console.log(edad);
// edad = 22;
// console.log(edad);
// var precio = 25.6;
// console.log(precio);
// var resultado = true;
// console.log(resultado);
// var X;
// alert('Hola ' + nombre + ' tu edad es ' + edad);//concatenar
// console.log(2 + 5);
// console.log('5' + 2);
//operadores aritméticos: + - * / %(modulo trae el resto)
// var num1 = 10;
// var num2 = 20;
// console.log(num1 * num2);
// var suma = num1 + num2;
// console.log(suma);
// console.log(5 % 2);
// num1 += 50;// num1 = num1 + 50; -= *= /= %=
// num2++;// num2 = num2 + 1; --
//operadores relacionales < > <= >= == !=
// document.write(num1 < num2);
//operadores lógicos && (and) || (or)
/*
TRUE && TRUE = TRUE
TRUE && FALSE = FALSE
FALSE && TRUE = FALSE
FALSE && FALSE = FALSE

FALSE || FALSE = FALSE
FALSE || TRUE = TRUE
TRUE || FALSE = TRUE
TRUE || TRUE = TRUE
*/
// var a = true, b = false;
// console.log(a || b);
// console.log(a && b);
// var correo = window.prompt('Escribe tu correo');
// document.write('tu email es ' + correo);
// var num1 = parseInt(window.prompt('Escribe un número'));
// var num2 = parseInt(window.prompt('Escribe otro número'));
// var result = num1 + num2;
// alert(result);
// var novela = window.confirm('Che seguro que quieres?');
// document.write(novela);

// //LABORATORIO
// var x = 10, y = 20;
// //*********A */
// x = x + x + 1;
// y = y - y - x;
// console.log(x);
// console.log(y);
// //*********B */
// x = 10, y = 20;
// x = (x - y) + 4;
// y = 4 + (y + 5);
// console.log(x);
// console.log(y);
// //EJERCICIO 2
// //A
// var palabra1 = "hola";
// var palabra2 = "chau";
// var frase = "";
// frase = palabra1 + " mundo";
// console.log(frase);
// //D
// palabra1 = "1+1";
// palabra2 = "2/0";
// frase = palabra1 + "=2";
// console.log(frase);
// //EJERCICIO 3, 4 y 5
// var edad = window.prompt('Escribe tu edad');
// var nombre = window.prompt('Escribe tu nombre');
// var apellido = window.prompt('Escribe tu apellido');
// var sueldo = parseInt(window.prompt('Escribe tu sueldo'));
// var bonus = parseInt(window.prompt('Escribe tu bonus'));
// alert('El nombre de usuario es ' + nombre);
// alert('El apellido es ' + apellido);
// alert('Tu edad es ' + edad);
// document.write('El nombre de usuario es ' + nombre);
// document.write('El apellido  ' + apellido);
// document.write('El edad  ' + edad);
// var total = sueldo + bonus;
// document.write('Vas a cobrar ' + total);

/*
sintaxis if
if(condición){
    ...instrucciones...
}else{
    ...instrucciones...
}
*/
// var num = 20;
// //si mi número es menor que 100
// if(num < 100){
//     document.write("si es menor");
// }else{
//     document.write("no es menor");

// }
// solicitar un número al usuario y decir si es par o impar
var x = parseInt(window.prompt('Escribe un número'));
if (x % 2 == 0) {
    alert('El número ' + x + ' es par');
} else {
    alert('El número ' + x + ' es impar');
}