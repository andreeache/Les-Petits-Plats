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
  