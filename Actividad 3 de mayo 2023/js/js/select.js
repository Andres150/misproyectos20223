function cambiodecolor(){

let miselect=document.getElementById("cambiocolor");

document.getElementById("indice").value=miselect.selectedIndex;

document.getElementById("texto").value=miselect.options[miselect.selectedIndex].text;

document.getElementById("valor").value=miselect.options[miselect.selectedIndex].value;
    
}