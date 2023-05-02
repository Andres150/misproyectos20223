function mostraralert(){
    alert('hizo click')
   }
   function hacerclic(){
      document.getElementsByTagName('p')[0].onclick=mostraralert;

   }
   window.onload=hacerclic;