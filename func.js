const button = document.querySelectorAll('button');
button.forEach((button) =>{
    button.addEventListener('click',() => alert(
        playRound(button.textContent,computerPlay())
            )
        )
    }
)

function computerPlay(){
    action = ["scissor","paper","rock"];
    num = Math.floor(Math.random() * 3);
    return action.slice(num,num+1);
}
console.log("hello");
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "draw"
    }
    else if (playerSelection == "scissor"){
        if (computerSelection == "paper"){
            return "win"
        }
        else{
            return "lose"
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return "win"
        }
        else{
            return "lose"
        }
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "scissor"){
            return "win"
        }
        else {
            return "lose"
        }
    }
}
console.log(playRound("rock","paper"));
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0;i<5;i++){
        let playerSelection = prompt("What's your sign");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        if( result == "win"){
            playerScore += 1;
        }
        else if (result == "lose"){
            computerScore += 1;
        }
        alert("You select! " + playerSelection);
        alert("Computer select! " + computerSelection);
        alert("You " + result);
    }
    if (playerScore > computerScore){
        return "Player win"
    }
    else if (playerScore == computerScore){
        return "draw"
    }
    else{
        return "Player lose"
    }
}