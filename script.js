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
  $(".filter__input-ingredient").attr("placeholder", "Search an ingredient");
});

$("#ingredient-group").on("hide.bs.dropdown", function () {
  $(".filter__group-ingredient").css("width", "200px");
  $(".filter__input-ingredient").attr("placeholder", "Ingredients");
});
