var userType;
var choice = "";
var favorites = [];

var cookPotIcon = document.querySelector('.pot');
var cookButton = document.querySelector('.cook-button');
var clearButton = document.querySelector('.clear-button');
var displayed = document.querySelector('.line2');
var recommend = document.querySelector('.recommend');
var favoriteButton = document.querySelector('.favorite-button');
var recipeButton = document.querySelector('.recipe-button');
var recipeBar = document.querySelector('.add-recipe-bar');
var makeNew = document.querySelector('.add-new-button');
var type = document.querySelector('.user-type');
var dish = document.querySelector('.user-dish');
var favoritesViewButton = document.querySelector('.favorites-view-button');
var choiceView = document.querySelector('.flex-container');
var favoritesView = document.querySelector('.favorites-view');
var favoritesImage = document.querySelector('.favorites-image');
var favoriteRecipes = document.querySelector('.favorite-recipes');
var backButton = document.querySelector('.back-button');

// Event Listeners
cookButton.addEventListener('click', getData);
clearButton.addEventListener('click', clear);
favoriteButton.addEventListener('click', addFavorite);
recipeButton.addEventListener('click', userRecipe);
makeNew.addEventListener('click', addRecipe);
favoritesViewButton.addEventListener('click', viewFavorites);
backButton.addEventListener('click', goBack);

//Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getData() {
  var index;
  displayed.classList.add('line2');
  if (document.getElementById("meal").checked === true) {
    makeMeal();
    return;
  }
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
    } else choice = "Oops, you forgot to make a selection";
        //else if (document.getElementById("meal").checked === true) {
        //choice = "Update for a full meal coming soon";
        //  } else choice = "Cloudy with a chance of Meatballs";
  showMeal(choice);
};

function makeMeal() {
  var meal = "";
  choice = "";
  index = getRandomIndex(mainDishes);
  choice += mainDishes[index];
  choice += " with a side of "
  mainDishes.splice(index, 1);
  index = getRandomIndex(sideDishes);
  choice += sideDishes[index];
  choice += " and ";
  sideDishes.splice(index, 1);
  index = getRandomIndex(desserts);
  choice += desserts[index];
  desserts.splice(index, 1);
  choice += " for dessert!"
  displayed.classList.add('line2-meal');
  showMeal(choice);
}

function showMeal(choice) {             //Let's Cook button handler
  hideUserRecipe();
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

function userRecipe() {
  recipeButton.classList.add('hidden');
  recipeBar.classList.remove('hidden');
};

function hideUserRecipe() {
  recipeButton.classList.remove('hidden');
  recipeBar.classList.add('hidden');
}

function addRecipe() {
  recipeButton.classList.remove('hidden');
  recipeBar.classList.add('hidden');
  favoritesViewButton.classList.remove('hidden');
  if ((typeof 'type') === 'string' && (typeof 'dish') === 'string') {  //Enough validation?
    userType = type.innerText;
    choice = dish.innerText;
    saveMeal(userType, choice);
  };
  userType = type.value;
  choice = dish.value;
  saveMeal(userType, choice);
  showMeal(choice);
};

function saveMeal(type, choice) {   // save the dish into it's proper array
  if (type.toLowerCase === 'side' ) {
    sideDishes.push(choice);
    console.log(choice);
  } else if (type.toLowerCase === 'main' || type.toLowerCase === 'main dish') {
    mainDishes.push(choice);
  } else if (type.toLowerCase === 'dessert') {
    desserts.push(choice);
  };
  hideUserRecipe();
  showMeal(choice);
};

function addFavorite() {
  favorites.unshift(choice);
};

function viewFavorites() {
  hideUserRecipe();
  choiceView.classList.add('hidden');
  favoritesView.classList.remove('hidden');
  favoritesViewButton.classList.add('hidden');
  favoritesImage.classList.remove('hidden');
  favoriteRecipes.classList.remove('hidden');
  backButton.classList.remove('hidden');
  favoriteRecipes.innerHTML = favorites;
}

function goBack() {
  backButton.classList.add('hidden');
  choiceView.classList.remove('hidden');
  favoritesView.classList.add('hidden');
  favoritesViewButton.classList.remove('hidden');
  favoritesImage.classList.add('hidden');
  favoriteRecipes.classList.add('hidden');
}
