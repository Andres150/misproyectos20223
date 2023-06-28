function estados(){
    let miselect=document.getElementById('Mino');
    document.getElementById('Uno').value=miselect.selectedIndex;
    document.getElementById('dos').value=miselect.options[miselect.selectedIndex].text;
    document.getElementById('tres').value=miselect.options[miselect.selectedIndex].value;

}
/*function suma(){
    let num1=document.getElementById('n1').value;
    let num2=document.getElementById('n2').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    alert('El valor de la suma es' +(num1+num2))

}*/
function dos(){
    let num1=document.getElementById('n1').value;
    let num2=document.getElementById('n2').value;
    num1=parseInt(num1);
    num2=parseInt(num2);
    alert('El valor de la suma es' +(num1-num2))

    }