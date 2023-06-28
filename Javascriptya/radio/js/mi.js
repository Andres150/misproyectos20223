function clic(){
    document.getElementById("boton1").onclick=mostrar;
}
function mostrar(){
  let radio1=document.getElementById("radio1").checked;
  let radio2=document.getElementById("radio2").checked;
  let sr1=document.getElementById("sr1").checked;
  let sr2=document.getElementById("sr2").checked;
  if(radio1){
    alert(" radio1");
  }
if(radio2){
   alert("radio2");
}
if(sr1){
alert("M");
}
else{
    alert("F");
}

}
window.onload=clic;