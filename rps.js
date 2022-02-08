let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('#button');
const endResult = document.querySelector('#result');
const pScore = document.querySelector('#pScore')
const cpuScore = document.querySelector('#cpuScore')
const restart = document.querySelector('#restart');
restart.disabled = true;
        
        
    function computerPlay() {
        let choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)]
    }

    function playRound(playerSelection){
        let computerSelection = computerPlay()

        if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Scissors" && computerSelection == "Paper") || 
            (playerSelection == "Paper" && computerSelection == "Rock")){
                playerScore += 1
                pScore.textContent =`Player: ${playerScore}`;
                if(playerScore == 5){
                     endResult.textContent =  `${playerSelection} beats ${computerSelection} - YOU WIN!!!`;
                     gameEnd();
                }else  endResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            }

        else if(playerSelection == computerSelection){
             endResult.textContent = `It\'s a tie. You both chose ${playerSelection}`;
        }
        
        else if((computerSelection == "Rock" && playerSelection == "Scissors") || 
            (computerSelection == "Scissors" && playerSelection == "Paper") || 
            (computerSelection == "Paper" && playerSelection == "Rock")){
                computerScore += 1
                cpuScore.textContent = `CPU: ${computerScore}`;
                if(computerScore == 5){
                     endResult.textContent = `${computerSelection} beats ${playerSelection} - YOU LOSE!!!`;
                     gameEnd();
                }else  endResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            }
    }

    function gameEnd() {
        buttons.forEach(button => {
            button.disabled = true;
        });
        restart.disabled = false;
    }

    function restartGame(){
        playerScore = 0
        computerScore = 0
        pScore.textContent = `Player: ${playerScore}`;
        cpuScore.textContent = `CPU: ${computerScore}`;
        restart.disabled = true;
        endResult.textContent = "";
        buttons.forEach(button => {
        button.disabled = false});
    }
    
    buttons.forEach(button => {button.addEventListener('click', () =>{
        playRound(button.textContent)
    })
    });

    restart.addEventListener('click', restartGame);

    