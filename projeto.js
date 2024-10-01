const result = document.querySelector('.result')
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")
let humanScoreNumber = 0
let machineScoreNumber =  0


// Enums
const  GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS:"scissors"

}
/*
    humanScore  -> camel Case
    GAME_OPTIONS  -> Snake- Case

*/

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())



}
const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER,GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}
const playTheGame = (human, machine) => {
    if(human === machine){
        result.innerHTML = "Deu empate!"
    } else if  (human === GAME_OPTIONS.ROCK &&  machine === GAME_OPTIONS.SCISSORS||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER || 
        human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK){
       
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
     result.innerHTML = "Você ganhou!"
        }else{
            result.innerHTML = "Alexia ganhou!"
            machineScoreNumber++
            machineScore.innerHTML = machineScoreNumber

        }
}