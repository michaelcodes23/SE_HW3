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
        fight(villain){
            console.log(villain);
            let weapon =[this.weapons.sprinkleSpray,this.weapons.sugarShock]
            console.log("I'm the hero! Take this " + villain.name + " your life is now reduced by : " + weapon[Math.round(Math.random())]);
            console.log("I\'m ready to rumble!!!!")
            villain.health -= weapon[Math.round(Math.random())]
            console.log('You hurt me ' + this.name + " my health is now " + villain.health);
        }
}
const hero = new Hero("Dougie");
// console.log(hero);
// hero.talkSass();
// hero.announceHealth();
// hero.fight();

class Enemy {
    constructor(name){
        this.name = name;
    }
    health = 100;
    weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10
    };
    catchPhrases = ['i\'m youtube famous', 'i\'m more dangerous than an uncovered sewer']
    talkSmack(){
        console.log(this.catchPhrases[Math.round(Math.random())]);
    }
    announceHealth(){
        console.log(this.health)
    }
    fight(hero){
        let weapon =[this.weapons.pepperoniStars,this.weapons.cheeseGrease]
        console.log("taste my wrath " + hero.name +"! Your life is now reduced by : " + weapon[Math.round(Math.random())]);
        console.log(`i\'m gonna flatten you like a slice of pepperoni!`)
        hero.health -= weapon[Math.round(Math.random())]
        console.log('You hurt me ' + this.name + " my health is now " + hero.health);
    }
}


const villain = new Enemy ("Pizza Rat");
// console.log(villain);
// villain.talkSmack();
// villain.announceHealth();
// villain.fight();

//WALKING DOWN THE STREET
hero.talkSass();
villain.talkSmack();
hero.announceHealth();
villain.announceHealth();
hero.fight(villain);
villain.fight(hero);