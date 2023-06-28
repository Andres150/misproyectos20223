function clic(){
    document.getElementById('btn1').onclick=Mostrar;

}
function Mostrar(){
   let nombre=document.getElementById('nombre').value;
   let edad=document.getElementById('edad').value;
   alert(nombre+' su edad es= '+edad)
}
window.onload=clic;