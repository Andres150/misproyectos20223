function clic ()
document.getElementById("text_numero").onclick=mostrar;

function mostrar(){
   let numero=document.getElementById("text_numero").value;
    alert(numero);
}