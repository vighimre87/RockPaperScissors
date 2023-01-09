// # Rock-paper-scissors Pseudocode

// 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
// 2. Prompt user to enter "r," "p," or "s".
// 3. Computer chooses a **random** value in a list of "r," "p," or "s."
// 4. We determine if the user wins or not.
// 
//    * Initialize `wins`, `losses`, `ties` variables to 0
// 
//    * If user picks rock and if computer picks scissors, then user wins.
// 
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
// 
// 5. We then add to their score.
// ​
//    * If user wins, then we add one to their wins.
    
//    * If user loses, then we add one to their losses.
    
//    * If user ties, then we add one to their ties.
// ​
// 6. Prompt user to play again.


const choices = ["r", "p", "s"];
let wins = 0;
let ties = 0;
let losses = 0;
let turns = 10;

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random()*choices.length);
  let computerChoice = choices[randomNumber];
  let userChoice = prompt("Enter 'r' for rock, 'p' for paper, and 's' for scissor.");
  userChoice = userChoice.toLowerCase();
  if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
    alert("You picked " + userChoice);
    alert("The computer picked " + computerChoice);
    if (userChoice === computerChoice) {
      alert("It's a tie.");
      ties++;
    } else if (userChoice === "r" && computerChoice === "s") {
      alert("You win.");
      wins++;
    } else if (userChoice === "r" && computerChoice === "p") {
      alert("You lose.");
      losses++;
    } else if (userChoice === "s" && computerChoice === "r") {
      alert("You lose.");
      losses++;
    } else if (userChoice === "s" && computerChoice ==="p") {
      alert("You win.");
      wins++;
    } else if (userChoice === "p" && computerChoice === "r") {
      alert("You win");
      wins++;
    } else {
      alert("You lose.");
      losses++;
    }
    turns--;
    alert("Your wins: " + wins + ", your losses: " + losses + ", your ties: " + ties);
    alert("You have got " + turns + " turn.");
  } else {
    alert("Invalid input, try again!");
  }
}
alert("Your total wins are: " + wins + ", your total losses are: " + losses + ", your total ties: " + ties);