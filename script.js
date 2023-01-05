// # Rock-Paper-Scissors Pseudocode

// 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
const choices = ["R", "P", "S"];
// 2. Prompt user to enter "r," "p," or "s".

// 3. Computer chooses a **random** value in a list of "r," "p," or "s."
// 4. We determine if the user wins or not.
// ​
//    * Initialize `wins`, `losses`, `ties` variables to 0
let wins = 0;
let ties = 0;
let losses = 0;
let counter = 10;
//    * If user picks rock and if computer picks scissors, then user wins.
// ​
//    * If user picks rock and if computer picks paper, then user loses.
// ​
//    * If user picks scissors and if computer picks rock, then user loses.
// ​
//    * If user picks scissors and if computer picks paper, then user wins.
// ​
//    * If user picks paper and if computer picks rock, then user wins.
// ​
//    * If user picks paper and if computer picks scissors, then user loses.
// ​
//    * If user picks the same as computer, then they tie.
for (let i = 0; i < 10; i++) {
let userChoice = prompt("Enter 'R' for rock, 'P' for paper, and 'S' for scissor.");
if (userChoice !== "R" || userChoice !== "P" || userChoice !== "S") {
    prompt("Try again: ");
}
const randomNumber = Math.floor(Math.random()*choices.length);
let computerChoice = choices[randomNumber];
if (userChoice === computerChoice) {
    alert("It's a tie.");
    ties++;
} else if (userChoice === "R" && computerChoice === "S") {
    alert("You win.");
    wins++;
} else if (userChoice === "R" && computerChoice === "P") {
    alert("You lose.");
    losses++;
} else if (userChoice === "S" && computerChoice === "R") {
    alert("You lose.");
    losses++;
} else if (userChoice === "S" && computerChoice ==="P") {
    alert("You win.");
    wins++;
} else if (userChoice === "P" && computerChoice === "R") {
    alert("You win");
    wins++;
} else {
    alert("You lose.");
    losses++;
}
counter--;
alert("Your wins: " + wins + ", your losses: " + losses + ", your ties: " + ties);
alert("You have got " + counter + " turn.");
}
// 5. We then add to their score.
// ​
//    * If user wins, then we add one to their wins.
    
//    * If user loses, then we add one to their losses.
    
//    * If user ties, then we add one to their ties.
// ​
// 6. Prompt user to play again.