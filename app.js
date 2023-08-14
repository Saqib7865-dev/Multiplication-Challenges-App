// Random Number generation
let RanNum1 = Math.floor((Math.random()*10)+1);
let RanNum2 = Math.floor((Math.random()*10)+1);

// Variables
let score = document.getElementById('score');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let submit = document.querySelector('#submit');
let form = document.getElementById('form');

// Numbers in DOM
num1.innerHTML = RanNum1;
num2.innerHTML = RanNum2;

// Event Listener
form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
    let num3 = RanNum1*RanNum2;

    if(userInput==num3){
        currentNumber = score.innerHTML;
        currentNumber++;
        score.innerHTML = currentNumber;
        RanNum1 = Math.floor((Math.random()*10)+1);
        RanNum2 = Math.floor((Math.random()*10)+1);
        num1.innerHTML = RanNum1;
        num2.innerHTML = RanNum2;
    }
    else if(userInput!=num3){
        currentNumber--;
        score.innerHTML = currentNumber;
        RanNum1 = Math.floor((Math.random()*10)+1);
        RanNum2 = Math.floor((Math.random()*10)+1);
        num1.innerHTML = RanNum1;
        num2.innerHTML = RanNum2;
    }
})