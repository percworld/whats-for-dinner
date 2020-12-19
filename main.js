// get familiar with css syling calls
var sideDishes = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
];

var mainDishes = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
]


var cookPotIcon = document.querySelector('.pot');
var cookButton = document.querySelector('.cook-button');

var clearButton = document.querySelector('.clear-button');
var line2 = document.querySelector('.line2');
var recommend = document.querySelector('.recommend');


// Event Listeners
cookButton.addEventListener('click', showMeal)
clearButton.addEventListener('click', clear)

//Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getData() {
  var choice;
  if (document.getElementById("side").checked === true) {
    choice = sideDishes[getRandomIndex(sideDishes)];
  } else if (document.getElementById("main").checked === true) {
      choice = mainDishes[getRandomIndex(mainDishes)];
    } else if (document.getElementById("dessert").checked === true) {
      choice = desserts[getRandomIndex(desserts)];
    } else if (document.getElementById("meal").checked === true) {
        choice = "Update for a full meal coming soon";
      } else choice = "Cloudy with a chance of Meatballs";
  makeRecommend(choice);
};

function makeRecommend(choice) {
  line2.innerText = `${choice}!`;

}

function showMeal() {             //Let's Cook button handler
  cookPotIcon.classList.add('hidden');
  clearButton.classList.remove('hidden');
  recommend.classList.remove('hidden');
  cookButton.classList.add('hidden');
  getData();
}

function clear() {
  cookPotIcon.classList.remove('hidden');
  clearButton.classList.add('hidden');
  recommend.classList.add('hidden');
  cookButton.classList.remove('hidden');
}
var recipeButton = document.querySelector('.recipe-button');
recipeButton.addEventListener('click', userRecipe);
var recipeBar = document.querySelector('.add-recipe-bar');
var makeNew = document.querySelector('.add-new-button');
var type = document.querySelector('.user-type');
var dish = document.querySelector('.user-dish');
makeNew.addEventListener('click', addRecipe)
function userRecipe() {
  recipeButton.classList.add('hidden');
  recipeBar.classList.remove('hidden');
}
function addRecipe() {  //adds to type of dish array and shows result
  
}
