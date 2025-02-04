"use strict"




let min = 1;
let max = 100;
let gaet = Math.floor((min + max) / 2);
let guessCount = 0

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#start").addEventListener("click", startSpil);
    document.querySelector("#hojt").addEventListener("click", hoj);
    document.querySelector("#lavt").addEventListener("click", lav);
    document.querySelector("#korrekt").addEventListener("click", korrekt);
    document.querySelector("#genstart").addEventListener("click", genstart);
    document.querySelector("#hojt").classList.add("hidden");
    document.querySelector("#lavt").classList.add("hidden");
    document.querySelector("#korrekt").classList.add("hidden");
    

});

function startSpil() {
    min = 1;
    max = 100;
    gaet = Math.floor((min + max) / 2);
    document.querySelector("#compGæt").textContent = `Er det: ${gaet}?`;
    document.querySelector("#start").classList.add("hidden");
    document.querySelector("#genstart").classList.remove("hidden");
    document.querySelector("#forsøg").textContent = "";
    document.querySelector("#hojt").classList.remove("hidden");
    document.querySelector("#lavt").classList.remove("hidden");
    document.querySelector("#korrekt").classList.remove("hidden");
    document.querySelector("#genstart").addEventListener("click", startSpil);
   
    
    
    
    
}

function hoj() {
    if (gaet > min) {
        max = gaet - 1;
        gaet = Math.floor((min + max) / 2);
        document.querySelector("#compGæt").textContent = `Er det: ${gaet}?`;
        console.log("For højt! Nyt gæt:", gaet);
        
        
}
    guessCount ++;
}

function lav() {
    if (gaet < max) {
        min = gaet + 1;
        gaet = Math.floor((min + max) / 2);
        document.querySelector("#compGæt").textContent = `Er det: ${gaet}?`;
        console.log("For lavt! Nyt gæt:", gaet);
        
    }
    guessCount ++;
}



function korrekt() {
    document.querySelector("#compGæt").textContent = `Computeren gættede rigtigt: ${gaet} 🎉`;
    
    
    updateForsøg();
}

function updateForsøg(){
    document.querySelector("#forsøg").textContent = `Antal gæt: ${guessCount}`;

}



