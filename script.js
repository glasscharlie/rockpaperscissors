var gameState = true
var playerScore = 0
var computerScore = 0

//function to generate a random number between 0-2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


//Function to play the game
function playGame() {
//state of game, while true it keeps playing, while false it will end the game
while(gameState === true) {
    var randomNumber = getRandomInt(3)
    var userNumber = Number
    var userChoice = prompt("Which letter do you choose? R, P, or S")
    userChoice = userChoice.toLowerCase()

    //Start game and record user input
    if(userChoice == 'r'){
        userNumber = 0
}   else if (userChoice == 'p') {
        userNumber = 1
}   else if (userChoice == 's') {
        userNumber = 2
}
    else {
      alert('Please select either r, p, or s!');
    }

    //Tell the player what the computer has chosen
    if(randomNumber === 0) {
        alert('The computer has chosen rock!')
    }
    else if(randomNumber === 1) {
        alert('The computer has chosen paper!')
    }
    else {
        alert('The computer has chosen scissors!')
    }

    //Calculate who won the round, and report it to the user
    if(userNumber === 0 && randomNumber == 2 || userNumber === 1 && randomNumber == 0 || userNumber === 0 && randomNumber == 2) {
        playerScore += 1
        alert(`Woohoo! You have beaten the computer! The score is now:\n \nComputer: ${computerScore}\n \nYou: ${playerScore}`)
    }
    else if(userNumber === 2 && randomNumber == 0 || userNumber === 0 && randomNumber == 1 || userNumber === 2 && randomNumber == 0) {
        computerScore += 1
        alert(`Darn! You have lost to the computer! The score is now:\n \nComputer: ${computerScore}\n \nYou: ${playerScore}`)
    }
    else {
        alert(`You have tied with the computer! The score is now:\n \nComputer: ${computerScore}\n \nYou: ${playerScore}`)
    }

    //prompt user if they want to play again. if yes, continue. if no, end the game
    if (confirm("Do you want to play again?")) {
        continue
    }
    else {
        gameState = false
    }
  }

}


//calling functionstarting the game
playGame()