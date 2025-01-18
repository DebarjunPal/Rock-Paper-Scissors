let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
    //roeck,paper.scissors
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
const drawGame = () => {
    console.log("Game was Draw!");
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor="#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Won!");
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lost!");
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("User Choice: ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice: ",compChoice);
    
    if(userChoice==compChoice){
        //Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});