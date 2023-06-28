function clic(){
    document.getElementById('btn1').onclick=deporte;
}
function deporte(){
    let sitios= '';
    let cbx1=document.getElementById('checkbox1').checked;
    let cbx2=document.getElementById('checkbox2').checked;
    let cbx3=document.getElementById('checkbox3').checked;
    if(cbx1){
        sitios= sitios +' Fútbol,';
    }
    if(cbx2){
        sitios= sitios +' Básket,';
}
   if(cbx3){
    sitios= sitios +' Tenis,';
    
}
 alert('El deporte o los deportes que elegió son:'+sitios)
}
window.onload=clic;