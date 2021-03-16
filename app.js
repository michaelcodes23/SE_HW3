console.log("Good morning!");

let tool = "teeth";

let income = 0;

//function to log out income gathered per day of work depending on the tool being used
function job (day){
    if(tool === "rusty scissors"){
        for(let i = 1; i <= day ; i++ ){
            income += 5;
        }
    }
    else if (tool === "old-timey push lawnmower"){
        for(let i = 1; i <= day; i++){
            income +=50
        }
    }
    else if (tool === "fancy battery-powered lawnmower"){
        for(let i = 1; i <= day; i++){
            income +=100
        }
    }
    else if (tool === "Team of students"){
        for(let i = 1; i <= day; i++){
            income += 250;
        }
    }
    else {
        for(let i = 1; i <= day ; i++ ){
        income ++;
        }
    }
    return `income for ${day} days of work is equal to $${income}`;
}



//function to but tool based on the available income
function buyTool(){
    
    
    if ((5 <= income < 25) && tool === "teeth"){
    tool = "rusty scissors";
    income -= 5
    
    }
    else if ((25 <= income < 250) && tool === "rusty scissors"){
        tool = "old-timey push lawnmower";
        income -= 25;

    }
    else if((250 <= income < 500) && tool === "old-timey push lawnmower"){
        tool = "fancy battery-powered lawnmower"
        income -= 250;

    }
    else if(income >= 500 &&  tool === "fancy battery-powered lawnmower"){
        tool = "Team of students";
        income -= 500;
  
    }
    let newTool = alert(`With the income from landscaping you bought a new ` + tool);
    return newTool;
   
}

function showIncome(){
    alert(`Welcome to your landscaping job. Your goal is to acquire $1,000 in income.
    Your current income is ${income}`);
}
    
function JobStart(){
    showIncome();
    
const choice = prompt("Your tool is / are "+tool+" how many days will you like to work?", "# of Days");
    job(choice);
    if(tool === "Team of students" && income >= 1000){
        let won =  alert(`Congratulations! You have a team of students and $${income} in income, you've won the game!`);
        return won; 
        }
  

    else{
        const status = alert("You made $" + income + " in income, let's buy another tool") 
        return status, buyTool(), JobStart();   
    }    
}

JobStart();

// console.log(job(5));
// console.log(income);
// console.log(tool);
// console.log(buyTool())
// console.log(tool);
// console.log(job(5));
// console.log(newTool());
// console.log(tool);
// console.log(job(5));
// console.log(newTool());
// console.log(job(5));
// console.log(newTool());
// console.log(tool);
// console.log(job(4));
