"use strict";

class Player{

    constructor(name,type){
        this.name = name;
        this.type = type;
        this.gestures = ["Rock","Paper","Scissors","Lizard","Spock"];
        this.score=0;
    }
    promptFor(question, valid){
        do{
            var response= prompt(question).trim();
        } while(!response || !valid(response));
        return response
    }
    chars(userInput){
        if (userInput == "Rock","Paper","Scissors","Lizard","Spock"){
            return userInput.toLowerCase() == ""|| userInput.toLowerCase()=="";
        }
    }

}
module.exports = {
    Player:Player
}