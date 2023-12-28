let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelectorAll("#user-score");
const compScorePara = document.querySelectorAll("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        // userScorePara.innerText = userScore;
        userScorePara.forEach(para => para.innerText = userScore);
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        // compScorePara.innerText = compScore;
        compScorePara.forEach(para => para.innerText = compScore);
        msg.innerText = `You lost. Computer's ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) { 
    drawGame();
    //draw game
    } else {
        let userWin = true;
        if(userChoice === "rock") {
           userWin = compChoice === "paper"? false : true;
        } else if (userChoice === "paper") {
            compChoice === "scissors" ? false : true;
        } else {
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


