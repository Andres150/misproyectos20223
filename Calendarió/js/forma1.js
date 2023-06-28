function miclic(){
    let n1=document.getElementById("checkbox1").checked;
    
    if(n1){
        document.getElementById("caja1").disabled=false;
        document.getElementById("caja2").disabled=false;
        document.getElementById("caja3").disabled=false;
        document.getElementById("caja4").disabled=false;
        document.getElementById("caja5").disabled=false;
        document.getElementById("caja6").disabled=false;
    }
    else{
        document.getElementById("caja1").disabled=true;
        document.getElementById("caja2").disabled=true;
        document.getElementById("caja3").disabled=true;
        document.getElementById("caja4").disabled=true;
        document.getElementById("caja5").disabled=true;
        document.getElementById("caja6").disabled=true;

    }
    
}