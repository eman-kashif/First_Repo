let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper, scissor may say aik generate ho ga
}

const drawGame = () => {
    msg.innerText = "Game was Draw.Play Again.";
    
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice,compChoice) => { 
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText =`You lost. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    
    //Generate computer choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice ) {
        //Draw Game
        drawGame();
    }

    else {
        let userWin =true;

        if(userChoice ==="rock") {
            //scissor,papper it can not be rock if it is rock then it will draw
           userWin = compChoice ==="paper" ? false : true;
        }

        else if(userChoice === "paper") {
             //scissor,rock it can not be paper if it is paper then it will draw
             userWin = compChoice ==="scissor" ? false : true;
        }

        else {
            //paper,rock it can not be scissor if it is scissor then it will draw
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});