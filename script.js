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


    let zingsniai = 0;

for (let i=0; i<49; i++) { // pradzioje apibreziamas ciklo kintamasis, dazniausiai nurodomas i ir dazniausiai prasideda nuo 0. i<40 iki kiek turi vykti sitas ciklas. i++ po kiekvieno ciklo ivykdymo i padideja vienetu
   
    let divElementas = document.createElement("div") // dokumento sukurtas divas, bet neatvaizduojamas
    divElementas.classList.add("div-dydis"); // prie div elemento klasiu saraso pridek div dydis
    divElementas.innerText = i+1; // div elemento vidinis tekstas / i+1 kad pradetu numeruoti nuo 1, o ne nuo nulio

    if ((i + 1) % 2 ==0 ) { // kas antras langelis zalias, 2 dalinasi is 2 be liekanos, tai jis bus zalias
        divElementas.classList.add("zalias"); // priskirta klase
    }

    document.querySelector(".elementai").append(divElementas); // pasirink dokumente elementa container ir prijunk (append) sukurta div elementa
   
}

