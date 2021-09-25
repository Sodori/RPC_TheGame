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

function runGame (userChoice) {
    let pcChoice = Math.floor(Math.random() * (1 - 3 + 1)) + 3;

    console.log(`Computer chose ${pcChoice} and the player ${userChoice}`);
}