function clic(){
    document.getElementById('btn1').onclick=Mostrarnombre;
}
function Mostrarnombre(){
    let nombre=document.getElementById('n1').value;
    let apellido=document.getElementById('n2').value;
    let nombrecompleto=nombre+" "+apellido;
    document.getElementById('nombrecompleto').value=nombrecompleto;
}
window.onload=clic;