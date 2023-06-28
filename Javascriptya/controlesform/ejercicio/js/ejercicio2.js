function clic(){
    document.getElementById('btn1').onclick=Calcular;

}
function Calcular(){
    let n1=document.getElementById('n1').value;
    let n2=document.getElementById('n2').value;
    if(n1==n2){
       alert(n1+' los números son iguales '+n2);
    }
    else{
        if(n1>n2){
            alert(n1+" es mayor que "+n2);
        }
            else{
                alert(n2+" es mayor que "+n1);
            
        }
       
    }
}   
window.onload=clic;
