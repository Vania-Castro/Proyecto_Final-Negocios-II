function sumar( a=0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, i=0, j=0, k=0, l=0){
    document.getElementById("resultado").innerHTML=a + b + c+ d + e + f + g + h + i + j + k + l;
}

document.getElementById("sumar").onclick = function (){
    let p1 =0;
    let p2 =0;
    let p3 =0;	
    let p4 =0; 
    let p5 =0;
    let p6 =0;
    let p7 =0;
    let p8 =0;
    let p9 =0;
    let p10 =0;
    let p11 =0;
    let p12 =0;

if( document.getElementById("p1").checked){

p1=50;
}

if (document.getElementById("p2").checked){

 p2= 20;
}

if (document.getElementById("p3").checked){
 p3= 80;
}

if (document.getElementById("p4").checked){
    p4= 80;
   }
   if (document.getElementById("p5").checked){
    p5= 80;
   }
   if (document.getElementById("p6").checked){
    p6= 80;
   }
   if (document.getElementById("p7").checked){
    p7= 80;
   }
   if (document.getElementById("p8").checked){
    p8= 80;
   }
   if (document.getElementById("p9").checked){
    p9= 80;
   }
   if (document.getElementById("p10").checked){
    p10= 80;
   }
   if (document.getElementById("p11").checked){
    p11= 80;
   }
   if (document.getElementById("p1").checked){
    p12= 80;
   }
sumar(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12)

};


let p1 = document.getElementById('p1');
let msg = document.getElementById('msg');


document.getElementById("p1").onclick = function() {
if(p1.checked) {
  msg.innerText = 'Producto Agregado: Play Station 5';
} else {
  msg.innerText = 'Producto Eliminado: Play Station 5';
}

let p2 = document.getElementById('p2');
let msg2 = document.getElementById('msg2');

document.getElementById("p2").onclick = function() {
    if(p2.checked) {
      msg2.innerText = 'Producto Agregado: Consola Xbox Series S 512 GB';
    } else {
      msg2.innerText = 'Producto Eliminado: Consola Xbox Series S 512 GB';
    }
}

    let p3 = document.getElementById('p3');
let msg3 = document.getElementById('msg3');

document.getElementById("p3").onclick = function() {
    if(p3.checked) {
      msg3.innerText = 'Producto Agregado: Laptop HP';
    } else {
      msg3.innerText = 'Producto Eliminado: Laptop HP';
    }
}

let p4 = document.getElementById('p4');
let msg4 = document.getElementById('msg4');

document.getElementById("p4").onclick = function() {
    if(p4.checked) {
      msg4.innerText = 'Producto Agregado: Pantalla LED';
    } else {
      msg4.innerText = 'Producto Eliminado: Pantalla LED';
    }
}

let p5 = document.getElementById('p5');
let msg5 = document.getElementById('msg5');

document.getElementById("p5").onclick = function() {
    if(p5.checked) {
      msg5.innerText = 'Producto Agregado: Consola Nintendo';
    } else {
      msg5.innerText = 'Producto Eliminado: Consola Nintendo';
    }
}

let p6 = document.getElementById('p6');
let msg6 = document.getElementById('msg6');

document.getElementById("p6").onclick = function() {
    if(p6.checked) {
      msg6.innerText = 'Producto Agregado: Reloj Hawei';
    } else {
      msg6.innerText = 'Producto Eliminado: Reloj Hawei';
    }
}

let p7 = document.getElementById('p7');
let msg7 = document.getElementById('msg7');

document.getElementById("p7").onclick = function() {
    if(p7.checked) {
      msg7.innerText = 'Producto Agregado: iPad Apple';
    } else {
      msg7.innerText = 'Producto Eliminado: iPad Apple';
    }
}

let p8 = document.getElementById('p8');
let msg8 = document.getElementById('msg8');

document.getElementById("p8").onclick = function() {
    if(p8.checked) {
      msg8.innerText = 'Producto Agregado: Servidor Xtreme';
    } else {
      msg8.innerText = 'Producto Eliminado: Servidor Xtreme';
    }
}

let p9 = document.getElementById('p9');
let msg9 = document.getElementById('msg9');

document.getElementById("p9").onclick = function() {
    if(p9.checked) {
      msg9.innerText = 'Producto Agregado: Volante para Xbox';
    } else {
      msg9.innerText = 'Producto Eliminado: Volante para Xbox';
    }
}

let p10 = document.getElementById('p10');
let msg10 = document.getElementById('msg10');

document.getElementById("p10").onclick = function() {
    if(p10.checked) {
      msg10.innerText = 'Producto Agregado: Audífonos Panasonic';
    } else {
      msg10.innerText = 'Producto Eliminado: Audífonos Panasonic';
    }
}

let p11 = document.getElementById('p11');
let msg11 = document.getElementById('msg11');

document.getElementById("p11").onclick = function() {
    if(p11.checked) {
      msg11.innerText = 'Producto Agregado: Asistente de Voz';
    } else {
      msg11.innerText = 'Producto Eliminado: Asistente de Voz';
    }
}

let p12 = document.getElementById('p12');
let msg12 = document.getElementById('msg12');

document.getElementById("p12").onclick = function() {
    if(p12.checked) {
      msg12.innerText = 'Producto Agregado: Consola Sony';
    } else {
      msg12.innerText = 'Producto Eliminado: Consola Sony';
    }
}
};

