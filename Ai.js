"use strict"
const {players} = require("./Player");

class Ai extends Player{
    constructor(name,type){
        super(name,type);
        this.name;
        this.type=Ai;
    }
    randomGesutures(gestures){
        let randomGesutures=Math.floor(Math.random()*this.gestures.length);
        return randomGesutures;
    }
}

module.exports={
    Ai:Ai
}

