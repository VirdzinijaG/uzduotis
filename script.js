"use strict"
 
document.getElementById("patvirtinti").addEventListener("click", function() {
   
    let sekundes = document.getElementById("laikas").value;
    let valandos, minutes, lsekundes;
    
    
    valandos = parseInt(sekundes/3600);
    minutes = parseInt(sekundes/60);
    lsekundes = sekundes - minutes * 60;
    
    if(valandos >= 24) {
        valandos = valandos % 24;
    }
    
    if(minutes >= 60) {
        minutes = minutes % 60;
    }
    
     document.getElementById("rezultatas").innerHTML = valandos +  " val. " + minutes + " min. " + lsekundes + " sek. ";
    } )
    
    