/* Plan = 
Create a user variable - userChoice
Get the userChoice from the button selected
randomly generate a choice from Rock Paper Scissor
decide the winner by checking against the game rule
display the message and both choice
Repeat
 */




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



let humanScore  = 0;    
let computerScore = 0;

console.log("Lets Start the Game");
choice=getChoice();
// Score Variables
let totalTries = 0;
const tries = document.querySelector(".tries");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");
const result = document.querySelector(".result");

function playAgain() {
    return 1
}
function playRound(userChoice,choice){
    if (totalTries>=5){
        return playAgain()
    }
    if (userChoice == choice){
        result.textContent = `Its a Tie. ${userChoice} = ${choice}`;
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
    totalTries +=1;
    tries.textContent = totalTries;
    userScore.textContent = humanScore
    compScore.textContent = computerScore;
    console.log(`User Score : ${humanScore}\nComputer Score : ${computerScore}`);
}


const btn = document.querySelectorAll(".image");
btn.forEach(button => {
        button.addEventListener("click",(e)=>{
        e.stopPropagation();
        playRound(e.target.title,getChoice());
    }
    )})



