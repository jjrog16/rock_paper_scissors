let move = ["rock", "paper", "scissors"]

function computerPlay(){
    let choice = Math.floor(Math.random() * 3)
    return move[choice]
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper"){
                return "c"
            } else if(computerSelection === "scissors"){
                return "p"
            }
            break
        case "paper":
            if(computerSelection === "rock"){
                return "p"
            } else if(computerSelection === "scissors"){
                return "c"
            }
            break
        case "scissors":
            if(computerSelection === "paper"){
                return "p"
            } else if (computerSelection === "rock"){
                return "c"
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

            if (round == "p"){
                playerWinCounter++
                console.log(dialogResults + "Player Wins!")
                roundCounter++
            } else if (round == "c"){
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
