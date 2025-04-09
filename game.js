// Display three buttons (rock, paper, and scissors)
// user selects button
// choice is stored

// computer randomly selects an option
// User's choice and computer's choice are compared
// winner of round is displayed with current scores of both players (user and computer)
// game continues until someone reaches a score of 5
// Overall winner is displayed



function game() {
    //When player selects a button, the their choice is stored
    let playerChoice = null;
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('.btn');
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    const playerScoreText = document.getElementById('playerScore');
    const computerScoreText = document.getElementById('computerScore');

    const playerChose = document.getElementById('playerChose');
    const computerChose = document.getElementById('computerChose');

    const scoreContainer = document.getElementById('score-container')

    // div
    // ------
    //  0 - 0
    // ------
    // div


    
    function updateScore() {
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    }

    rockButton.addEventListener("click", (e) => {
        playerChoice = "rock";
        console.log(playerChoice);
        playRound();
    });

    paperButton.addEventListener("click", (e) => {
        playerChoice = "paper";
        console.log(playerChoice);
        playRound();
    });

    scissorsButton.addEventListener("click", (e) => {
        playerChoice = "scissors";
        console.log(playerChoice);
        playRound();
    });

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



    
    

    function playRound() {

        const gameWinner = document.createElement('h1');

        let computerChoice = randomIntFromInterval(1, 3);

        if (computerChoice == 1) {
            computerChoice = "rock";
        } else if (computerChoice == 2) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
    
        console.log("Computer choice: " + computerChoice);

        

        // user and computer choices are compared
        switch (true) {
            case playerChoice === "rock" && computerChoice === "scissors":
            case playerChoice === "paper" && computerChoice === "rock":
            case playerChoice === "scissors" && computerChoice === "paper":    
                playerWinRound();
                break;

            case playerChoice === "scissors" && computerChoice === "rock":
            case playerChoice === "rock" && computerChoice === "paper":
            case playerChoice === "paper" && computerChoice === "scissors":    
                computerWinRound();
                break;
        
            default:
                // tie
                tieRound();
                break;
        }

        if (playerScore == 5) {
            
            gameWinner.textContent = "PLAYER WINS";
            scoreContainer.appendChild(gameWinner);
            buttons.forEach(button => button.disabled = true);


        } else if (computerScore == 5) {
            gameWinner.textContent = "COMPUTER WINS";
            scoreContainer.appendChild(gameWinner);
            buttons.forEach(button => button.disabled = true);
        }

        

        function playerWinRound() {
            playerScore++;
            updateScore();
            playerChose.textContent = playerChoice;
            computerChose.textContent = computerChoice;
        }
    
        function computerWinRound() {
            computerScore++;
            updateScore();
            playerChose.textContent = playerChoice;
            computerChose.textContent = computerChoice;
        }

        function tieRound() {
            playerChose.textContent = playerChoice;
            computerChose.textContent = computerChoice;
        }


    }



    
    
    

    // outcomes
    // rock beats scissors
    // paper beats rock
    // scissors beats paper


}

game();



