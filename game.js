let move = ["rock", "paper", "scissors"]

function computerPlay(){
    let choice = Math.floor(Math.random() * 3)
    return move[choice]
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper"){
                return "computer"
            } else if(computerSelection === "scissors"){
                return "player"
            }
            break
        case "paper":
            if(computerSelection === "rock"){
                return "player"
            } else if(computerSelection === "scissors"){
                return "computer"
            }
            break
        case "scissors":
            if(computerSelection === "paper"){
                return "player"
            } else if (computerSelection === "rock"){
                return "computer"
            }
            break
    }
}

function game(){
    let playerWinCounter = 0
    let computerWinCounter = 0
    let roundCounter = 0

    while(roundCounter < 5){
        let playerSelection = String(window.prompt("Please enter rock, paper, or scissors"))
        let playerChoice = playerSelection.toLowerCase()
        if(move.includes(playerChoice)){
            let computerChoice = computerPlay()
            let dialogResults = `Player chose ${playerChoice} and Computer chose ${computerChoice}. `
            let round = playRound(playerChoice,computerChoice)
            if (round == "player"){
                playerWinCounter++
                console.log(dialogResults + "Player Wins!")
                roundCounter++
            } else if (round == "computer"){
                computerWinCounter++
                console.log(dialogResults + "Computer Wins!")
                roundCounter++
            } else {
                console.log(dialogResults + "It's a tie!")
            }
        }
    }

    let winDialog = `Player won ${playerWinCounter} times and Computer won ${computerWinCounter} times. `

    if(playerWinCounter > computerWinCounter){
        console.log(winDialog + "Player wins it all!")
    } else if(computerWinCounter > playerWinCounter){
        console.log(winDialog + "Computer wins it all!")
    }
}

game()
