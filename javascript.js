/**
 * The code below will run a game of rock, paper, scissors
 */

function getComputerChoice() {
  let choice = Math.random()
  console.log("computer choice number is " + choice)
  if (choice > 0.66667) {
    return("rock")
  } else {
    if (choice < 0.33333) {
      return("paper")
    } else {
      return("scissors")
    }
  }
}
console.log("Computer choice is " + getComputerChoice())

function getHumanChoice() {
  let humanChoice = prompt("Please type in (r)ock, (p)aper or (s)cissors")
  if (humanChoice === "r") {
    return("rock")
  } else {
  if (humanChoice === "p") {
    return("paper") 
  } else {
  if (humanChoice === "s") {
    return("scissors")
  } else {
  if (humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors") {
    return(humanChoice)
  } else {
    return("Value not understood.")
  }
  }
  } 
  }
}

console.log("Human choice is " + getHumanChoice())
