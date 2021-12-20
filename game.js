
const {Human} = require("./human");
const {Ai}=require ("./Ai");
const Player = require("./Player");
const prompt = require("prompt-sync")();


class Game {
    constructor(){
        this.HumanOne = new Human('Selvin', Human);
        this.HumanTwo = new Human('Ethan',Human);
        this.AiPlahyer=new Ai('Angel',Ai)
    }

runGame() {
    this.displayRules();
    let userInput=prompt('Do you want to play against computer?');

    switch(userInput){
        case "Human":
            this.playHuman();
            break;
        case "Ai":
            this.playAi();
            break;
        default:
        return this.runGame();
    }
    this.displayGameWinner();
}

}
