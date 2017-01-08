var clignotement = function(){
   if (document.getElementById('commandes').style.visibility=='visible'){
      document.getElementById('commandes').style.visibility='hidden';
   }
   else{
   document.getElementById('commandes').style.visibility='visible';
   }
};

periode = setInterval(clignotement, 800);
