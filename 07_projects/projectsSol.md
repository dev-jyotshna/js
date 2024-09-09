# Projects related to DOM manipulation

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code
## project 1 : Color changer

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    // if (e.target.id === 'purple') {
    //   body.style.backgroundColor = e.target.id;
    // } // made a new button id purple & made changes in css file
  });
});

```
## project 2 : BMI calculator

```javascript
// value before submit event will give you empty value
//const height = parseInt(document.querySelector('#height').value)

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // default action is get or post
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height : ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight : ${weight}`;
  }
  else {
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    let  msg = ''
    if(bmi < 18.6){
      msg = 'Under Weight';
    }else if(bmi >= 18.6 && bmi < 24.9){
      msg = 'Normal';
    }
    else{
      msg = 'Overweight'
    }
    results.innerHTML = `<span>${bmi}</span><br><span>${msg}</span>`
  }
});

```
## project 3 : Digital Clock

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerText = date.toLocaleTimeString()
}, 1000)
```
## project 4 : Guess Number

```javascript
const random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGues = 1

let playGame = true
if(playGame){
  submit.addEventListener('click', function (e) {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
}

function checkGuess(guess){
  //
}
function guessDisplay(guess){

}

function displayMessage(msg){
  // DOM interaction
}

function endGame() {
  
}

function newGame() {

}

```
