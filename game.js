"use strict";

const {Human} = require("./Human");
const {Ai} = require("./Ai");
const Player = require("./Player");
const prompt = require("prompt-sync")();




class Game {
    constructor() {
        this.HumanOne = new Human( "Jake", Human);
        this.HumanTwo = new Human( "Ethan", Human);
        this.AiPlayer = new Ai("AiOne", Ai);
    }

   
   
   
    runGame(){
        this.displayRules();
        let userInput = prompt("Do you want to play against a Human or Ai player?");

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




    displayRules(){
        console.log("Welcome to the game of Rock, Paper, Scissors.");
        console.log("You can play vs a human or AI player.");
        console.log("Both players will pick a gesture, the player who pick the winning gesture gains a point.");
        console.log("The game will run to one of the players get 3 wins.");
        console.log("List of gestures and what they beat.");
        console.log("Rock: sicssors, Lizard","\n"+ "Scissors: Paper, Lizard","\n" + "Paper: Rock, Spock", "\n" + "Lizard: Spock, Paper", "\n" + "Spock: Rock, Scissors");

    }


    playHuman(){
        this.HumanOne.score;
        this.HumanTwo.score;
      
      
        this.HumanOne.pickGestures();
        this.HumanTwo.pickGestures();
          
        if(this.HumanOne.pickGesture == "Rock" && this.HumanTwo.pickGesture == "Scissors" || "Lizard"){
            return "HumanOne wins" + this.HumanOne.score ++;
          }
        else if (this.HumanOne.pickGesture == "Scissors" && this.HumanTwo.pickGesture == "Paper" || "Lizard"){
        return "HumanOne wins" + this.HumanOne.score ++;
        }
    
        else if (this.HumanOne.pickGestures == "Paper" && this.HumanTwo.pickGestures == "Rock" || "Spock"){
        return "HumanOne wins" + this.HumanOne.score ++;
        }
        else if (this.HumanOne.pickGestures == "Spock" && this.HumanTwo.pickGestures == "Scissors" || "Rock"){
        return "HumanOne wins" + this.HumanOne.score ++;
        }
        else if (this.HumanOne.pickGestures == "Lizard" && this.HumanTwo.pickGestures == "Spock" || "Paper"){
            return "HumanOne wins" + this.HumanOne.score ++;
            }
        else if(this.HumanTwo.pickGestures == "Rock" && this.HumanOne.pickGestures == "Scissors" || "Lizard"){
                return "HumanTwo wins" + this.HumanTwo.score ++;
            }
        else if (this.HumanTwo.pickGestures == "Scissors" && this.HumanOne.pickGestures == "Paper" || "Lizard"){
            return "HumanTwo wins" + this.HumanTwo.score ++;
            }
        
        else if (this.HumanTwo.pickGestures == "Paper" && this.HumanOne.pickGestures == "Rock" || "Spock"){
            return "HumanTwo wins" + this.HumanTwo.score ++;
            }
        else if (this.HumanTwo.pickGestures == "Spock" && this.HumanOne.pickGestures == "Scissors" || "Rock"){
            return "HumanTwo wins" + this.HumanTwo.score ++;
            }
        else if (this.HumanTwo.pickGestures == "Lizard" && this.HumanOne.pickGestures == "Spock" || "Paper"){
                return "HumanTwo wins" + this.HumanTwo.score ++;
                }
        else{
            console.log("It is a draw")
        }
          
    }
    
    
    

    
        
 
       
        playAi(){
            let scoreTotal;
    
            this.HumanOne.score;
            this.AiPlayer.socre;
             
            
            if(this.HumanOne.pickGestures == "Rock" && this.AiPlayer.randomGestures == "Scissors" || "Lizard"){
                return  scoreTotal += this.HumanOne.score + 1;
            }
            else if (this.HumanOne.pickGestures == "Scissors" && this.AiPlayer.randomGestures == "Paper" || "Lizard"){
            return scoreTotal += this.HumanOne.score + 1;
            }
        
            else if (this.HumanOne.pickGestures == "Paper" && this.AiPlayer.randomGestures == "Rock" || "Spock"){
            return scoreTotal += this.HumanOne.score + 1;
            }
            else if (this.HumanOne.pickGestures == "Spock" && this.AiPlayer.randomGestures == "Scissors" || "Rock"){
            return scoreTotal += this.HumanOne.score + 1;
            }
            else if (this.HumanOne.pickGestures == "Lizard" && this.AiPlayer.randomGestures == "Spock" || "Paper"){
                return scoreTotal += this.HumanOne.score + 1;
                }
            else if(this.AiPlayer.randomGestures == "Rock" && this.HumanOne.pickGestures == "Scissors" || "Lizard"){
                    return scoreTotal += this.AiPlayer.score + 1;
                }
            else if (this.AiPlayer.randomGestures == "Scissors" && this.HumanOne.pickGestures == "Paper" || "Lizard"){
                return scoreTotal += this.AiPlayer.score + 1;
                }
            
            else if (this.AiPlayer.randomGestures == "Paper" && this.HumanOne.pickGestures == "Rock" || "Spock"){
                return scoreTotal += this.AiPlayer.score + 1;
                }
            else if (this.AiPlayer.randomGestures == "Spock" && this.HumanOne.pickGestures == "Scissors" || "Rock"){
                return scoreTotal += this.AiPlayer.score + 1;
                }
            else if (this.AiPlayer.randomGestures == "Lizard" && this.HumanOne.pickGestures== "Spock" || "Paper"){
                    return scoreTotal += this.AiPlayer.score + 1;
                    }
            else{
                console.log("It is a draw")
            }
            }
            
       
                
    


    displayGameWinner() {
        do{
            if(this.HumanOne.score > this.HumanTwo.score) {
                console.log(this.HumanOne.name + " wins this game!");
              }
              else if(this.HumanOne.score > this.AiPlayer.score) {
                  console.log(this.HumanOne.name + " wins this game!");
                }
              else if(this.AiPlayer.score > this.HumanOne.score) {
                  console.log(this.HumanOne.name + " wins this game!");
                }
              else {
                console.log(this.HumanTwo.name + " wins this game!");
              }

            }
        while( this.HumanOne.score <3 &&  this.AiPlayer.score < 3){

        }
        

    }
    

        





    
}



module.exports = {
    Game: Game
}