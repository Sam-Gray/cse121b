/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Declaration - Addition Feature */
function add(number1, number2) {
  return number1 + number2;
}

/* Function Declaration - addNumbers */
function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Adding a Click Event Listener */
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
  return number1 - number2;
};

/* Function Declaration - subtractNumbers */
function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

/* Adding a Click Event Listener */
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Function Declaration - multiplyNumbers */
function multiplyNumbers() {
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(factor1, factor2);
}

/* Adding a Click Event Listener */
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Your Choice - Division Feature */
// Function Declaration
function divide(number1, number2) {
  return number1 / number2;
}

// Function Declaration - divideNumbers
function divideNumbers() {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  
  if (divisor === 0) {
    alert("Cannot divide by zero.");
    return; 
  }

  document.querySelector('#quotient').value = divide(dividend, divisor);
}


/* Adding a Click Event Listener */
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structures / Program Branching */
// Declare and instantiate a variable to store the current date.
const currentDate = new Date();

// Declare a variable to hold the current year.
let currentYear;

// Using the variable declared in number 1, call the built-in getFullYear() method/function and assign it to the variable declared in number 2.
currentYear = currentDate.getFullYear();

// Assign the current year variable to an HTML form element with an ID of year.
document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array - Display in HTML */
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
