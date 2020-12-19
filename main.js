var userType;

var cookPotIcon = document.querySelector('.pot');
var cookButton = document.querySelector('.cook-button');
var clearButton = document.querySelector('.clear-button');
var displayed = document.querySelector('.line2');
var recommend = document.querySelector('.recommend');
var favoriteButton = document.querySelector('.favorite-button');
var favorites = [];

// Event Listeners
cookButton.addEventListener('click', getData);
clearButton.addEventListener('click', clear);

//Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getData() {
  var index;
  var choice;
  if (document.getElementById("side").checked === true) {
    index = getRandomIndex(sideDishes);
    choice = sideDishes[index];
    sideDishes.splice(index, 1);
  } else if (document.getElementById("main").checked === true) {
      index = getRandomIndex(mainDishes);
      choice = mainDishes[index];
      mainDishes.splice(index, 1);
    } else if (document.getElementById("dessert").checked === true) {
      index = getRandomIndex(desserts);
      choice = desserts[index];
      desserts.splice(index, 1);
    } else if (document.getElementById("meal").checked === true) {
        choice = "Update for a full meal coming soon";
      } else choice = "Cloudy with a chance of Meatballs";
  showMeal(choice);
};

function showMeal(choice) {             //Let's Cook button handler
  cookPotIcon.classList.add('hidden');
  clearButton.classList.remove('hidden');
  recommend.classList.remove('hidden');
  cookButton.classList.add('hidden');
  displayed.innerText = `${choice}!`;
  favoriteButton.classList.remove('hidden');
};

function clear() {
  cookPotIcon.classList.remove('hidden');
  clearButton.classList.add('hidden');
  recommend.classList.add('hidden');
  cookButton.classList.remove('hidden');
  favoriteButton.classList.add('hidden');
};

var recipeButton = document.querySelector('.recipe-button');
recipeButton.addEventListener('click', userRecipe);
var recipeBar = document.querySelector('.add-recipe-bar');
var makeNew = document.querySelector('.add-new-button');
var type = document.querySelector('.user-type');
var dish = document.querySelector('.user-dish');
makeNew.addEventListener('click', addRecipe);

function userRecipe() {
  recipeButton.classList.add('hidden');
  recipeBar.classList.remove('hidden');
};


function addRecipe() {  //type of dish shows result, calls saving to array
  // var userType = type;
  // var userDish = dish;
  recipeButton.classList.remove('hidden');
  recipeBar.classList.add('hidden');

  if ((typeof 'type') === 'string' && (typeof 'dish') === 'string') {  //Enough validation?
    userType = type.innerText;
    choice = dish.innerText;
    saveMeal(userType, choice);
  };
  showMeal(choice);
};

function saveMeal(type, choice) {   // save the dish into it's proper array
  if (type.toLowerCase === 'side' ) {
    sideDishes.push(choice);
  } else if (type.toLowerCase === 'main') {
    mainDishes.push(choice);
  } else if (type.toLowerCase === 'dessert') {
    desserts.push(choice);
  };
};
