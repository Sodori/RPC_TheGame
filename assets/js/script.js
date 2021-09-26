let cOpacity
let cVisible
let opacity

document.addEventListener("DOMContentLoaded", function() {

    let cOpacity
    let cVisible

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            let buttonName = this.getAttribute("class")
            console.log(`You clicked ${buttonName}`)

            switch (buttonName) {
                case "rock":
                    runGame(1);
                    break;
                case "paper":
                    runGame(2);
                    break;
                case "scissor":
                    runGame(3);
                    break;
                case "bReset":
                    console.log("No more scores for you!");
                    document.getElementById("sWin").textContent = "0"
                    document.getElementById("sLoss").textContent = "0"
                    document.getElementById("sTie").textContent = "0"
                    document.getElementById("tAnnounce").style.opacity = 0
                    document.getElementById("cValue").className = "fas fa-hands-wash fa-2x"
                    setTimeout(SparklyClean, 2000)
                    break;
                default:
                    alert(`Unknown button; ${buttonName}, what did you do?!`);
                    throw `Can't understand ${buttonName}, aborting!`;
            }
        })
    }
    
})


function runGame (userChoiceNum) {
    let options = ['far fa-hand-rock fa-2x', 'far fa-hand-paper fa-2x', 'far fa-hand-scissors fa-2x']

    let pcChoiceNum = Math.floor(Math.random() * 3) + 1;
    let pcChoice = options[pcChoiceNum -1]

    let userChoice = options[userChoiceNum -1]

    document.getElementById("cValue").className = pcChoice;
    document.getElementById("cValue").style.opacity = "1";

    if (pcChoiceNum === userChoiceNum) {
        console.log("Tie");
        score(3)
    } else if (userChoiceNum === 1 & pcChoiceNum === 2) {
        console.log(`Lost! ${userChoiceNum} beats ${pcChoiceNum}`);
        score(2)
    } else if (userChoiceNum === 2 & pcChoiceNum === 3) {
        console.log(`Lost! ${userChoiceNum} beats ${pcChoiceNum}`);
        score(2)
    } else if (userChoiceNum === 3 & pcChoiceNum === 1) {
        console.log(`Lost! ${userChoiceNum} beats ${pcChoiceNum}`);
        score(2)
    } else {
        console.log(`Victory! ${userChoiceNum} beats ${pcChoiceNum}`);
        score(1)
    }
}

function score (result) {
    let rValue
    switch (result) {
        case 1:
            rValue = document.getElementById("sWin").textContent
            console.log("Value is " + rValue);
            document.getElementById("sWin").textContent = ++rValue
            console.log(`New value is: ${rValue}`);
            
            ResultEffect("Winner!", "DarkOliveGreen")
            return;
        case 2:
            rValue = document.getElementById("sLoss").textContent
            console.log("Value is " + rValue);
            document.getElementById("sLoss").textContent = ++rValue
            console.log(`New value is: ${rValue}`);
            
            ResultEffect("Looser!", "FireBrick")
            return;
        case 3:
            rValue = document.getElementById("sTie").textContent
            console.log("Value is " + rValue);
            document.getElementById("sTie").textContent = ++rValue
            console.log(`New value is: ${rValue}`);

            ResultEffect("Draw!", "Gold")
            return;
    }
}

function ResultEffect(ResultEffect, tColor) {
    document.getElementById("tAnnounce").textContent = ResultEffect
    document.getElementById("tAnnounce").style.color = tColor

    document.getElementById("tAnnounce").style.opacity = "1"
    clearTimeout(cVisible)
    clearInterval(cOpacity)
    cVisible = setTimeout(StayVisible, 2000)    
}
function StayVisible() {
    cOpacity = setInterval(FadeOut, 50);
    return;
}

function FadeOut() {
    opacity = document.getElementById("tAnnounce").style.opacity - 0.025
    document.getElementById("tAnnounce").style.opacity = opacity
    if (opacity <= 0) {clearInterval(cOpacity)}
}

function SparklyClean() {
    document.getElementById("cValue").className = "fas fa-hand-sparkles fa-2x"
}