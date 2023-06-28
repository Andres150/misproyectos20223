function clic(){
    document.getElementById('btn1').onclick=Mostrar;
    
    let checkotros=document.getElementById("checkedotros").checked;

   if(checkotros){
  //   alert("hola");// }
   document.getElementById('otros').readOnly=false;
   }
   else{
    document.getElementById('otros').readOnly=true;
    document.getElementById('otros').value="";
   }
}
function Mostrar(){
    let contar=0;
    let checkbox1=document.getElementById('checkbox1').checked;
    let checkbox2=document.getElementById('checkbox2').checked;
    let checkbox3=document.getElementById('checkbox3').checked;
    let checkbox4=document.getElementById('checkbox4').checked;
    let otros=document.getElementById('otros').value;
   
    
    if(checkbox1){
      contar++;
    }
    if(checkbox2){
        contar++;
      }
      if(checkbox3){
        contar++;
      }
      if(checkbox4){
        contar++;
      }   
   
      if (otros){
        contar++;
       } 
     
    
     
      alert(contar+otros);
}


window.onload=clic;