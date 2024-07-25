let humanScore = 0;
let computerScore = 0;
let playersDraw = 0;
let userInput = "";

const getComputerChoice = () => {
    let computerChoice = "";
    let num = Math.floor(Math.random() * 3);
    if(num === 1) {
        computerChoice = "rock";
    } else if(num === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
};
const getHumanChoice = (humanChoice) => {
    const checkInput = ["rock", "paper", "scissors"];
    userInput = prompt("Hello, please chose between Rock Paper Scissors").toLowerCase();
    while (true) {
        if (checkInput.includes(userInput)) {
            break;
        } else {
            userInput = prompt("Your chose is not valid, please choose between Rock, Paper and Scissors").toLowerCase();
        }
    }
    return userInput;        
    
}
const playRound = (humanChoice, computerChoice) => {
    
    if (humanChoice === computerChoice) {
        playersDraw++;
        alert("It's a draw! You and computer chose the same thing, you chose " + humanChoice + " and Computer also chose " + computerChoice + ".");
        return;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        alert("You win! " + humanChoice + " beat " + computerChoice + ", " + "Computer choice is: "  + computerChoice + ".");
        return;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        alert("You win! " + humanChoice + " beat " + computerChoice + ", " + "Computer choice is: "  + computerChoice + ".");
        return;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        alert("You win! " + humanChoice + " beat " + computerChoice + ", " + "Computer choice is: "  + computerChoice + ".");
        return;
    } else {
        computerScore++;
        alert("You lose! " + computerChoice + " beat " + humanChoice + ", " + "Computer choice is: "  + computerChoice + ".");
        return;
    }
}
const playGame = () => {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        alert("The game end! You win! your score is: " + humanScore + " and computer score is: " + computerScore + " with " + playersDraw + " draw.");
        return;
    } else if (humanScore < computerScore) {
        alert("The game end! You lose! your score is: " + humanScore + " and computer score is: " + computerScore + " with " + playersDraw + " draw.");
        return;
    } else {
        alert("The game end! It's a tie! You and computer scored the same points: you " + humanScore + " points and computer " + computerScore + " points, and " + playersDraw + " round tied.");
        return;
    }
        
}
console.log(playGame());