const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clear');

let x = 0;
let y = 0;
let op = '';

buttons.forEach((button) => {
  if (Number.isInteger(Number.parseInt(button.id))) {
    button.addEventListener('click', () => {
      display.innerText += button.id;
    })
  }
})

clear.addEventListener('click', () => {
  display.innerText = '';
});

function operate(x, y, op){

}

function add(x, y, op) {
  let sum = 0;



  return sum;
}

function subtract(x, y, op) {
  let diff = 0;



  return diff;
}

function multiply(x, y, op) {
  let prod = 1;



  return product;
}

function divide(x, y, op) {
  let quo = 1;



  return quo;
}