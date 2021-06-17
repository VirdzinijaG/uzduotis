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
    
    
    document.getElementById("skaiciuoti").addEventListener("click", function() {
        let skaicius = document.getElementById("skaicius").value;

        if (skaicius > 999) {
            alert ("Turi būti triženklis skaičius");
        } else if (skaicius < 100) {
            alert ("Turi būti triženklis skaičius");
        }

        let suma, vidurkis, sandauga;
        let a, b, c;

    
        a = parseInt(skaicius / 100);
        b = parseInt(skaicius % 100 / 10);
        c = parseInt(skaicius % 100 % 10);

        suma = a + b + c;
        vidurkis = (a + b + c) / 3;
        sandauga = a *b *c;


        document.getElementById("rezultatas1").innerHTML = "Suma: " + suma + " vidurkis: " + vidurkis + " sandauga: " + sandauga ;

    } )