const action_button = document.getElementById('action_container').querySelectorAll('button');
const new_game_button = document.getElementById('new_game');
var tbl_result = document.getElementById('result');
var winner = document.getElementById('winner');

//alert(playRound("paper",computerSelection()));

action_button.forEach((button) =>{
    button.addEventListener('click',() =>{
            let battle_result = playRound(button.id,computerPlay());
            postDataToTable(tbl_result,battle_result);
            game_status = game(tbl_result);
            if (game_status != "Continue"){
                alert(game_status);
                winner.innerHTML = game_status;
                }
            }
        );
    }
)
new_game_button.addEventListener('click',() =>{
    location.reload();
    }
)


function computerPlay(){
    action = ["scissor","paper","rock"];
    num = Math.floor(Math.random() * 3);
    return action.slice(num,num+1);
}
function playRound(playerSelection, computerSelection){
    var result =
                {
                    player       : playerSelection,
                    computer     : computerSelection,
                    playerResult : "win",
                    playerScore  : 0,
                    computerScore: 0
                };
    if (playerSelection == computerSelection){
        result["playerResult"] = "draw"
    }
    else if (playerSelection == "scissor"){
        if (computerSelection == "paper"){
            result["playerResult"] = "win"
        }
        else{
            result["playerResult"] = "lose"
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            result["playerResult"] = "win"
        }
        else{
            result["playerResult"] = "lose"
        }
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "scissor"){
            result["playerResult"] = "win"
        }
        else {
            result["playerResult"] = "lose"
        }
    }

    if (result["playerResult"] == "win"){
        result["playerScore"]   = 1;
    }
    else if (result["playerResult"] == "lose"){
        result["computerScore"]   = 1;
    }
    return result;
}

function postDataToTable(table,data){
    var nrow = table.rows.length;
    var trow = table.insertRow(-1);
    Object.keys(data).forEach(function(key) {
        var cell = trow.insertCell(-1);
        cell.innerHTML = data[key]
      }
    )
    var cellTotalPlayerScore = trow.insertCell(-1);
    var cellTotalComScore = trow.insertCell(-1);
    playerScore = data["playerScore"];
    computerScore = data["computerScore"];
    if (nrow > 1){
        playerPreviousScore = parseInt(table.rows[nrow-1].cells[5].innerHTML);
        comPreviousScore = parseInt(table.rows[nrow-1].cells[6].innerHTML);
        cellTotalPlayerScore.innerHTML = playerPreviousScore + playerScore;
        cellTotalComScore.innerHTML = comPreviousScore + computerScore;
    }
    else{
        cellTotalPlayerScore.innerHTML =  playerScore;
        cellTotalComScore.innerHTML = computerScore;
    }
}
function game(table){
    var nrow = table.rows.length;
    TotalPlayerScore = parseInt(table.rows[nrow-1].cells[5].innerHTML);
    TotalComScore = parseInt(table.rows[nrow-1].cells[6].innerHTML);
    if (TotalPlayerScore == 5){
        return "Player Win";
    }
    else if (TotalComScore == 5){
        return "Computer Win";
    }
    else {
        return "Continue";
    }
}