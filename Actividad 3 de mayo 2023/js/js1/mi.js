function clic(){
    document.getElementById('bt1').onclick=uno;
    document.getElementById('bt2').onclick=dos;
    document.getElementsByTagName('input')[2].onclick=tres;
    //document.getElementById('bt3').onclick=tres;
    document.getElementById('bt4').onclick=cuatro;
    document.getElementById('bt5').onclick=cinco;
    document.getElementsByTagName('select')[0].onchange;
    
    
}
function uno(){
 alert("Hola uno")
}
function dos(){
    alert("Hola dos")
}
function tres(){
    alert("Hola tres")
}
function cuatro(){
    alert("Hola cuatro")
}
function cinco(){cinco
    alert("Hola cinco")
}
window.onload=clic;