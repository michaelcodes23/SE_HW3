//HAMSTER
class Hamster{
    owner = "";
    price = 15;
    constructor(name){
      this.name = name
    }    
    wheelRun(){
        console.log('squeak squeak')
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        return this.price;
    }
}


// console.log(newHamster);


//PERSON
class Person {
    constructor(name){
        this.name = name;
    }
    age = 0;
    height = 0;
    weight = 0;
    mood = 0;
    hamsters = [];
    bankAccount = 0;
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(`hello ${this.name}`)
    }
    eat(){
        this.weight++;
        this.mood++;
    }
    exercise(){
        this.weight--;
    }
    ageUp(){
        this.age++;
    }
    buyHamster(hamster){
        
        this.hamsters.push(hamster)
        this.mood += 10;
        this.bankAccount -= newHamster.getPrice()
    

    }
}
const per = new Person ("Timmy");
per.age = 5;


//Create function eating
function bummedEat(num){
    for(let i = 0; i < num; i++){
        per.eat();
    }
    return per.weight;
}

bummedEat(5);
console.log(`After having a bummed eating session Timmy gained ${per.weight} pounds!`);
//Created exercise function
function exerciseTim(num){
    for(let i = 0; i < num; i++){
        per.exercise();
    }
    return per.exercise;
}
exerciseTim(5);
console.log(`To look good, in preparation for kindergation, Timmy exercised. 
His total weight gain is now ${per.weight}!`);

function ageTim(num){
    for(let i = 0; i < num; i++){
        per.ageUp();
    }
    return per.ageUp;
}

ageTim(4);
console.log(`4 years have passed, Timmy's is now ${per.age} years old.`)

const newHamster = new Hamster ("Gus");
// console.log(newHamster);
per.buyHamster("Gus");
console.log("New Hamster Price: " + newHamster.getPrice());
console.log(per);
console.log(per.hamsters[0])
console.log(`Timmy bought a new hamster for $${newHamster.getPrice()}, his name is ${per.hamsters[0]}.`)
ageTim(6);
console.log(`Timmy is now ${per.age} years old.`)

bummedEat(2);
exerciseTim(2);
console.log(`Timmy exercised and ate twice, so far he has gained ${per.weight} pounds, yet his mood up to ${per.mood}`);