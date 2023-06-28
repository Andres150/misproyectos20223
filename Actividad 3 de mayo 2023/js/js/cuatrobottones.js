function hacerclic(){
    document.getElementsByTagName("input")[0].onclick=mostraralert1;
    //document.getElementsByTagName("input")[1].onclick=mostraralert2;
   // document.getElementsByTagName("input")[2].onclick=mostraralert3;
   // document.getElementsByTagName("input")[3].onclick=mostraralert4;

}
function mostraralert1(){
    alert("uno")
}
function mostraralert2(){
    alert("dos")
}
function mostraralert3(){
    alert("tres")
}
function mostraralert4(){
    alert("cuatro")
}
window.onload=hacerclic;