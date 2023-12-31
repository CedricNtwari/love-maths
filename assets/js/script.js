
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type')== 'submit'){
                checkAnswer();
            }else{
                let gameType = this.getAttribute('data-type')
                alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        })
    }
    document.getElementById('answerbox').addEventListener('keydown', function(event){
        if(event.type === 'Enter'){
            checkAnswer();
        }
    })
    runGame(gameType);
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the users's answer has been processed
 */
function runGame(gameType) {

    document.getElementById('answerbox').value = "";
    document.getElementById('answerbox').focus();

    // create two random numbers between 0-25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
     if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2);
     }else if(gameType === 'multiply'){
        displayMultiplyQuestion(num1, num2);
     }else if(gameType === 'substract'){
        displaySubtractQuestion(num1, num2);
     }else if(gameType === 'division'){
        displayDivisionQuestion(num1, num2);
     }
     else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
     }
}

/**
 * Check the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answerbox').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
     if(isCorrect){
      alert('Hey, You got it right!');
      incrementScore();
     }else{
      alert(`Ohh....You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
       incremnetWrongAnswer();
     }

     runGame(calculatedAnswer[1]);
 }

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the dom, and returns the correct answer
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById('operand1').innerText);
  let operand2 = parseInt(document.getElementById('operand2').innerText);
  let operator = document.getElementById('operator').innerText;
     if(operator === '+'){
        return [operand1 + operand2, "addition"];
     }else if(operator === 'x'){
        return [operand1 * operand2, "multiply"];
     }else if(operator === '-'){
        return [operand1 - operand2, "substract"];
     }else if(operator === '/'){
        return [operand1 / operand2, "division"];
     }
     else{
        alert(`Unimplemented operator ${gameType}`);
        throw `Unimplemented operator: ${gameType}. Aborting!`;
     }

 }

/**
 * Gets the current score form the DOM and increments it by 1
 */
function incrementScore() {
    let score = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++score;
 }

 /**
 * Gets the current score form the DOM and decrements it by 1
 */
function incremnetWrongAnswer() {
    let score = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++score;
 }
 

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent =  operand2;
    document.getElementById('operator').textContent = '+';
 }
  
function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
 }

function displayMultiplyQuestion(operand1, operand2) { 
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
    // Make sure to generate whole number, an integer
    operand1 = operand1 * operand2;
    
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '/';
 }
