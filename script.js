import { recipes } from "./recipes.js";
import { tagFactory } from "./tagFactory.js";

const ingredientFilter = document.getElementById("ingredient-filter");

const generateIngredients = () => {
  const ingredientsDropdown = document.getElementById("ingredients-dropdown");

  let t = new tagFactory(
    ingredientsDropdown,
    recipes,
    "ingredients",
    "ingredient"
  );
  t.generate();
};

generateIngredients();

const generateDevices = () => {
  const devicesDropdown = document.getElementById("devices-dropdown");
  let t = new tagFactory(devicesDropdown, recipes, "appliance", null);
  t.generate();
};

generateDevices();

const generateUstensils = () => {
  const devicesDropdown = document.getElementById("ustensils-dropdown");
  let t = new tagFactory(devicesDropdown, recipes, "ustensils", "");
  t.generate();
};

generateUstensils();

$("#ingredient-group").on("show.bs.dropdown", function () {
  $(".filter__group-ingredient").css("width", "685px");
  $(".filter__group-ingredient-dd").css("width", "685px");
  $(".filter__input-ingredient").attr("placeholder", "Search an ingredient");
});

$("#ingredient-group").on("hide.bs.dropdown", function () {
  $(".filter__group-ingredient").css("width", "170px");
  $(".filter__input-ingredient").attr("placeholder", "Ingredients");
});

$("#device-group").on("show.bs.dropdown", function () {
  $(".filter__group-devices").css("width", "685px");
  $(".filter__group-devices-dd").css("width", "685px");
  $(".filter__input-device").attr("placeholder", "Search a device");
});

$("#device-group").on("hide.bs.dropdown", function () {
  $(".filter__group-devices").css("width", "170px");
  $(".filter__input-device").attr("placeholder", "Devices");
});

$("#ustensils-group").on("show.bs.dropdown", function () {
  $(".filter__group-ustensils").css("width", "685px");
  $(".filter__group-ustensils-dd").css("width", "685px");
  $(".filter__input-ustensils").attr("placeholder", "Search an ustensil");
});

$("#ustensils-group").on("hide.bs.dropdown", function () {
  $(".filter__group-ustensils").css("width", "170px");
  $(".filter__input-ustensils").attr("placeholder", "Ustensils");
});

const mainSection = document.getElementById("main-section");
//create recipe card
let mainCard = document.createElement("DIV");
mainCard.setAttribute("class", "col-md-4 main-card");
mainSection.appendChild(mainCard);

let recipeCard = document.createElement("DIV");
recipeCard.setAttribute("class", "card m-3 bg-light recipe-card bg-light");
mainCard.appendChild(recipeCard);

let recipeCardTop = document.createElement("DIV");
recipeCardTop.setAttribute("class", "card-img-top recipe-card__top");
recipeCardTop.setAttribute("id", "missing-photo");
recipeCard.appendChild(recipeCardTop);

let recipeCardBody = document.createElement("DIV");
recipeCardBody.setAttribute("class", "row recipe-card__header");
recipeCard.appendChild(recipeCardBody);

let recipeCardHeader = document.createElement("DIV");
recipeCardHeader.setAttribute("class", "row recipe-card__header");
recipeCardBody.appendChild(recipeCardHeader);

let recipeCardTitle = document.createElement("DIV");
recipeCardTitle.setAttribute("class", "col-8 recipe-card__title");
recipeCardTitle.innerText = "welgelege";
recipeCardHeader.appendChild(recipeCardTitle);

let recipeCardDuration = document.createElement("DIV");
recipeCardDuration.setAttribute(
  "class",
  "col-4 d-flex justify-content-around recipe-card__duration"
);
recipeCardHeader.appendChild(recipeCardDuration);

let timerIcon = document.createElement("DIV");
timerIcon.setAttribute("class", "recipe-card__duration-icon");
timerIcon.innerHTML = "welgelege";
recipeCardDuration.appendChild(timerIcon);

let recipeDuration = document.createElement("DIV");
recipeDuration.setAttribute("class", "recipe-card__duration-numerals");
recipeDuration.innerText = "welgelege";
recipeCardDuration.appendChild(recipeDuration);

let timeNumerals = document.createElement("DIV");
timeNumerals.setAttribute("classs", "recipe-card__duration-min");
timeNumerals.innerText = "min";
recipeCardDuration.appendChild(timeNumerals);

let recipeInstructions = document.createElement("DIV");
recipeInstructions.setAttribute(
  "class",
  "row instructions overflow-hidden recipe-card__instruction"
);
recipeCardBody.appendChild(recipeInstructions);

let recipeCardDetails = document.createElement("DIV");
recipeCardDetails.setAttribute("class", "col-6 recipe-card__details");
recipeInstructions.appendChild(recipeCardDetails);


// forEach -> generate the numeber of igrendients, name, quantity and units
let ingredients = document.createElement("div");
ingredients.setAttribute("class", "recipe-card__ingredients d-flex");
ingredients.setAttribute("id", "ingredient");

let ingredientName = document.createElement("DIV");
ingredientName.setAttribute("id", "recipe-card__ingredients-name");
ingredientName.innerText = "welgelen";
ingredients.appendChild(ingredientName);

let ingredientsQty = document.createElement("DIV");
ingredientsQty.setAttribute("class", "recipe-card__quantity d-flex");
ingredients.appendChild(ingredientsQty);

let quantity = document.createElement("DIV");
quantity.setAttribute("id", "recipe-card__quantity-value");
quantity.innerText = "welgelegen";
ingredientsQty.appendChild(quantity);

let qtyUnits = document.createElement("DIV");
qtyUnits.setAttribute("id", "recipe-card__quantity-units");
qtyUnits.innerText = "welgelegen";
ingredientsQty.appendChild(qtyUnits);

let recipeSteps = document.createElement("DIV");
recipeSteps.setAttribute("class", "col-6 recipe-card__steps overflow-hidden ");
recipeSteps.setAttribute("id", "description");
recipeSteps.innerText = "welgelegen";
recipeInstructions.appendChild(recipeSteps);
