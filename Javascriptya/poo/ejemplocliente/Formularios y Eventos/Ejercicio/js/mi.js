function clic(){
    document.getElementById('uno').onclick=Uno;
    document.getElementById('dos').onclick=Dos;
    document.getElementById('tres').onclick=Tres;
}
function Uno(){
    alert('Se precionó el botón 1');
}
function Dos(){
    alert('Se precionó el botón 2');
}
function Tres(){
    alert('Se precionó el botón 3');
}
window.onload=clic;
