function clic(){
    document.getElementById('btn1').onclick=Calcular;

}
function Calcular(){
    let numero=document.getElementById('numero').value;
    alert('el cubo de '+numero+' es = '+(numero*numero*numero));
}
window.onload=clic;