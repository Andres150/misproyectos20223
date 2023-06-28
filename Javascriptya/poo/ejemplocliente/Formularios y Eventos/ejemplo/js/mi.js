let contador=0;
function clic(){
 document.getElementById('btn1').onclick=Incrementar;
}
function Incrementar(){
   contador++;
   alert("El contador ahora vale: "+contador);
}
window.onload=clic;