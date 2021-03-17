/*
jquery sintaxis
$("selector").métodos()
algunos métodos: html, text, show, hide, click, mouseover, val, animate
Al seleccionar un elemento del DOM
con js puro:
document.getElementById("selector")
con jquery:
$("selector")
*/
//var titulo = $("h1").text();
//var titulo = $("#titulo").text();
//var titulo = $(".titulo").text();
//alert(titulo);
// $("h1").text('Hola Jquery');
// $('#aparece').click(aparecer);
// $('#desaparece').click(desaparecer);
// function aparecer() {
//     //$('div').show();
//    $('div').fadeIn("slow");
// }
// function desaparecer() {
//     //$('div').hide();
//     $('div').fadeOut("slow")
// }

// $(document).ready(function () {
//     $("#boton").click(function () {
//         $("#panel").slideToggle("slow");
//     });
// });

// $(function () {
//     $("#boton").click(function () {
//         $("#panel").slideToggle("slow");
//     });
// });

// $(function () {
//     $("button").click(function () {
//         $("#cajitaAnimada").animate({ left: '250px' });
//     });
// });
// //funciones lambda o flecha
// var fun = () => {
//     console.log("soy la función flecha");
// }
// var fun2 = (nombre) => {
//     return "soy " + nombre;
// }
// var fun3 = edad => "Mi edad es " + edad;

// fun();
// console.log(fun2("Sofía"));

//SETINTERVAL
// setInterval(function () {
//     alert("hello");
// }, 3000);

function activar() {
    var barra = document.getElementById("caja2");
    var ancho = 1;
    setInterval(rellenar, 500);
    function rellenar() {
        if (ancho != 100) {
            ancho++;
            barra.style.width = ancho + '%';
        }
    }
}

let abc = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z";
let parrafo = document.createElement("p");
parrafo.innerText = "Abecedario: ";
let header = document.querySelector("header");
header.appendChild(parrafo);
let x = 0;
setInterval(() => {
    if (x < abc.length) {
        parrafo.innerText += abc[x];
        x++;
    } else {
        parrafo.innerText = "";
        x = 0;
    }
}, 50);

