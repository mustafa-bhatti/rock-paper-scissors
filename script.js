/* Plan = 
Create a user variable - userChoice
ask the user to enter their choice
randomly generate a choice from Rock Paper Scissor
decide the winner by checking against the game rule
display the message and both choice
Repeat
 */

// Create choice variables 


function getUserChoice() {
    userChoice = prompt("Enter your move Rock,  Paper,  Scissor").toLowerCase();
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissor") {
        return userChoice; //userChoice can only in lowercase rock,paper,scissors
    }
    else {
        console.warn("Wrong Entry.\nTry Again");
        return getUserChoice();
    }
}
// console.log(getUserChoice());


// randomly generate a choice from Rock Paper Scissor

function getChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        choice = "rock";
    }
    else if (num == 1) {
        choice = "paper";
    }
    else {
        choice = "scissor"
    }
    return choice;  //Choice can only in lowercase rock,paper,scissors
}




function playRound(userChoice,choice){
    if (userChoice == choice){
        console.log(`Its a Tie. ${userChoice} = ${choice}`);
    }
    else if (userChoice == "rock" && choice == "scissor"){
        console.log(`You Win Rock Beats Scissor`);
        humanScore +=1;

    }
    else if (userChoice == "scissor" && choice == "paper"){
        console.log(`You Win Scissor Beats Paper`);
        humanScore +=1;

    }
    else if (userChoice == "paper" && choice == "rock"){
        console.log(`You Win Paper Beats Rock`);
        humanScore +=1;

    }
    else{
        console.log(`You lose! ${userChoice} defeated by ${choice}`);
        computerScore +=1;
    }
    console.log(`User Score : ${humanScore}\nComputer Score : ${computerScore}`);
}
let humanScore  = 0;    
let computerScore = 0;
function playGame() {
    console.log("Lets Start the Game");
    // Score Variables

    //Choice Variables
    let userChoice = "";
    let choice= "";
    for (let i = 1; i <=5;i++) {
        console.log(`Round  : ${i}`);
        userChoice = getUserChoice();
        choice = getChoice();
        playRound(userChoice,choice);
    }
}
// playGame();