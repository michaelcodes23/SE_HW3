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

const newHamster = new Hamster ("Cuy");
// console.log(newHamster);
console.log(newHamster.getPrice());

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
const per = new Person ("Michael");
// console.log(newHamster);
per.buyHamster("Cuy");
console.log(per);

