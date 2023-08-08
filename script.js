const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

let x = '';
let y = '';
let op = '';

buttons.forEach((button) => {
  if (Number.isInteger(Number.parseInt(button.id))) {
    button.addEventListener('click', () => {
      display.innerText += button.id;
    })
  }
  else {
    button.addEventListener('click', () => {
      if (display.innerText != '') {
        if (button.id == 'add') {
          op = 'add';
        }
        else if (button.id == 'subtract') {
          op = 'subtract';
        }
        else if (button.id == 'multiply') {
          op = 'multiply';
        }
        else if (button.id == 'divide') {
          op = 'divide';
        }

        x == display.innerText;
        display.innerText = '';
      }
    })
  }
})

clear.addEventListener('click', () => {
  display.innerText = '';
  x = '', y = '', op = '';
});

equal.addEventListener('click', () => {
  if (x != '' && display.innerText == '') {
    display.innerText = x;
  }
  else if (x != '' && display.innerText != '') {
    y = display.innerText;

    operate(x, y, op);
  }
})

function operate(x, y, op){
  x = Number.parseInt(x);
  y = Number.parseInt(y);

  switch(op) {
    case 'add':
      display.innerText(add(x, y));
      break;
    case 'subtract':
      display.innerText(subtract(x, y));
      break;
    case 'multiply':
      display.innerText(multiply(x, y));
      break;
    case 'divide':
      display.innerText(divide(x, y));
      break;
  }

  y = '', op = '';
  
  return;
}

function add(x, y) {
  x = x + y;
  return x;
}

function subtract(x, y) {
  x = x - y;
  return x;
}

function multiply(x, y) {
  x = x * y;
  return x;
}

function divide(x, y) {
  if (y == 0){
    alert('No, your\'e being naughty');
  }
  else {
    x = Math.round((x / y) * 10) / 10;
  return x;
  }
}