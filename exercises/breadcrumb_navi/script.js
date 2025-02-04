const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },{ name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];



document.querySelector("button").addEventListener("click", lavSti); //Siger at hvis der klikkes på knappen, refererer den til functionen "lavSti", der så starter

function lavSti(){
        bc.forEach((vare, last) => {
            if(last === bc.length -1) { //tager det sidste element i array'et og siger at hvis "last" er lig med det, så skal den indsætte varens navn i html'en i et liste element inde i ul'en.
                document.querySelector("ul").innerHTML += `<li>${vare.name}</li>`
            }else {
                document.querySelector("ul").innerHTML += `<li><a href="${vare.link}">${vare.name}</a></li>` // siger at hvis det ikke, så skal både varens navn indsættes som varens link i et anchor tag i liste elementet i ul listen i html'en.
            }
        
            
        });
    }


   


   

        
        
        










