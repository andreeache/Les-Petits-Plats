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
  $(".ingredient-group").css("width", "685px");
  $(".ingredient-input").attr("placeholder", "Search an ingredient");
});

$("#ingredient-group").on("hide.bs.dropdown", function () {
  $(".ingredient-group").css("width", "200px");
  $(".ingredient-input").attr("placeholder", "Ingredients");
});
