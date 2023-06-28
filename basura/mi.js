/*function estado(){
    let num1=document.getElementById("n1").value;
    let num2=document.getElementById("n2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    alert((num1+num2));
}
*/
/*function numeros(){
    let num1=document.getElementById("n1").value;
    let num2=document.getElementById("n2").value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    document.getElementById("resultado").value=(num1+num2);  
}
*/
function numeros(){
    let miselect=document.getElementById('select');
    let num1=document.getElementById('n1').value;
    let num2=document.getElementById('n2').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    document.getElementById('creador').value=miselect.selectedIndex;
    document.getElementById('suma').value=miselect.options[miselect.selectedIndex].value=(num1+num2);
    document.getElementById('resta').value=miselect.options[miselect.selectedIndex].value=(num1-num2);
    document.getElementById('Multiplicación').value=miselect.options[miselect.selectedIndex].value=(num1*num2);
    document.getElementById('división').value=miselect.options[miselect.selectedIndex].value=(num1/num2);


}

