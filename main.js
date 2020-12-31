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
cookButton.addEventListener('click', chooseRandomRecipe);
clearButton.addEventListener('click', clear);
favoriteButton.addEventListener('click', addFavorite);
recipeButton.addEventListener('click', userRecipe);
makeNew.addEventListener('click', addRecipe);
favoritesViewButton.addEventListener('click', viewFavorites);
backButton.addEventListener('click', goBack);

//Event Handlers
function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function chooseRandomRecipe() {
  displayed.classList.add('line2');
  if (document.getElementById("meal").checked === true) {
    makeMeal();
  } else if (document.getElementById("side").checked === true) {
    choice = chooseDish(sideDishes);
  } else if (document.getElementById("main").checked === true) {
      choice = chooseDish(mainDishes);
  } else if (document.getElementById("dessert").checked === true) {
      choice = chooseDish(desserts);
  } else choice = "Oops, you forgot to make a selection";
  showMeal(choice);
};

function chooseDish(type) {
  var index = getRandomIndex(type);
  choice = type[index];
  type.splice(index, 1);
  return choice;
};

function makeMeal() {
  choice = `${chooseDish(mainDishes)} with a side of ${chooseDish(sideDishes)} and ${chooseDish(desserts)} for dessert!`;
  displayed.classList.add('line2-meal');
};

function showMeal(choice) {
  hideUserRecipe();
  hide(cookPotIcon);
  hide(cookButton);
  show(clearButton);
  show(recommend);
  show(favoriteButton);
  show(favoritesViewButton);
  displayed.innerText = `${choice}!`;
};

function clear() {
  hide(favoriteRecipes);
  hide(clearButton);
  hide(recommend);
  hide(favoriteButton);
  show(cookPotIcon);
  show(cookButton);
};

function userRecipe() {
  goBack();
  hide(recipeButton);
  show(recipeBar);
  hide(favoritesViewButton);
};

function hideUserRecipe() {
  show(recipeButton);
  hide(recipeBar);
};

function addRecipe() {
  hideUserRecipe();
  show(favoritesViewButton);
  userType = type.value;
  choice = dish.value;
  if (typeof userType == 'string' && typeof choice == 'string') {
    saveMeal(userType, choice);
    showMeal(choice);
  } else return;
  clearFields();
};

function clearFields() {
  dish.value = "";
  type.value = "";
};

function saveMeal(type, choice) {
  if (type.toLowerCase === 'side' ) {
    sideDishes.push(choice);
  } else if (type.toLowerCase === 'main' || type.toLowerCase === 'main dish') {
    mainDishes.push(choice);
  } else if (type.toLowerCase === 'dessert') {
    desserts.push(choice);
  };
  hideUserRecipe();
  showMeal(choice);
};

function addFavorite() {
  if (choice != "Oops, you forgot to make a selection" && !favorites.includes(choice)) {
    favorites.unshift("   " + choice);
  };
};

function viewFavorites() {
  hideUserRecipe();
  hide(choiceView);
  hide(favoritesViewButton);
  show(favoritesView);
  show(favoritesImage);
  show(favoriteRecipes);
  show(backButton);
  favoriteRecipes.innerHTML = favorites;
};

function goBack() {
  hide(backButton);
  hide(favoritesImage);
  hide(favoritesView);
  hide(favoriteRecipes);
  show(choiceView);
  show(favoritesViewButton);
  clear();
};

clear();
