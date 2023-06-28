function MostrarMensaje(){
    //Función sin parametros. No retorna ningún valor 
    document.write("cuidado");
       document.write("Ingrese su documento correctamente <br> ");
}
//Función con parametros. No retorna ningún valor 
function MostrarComprendidos(x1,x2){
  var inicio;
  for(inicio=x1;inicio<=x2;inicio++) 
  {
    document.write(inicio+' ');
  } 
}
// Función  que resive parametros y los retorna
function ComvertirCastellano(x){
    if(x==1)
      return "uno";
    if(x==2)
      return "dos";
    if(x==3)
      return "tres";
}
var contador=0;
function incrementar(){
    contador++;
    alert('El contador ahora vale:'+ contador)

}
function mostrar(){
  var nombre=document.getElementById('Nombre').value;
  alert('Su nombre es: '+nombre);
}

