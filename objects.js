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
        return console.log(this.price);
    }
}

const newHamster = new Hamster ("Cuy");
// console.log(newHamster);
newHamster.getPrice();