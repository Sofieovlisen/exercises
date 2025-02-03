// document.querySelector(".h1").append(getRandom()); 

// function getRandom(min, max) {
//     return Math.round(Math.random() * (1 - 100) + 1);
// }
// console.log(getRandom())

// getRandom();
// function getRandom(){
//     const randomnum = Math.floor(Math.random()*100);
//     console.log("Random number", randomnum)

//     document.querySelector(".h1").textContent = (randomnum);

// }

document.querySelector("button").addEventListener("click", evaluateText)

function evaluateText(){
    console.log("KLIK", document.querySelector(".userNumber").value)
    
}