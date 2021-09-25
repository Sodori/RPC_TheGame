document.addEventListener("DOMContentLoaded", function() {
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
                default:
                    alert(`Unknown button;${buttonName}, what did you do?!`)
                    throw `Can't understand ${buttonName}, aborting!`
            }
        })
    }
    
})

function runGame (userChoiceNum) {
    let options = ['far fa-hand-rock fa-2x', 'far fa-hand-paper fa-2x', 'far fa-hand-scissors fa-2x']

    let pcChoiceNum = Math.floor(Math.random() * 3) + 1;
    let pcChoice = options[pcChoiceNum -1]

    let userChoice = options[userChoiceNum -1]
    
    console.log(`Computer chose ${pcChoiceNum} and the player ${userChoiceNum}`);
    console.log(`Computer chose ${pcChoice} and the player ${userChoice}`);

    document.getElementById("cValue").className = pcChoice;
    document.getElementById("cValue").textContent = "\nComputer";
    document.getElementById("cChoise").style.display = "initial";

    switch (userChoiceNum) {
        case 1:
            switch (pcChoiceNum) {
                case 1:
                    score(3)
                case 2:
                    score(2)
                case 3:
                    score(1)
            }
        case 2:
            switch (pcChoiceNum) {
                case 1:
                    score(3)
                case 2:
                    score(2)
                case 3:
                    score(1)
            }
        case 3:
            switch (pcChoiceNum) {
                case 1:
                    score(3)
                case 2:
                    score(2)
                case 3:
                    score(1)
            }
    }
}

function score (result) {
    let rValue
    switch (score) {
        case 1:
            rValue = document.getElementsByTagName("sWin")
            console.log(rValue);
        case 2:
            rValue = document.getElementsByTagName("sLoss")
            console.log(rValue);
        case 0:
            rValue = document.getElementsByTagName("sTie")
            console.log(rValue);
    }
}