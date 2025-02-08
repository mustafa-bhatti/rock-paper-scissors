/* Plan = 
Create a user variable - userChoice
ask the user to enter their choice
randomly generate a choice from Rock Paper Scissor
decide the winner by checking against the game rule
display the message and both choice
Repeat
 */
// alert("This is console based project. Please open Devtools Console to Check the score");
// Create a user variable - userChoice
function getUserChoice() {
    let userChoice = "";
    userChoice = prompt("Enter your move Rock,  Paper,  Scissor");
    if (userChoice == "Rock" || userChoice == "Paper" || userChoice == "Scissor") {
        return userChoice;
    }
    else {
        console.warn("Wrong Entry.\nTry Again");
        return getUserChoice();
    }
}
// console.log(getUserChoice());

function getChoice() {
    let num = Math.floor(Math.random() * 3);
    let choice = "";
    if (num == 0) {
        choice = "Rock";
    }
    else if (num == 1) {
        choice = "Paper";
    }
    else {
        choice = "Scissor"
    }
    return choice;
}