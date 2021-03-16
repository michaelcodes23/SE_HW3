console.log("Lets get started!");
class Hero{
    constructor(name){
        this.name = name; 
    }
        health = 100;
        weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        catchPhrases = ['i\'m fresher than day old pizza', 'you can\'t count my calories'];
        talkSass(){
            console.log(this.catchPhrases[Math.round(Math.random())]);
        }
        announceHealth(){
            console.log(this.health);
        }
        fight(){
            console.log("I\'m ready to rumble!!!!")
        }
}
const hero = new Hero("Dougie");
console.log(hero);
hero.talkSass();
hero.announceHealth();
hero.fight();
