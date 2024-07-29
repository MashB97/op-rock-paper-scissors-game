const titleContainer = document.querySelector("#title-container");
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const btnRestart = document.querySelector("#btn-restart");
const result = document.querySelector("#result");
const gameTitle = document.createElement("p");
const currentPoint = document.createElement("p");
const resultRoundText = document.createElement("p");
const resultFinalText = document.createElement("p");
let round = 0;
let humanScore = 0;
let computerScore = 0;
let playersDraw = 0;
resultRoundText.classList.add("result-text");
resultFinalText.classList.add("result-text");
currentPoint.classList.add("result-text");
gameTitle.classList.add("result-text");
gameTitle.textContent = "Hello, please chose between Rock Paper Scissors";
titleContainer.appendChild(gameTitle);

const getComputerChoice = () => {
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
};

const playRound = (humanChoice, computerChoice) => {
    round++;
    if (humanChoice === computerChoice) {
        playersDraw++;
        resultRoundText.classList.remove("win", "lose");
        resultRoundText.textContent = `It's a draw! You and computer chose the same thing, you chose ${humanChoice}  and computer also chose ${computerChoice}.`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultRoundText.classList.remove("lose");
        resultRoundText.classList.add("win");
        resultRoundText.textContent = `You win! ${humanChoice} beat ${computerChoice}, computer choice is: ${computerChoice}.`;
    } else {
        computerScore++;
        resultRoundText.classList.remove("win");
        resultRoundText.classList.add("lose");
        resultRoundText.textContent = `You lose! ${humanChoice} beat ${computerChoice}, computer choice is: ${computerChoice}.`;
    }
    result.appendChild(resultRoundText);
    currentPoint.textContent = `The current point is: Human player: ${humanScore} Computer player: ${computerScore} and ${playersDraw} draw.`;
    result.insertBefore(currentPoint, resultRoundText);
    if (round === 5) {playGame()};
};

const playGame = () => {
    if (humanScore > computerScore) {
        resultFinalText.classList.remove("lose");
        resultFinalText.classList.add("win");
        resultFinalText.textContent = `The game end! You win! your score is: ${humanScore} and computer score is: ${computerScore}, with ${playersDraw} draw.`;
    } else if (humanScore < computerScore) {
        resultFinalText.classList.remove("win");
        resultFinalText.classList.add("lose");
        resultFinalText.textContent = `The game end! You lose! your score is: ${humanScore} and computer score is: ${computerScore}, with ${playersDraw} draw.`;
    } else {
        resultFinalText.classList.remove("win", "lose");
        resultFinalText.textContent = `The game end! It's a tie! You and computer scored the same points: you ${humanScore} points and computer 
                                    ${computerScore} points, and ${playersDraw} round tied.`;
    }
    result.appendChild(resultFinalText);
}

const clearText = () => {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    round = 0;
    humanScore = 0;
    computerScore = 0;
    playersDraw = 0;
    titleContainer.appendChild(gameTitle);
};



btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
btnRestart.addEventListener("click", clearText);
window.addEventListener("load", clearText);
