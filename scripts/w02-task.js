/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Sam Gray' ;

const currentYear = new Date().getFullYear();

const profilePicture = "images/Sam.png";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");
const foodElement = document.getElementById("food");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favFoods = ['Pizza', 'Cheeseburgers', 'Sushi', 'Poki Bowl', 'Pulled Pork Sandwiches'];

foodElement.textContent = favFoods;

let newFavoriteFood = 'Rocky Road Ice Cream';

favFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
