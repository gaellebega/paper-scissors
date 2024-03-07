const getUserChoice = (userInput) =>{
    if (userInput ==="paper" || userInput === "rock" || userInput === "scissors"){
        return userInput;
    } else if (userInput === "bomb"){
        return "YOU WON";
    } else {
        console.log('appearance of error !');
    }
};
let input = getUserChoice("paper");
console.log(input);
const getComputerChoice = () =>{
    const random = Math.floor(Math.random() * 3);
    if (random === 0){
        return 'paper';
    } else if (random === 1){
        return 'rock';
    } else if (random === 2){
        return 'scissors';
    } else {
        return 'computer error';
    }
};
const rdm = getComputerChoice('rock');
console.log(rdm);
const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        return "the game was tied!";
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'rock'){
            return "congratulations, it's a WIN!";
        }
        else {
        return "sorry, you lost the game!";
        }
    }
    if (userChoice === 'rock'){
        if (computerChoice === 'scissors'){
            return 'congratulations, you won!';
        } else {
            return 'you lost ';
        }
    }
    if (userChoice === 'scissors'){
        if (computerChoice === 'paper'){
            return 'congratulations, you WIN!';
        } else {
            return 'you lost ';
        }
    }
    if (userChoice === 'bomb'){
        if (computerChoice === 'rock'){
            return 'YOU WON!';
        } else {
            return 'YOU WON!';
        }
    }
};
var result = determineWinner(input, rdm);
console.log(result);
function playGame (){
    var userChoice = getUserChoice('bomb');
    var computerChoice = getComputerChoice('paper');
    console.log(" choice made was: " + userChoice)
    console.log("and the computer choice was: " + computerChoice);
    console.log(determineWinner(userChoice , computerChoice));
}