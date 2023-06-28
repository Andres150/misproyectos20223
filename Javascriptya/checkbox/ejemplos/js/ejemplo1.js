function clic(){
   document.getElementById('btn1').onclick=contar;
}
function contar(){
    let cantidad=0;
    let cbx1=document.getElementById('checkbox1').checked;
    let cbx2=document.getElementById('checkbox2').checked;
    let cbx3=document.getElementById('checkbox3').checked;
    let cbx4=document.getElementById('checkbox3').checked;
    if(cbx1){
        cantidad++;
    }
    if(cbx2){
        cantidad++;
    }
    if(cbx3){
        cantidad++;
    }
    if(cbx4){
        cantidad++;
    }
    alert("Conoce "+cantidad+" lenguaje")
}
window.onload=clic;