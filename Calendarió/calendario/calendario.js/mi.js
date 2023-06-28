function clic(){
    document.getElementById("btn1").onclick=calendario;
}
function calendario(){
    let fecha_hoy;
    fecha_hoy = new Date();
    let fecha_n = new Date(document.getElementById("cln1").value);
    let anios = fecha_hoy.getFullYear()-fecha_n.getFullYear();
   // alert(document.getElementById("cln1").value)
  // alert(anios)

  if (anios>50){
//alert("no aplica");
setTimeout( function() { window.location.href = "https://www.google.com";},5000);
  }else{
    if (anios>=36){
        //alert("rango entre 36 y 50");
        setTimeout( function() { window.location.href = "./Formulario1.html";},5000);
    }else{
        if(anios>=26){
           // alert("rango entre 26 y 35");
           setTimeout( function() { window.location.href = "./Formulario2.html";},3000);
        }else{
        if(anios>=18){
           // alert("rango entre 18 y 25");
           setTimeout( function() { window.location.href = "./Formulario3.html";},3000);
        }else{
            if(anios>=10){
               // alert("rango entre 10 y 17");
               setTimeout( function() { window.location.href = "./Formulario4.html";},3000);
            }
        }
    }
    }
  }
}
window.onload=clic;