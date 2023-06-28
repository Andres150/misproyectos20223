function clic(){
   document.getElementById("boton1").onclick=mostrar;
}
function mostrar(){
   let textarea=document.getElementById("textarea1").value.length;
   if(textarea>100){
    alert("Mucho texto");
   }
   else{
    alert("ok");
   }
}
window.onload=clic;