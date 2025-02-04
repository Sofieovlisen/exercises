const list = document.querySelector("ul");




const barArray = [];

setInterval(generateBars, 100)

function generateBars(){
    const randomNum = Math.round(Math.random()*100);
    const li = document.querySelector("li");
    li.style.setProperty("--height", randomNum);
    list.appendChild(li);
    barArray.push(randomNum);
    console.log("GENERATE BARS", barArray);
    if(barArray.length >= 20){
        console.log("barArray er længere end 20");
        barArray.shift();
        
        
    }
    
    
}