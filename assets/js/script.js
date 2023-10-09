
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type')== 'submit'){
                alert('You clicked Submit!')
            }else{
                let gameType = this.getAttribute('data-type')
                alert(`You clicked ${gameType}`);
            }
        })
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the users's answer has been processed
 */
function runGame() { 
    // create two random numbers between 0-25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let numb2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() { }
function calculateCorrectAnswer() { }
function incrementScore() { }
function incremnetWrongAnswer() { }
function displayAdditionQuestion() { }
function displaySubtractQuestion() { }
function displayMultiplyQuestion() { }


console.log('Hello world', buttons);