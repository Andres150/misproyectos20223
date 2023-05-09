let contador =0;
function incrementar(){
    contador++;
    alert('contador ='+contador);    
}
function mostrar(){
    let nombre=document.getElementById('nombre').Value;
    let edad=document.getElementById('edad').value;
    alert('Hola '+nombre);
    alert('su edad es '+edad);
}
function verificar(){
  let clave=document.getElementById('clave').value;
  if(clave.length)
  alert('la clave no pueda tener menos de 8 caracteres');
  else{
    alert('cumple con el tamaño de los caracteres')

  }
}
function cambiarColor(){
    let miselec=document.getElementById('cambiodecolor');
    document.getElementById('numeroindice').value=miselect.selectedIndex;
    document.getElementById('textoseleccionado').value=miselect.options[miselect.selectedIndex].text;
    document.getElementById('valorasociado').value=miselect.options[miselect.selectedIndex].value;

  }
/*
function hacerclic(){
  //  document.getElementById('incremento').onclick=incrementar;
   // document.getElementById('confirm').onclick=mostrar;
 }*/

 window.onload=hacerclic;