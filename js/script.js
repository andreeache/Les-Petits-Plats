import { recipes } from "./recipes.js";
import {
  tagFactory,
  tagClick,
  filterClose,
  searchingArray,
  searchable,
} from "./tagFactory.js";
import { generateRecipes } from "./recipeCard.js";

window.tagClick = tagClick;
window.filterClose = filterClose;

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
  $(".filter__group-ingredient").css("width", "50vw");
  $(".filter__group-ingredient-dd").css("width", "50vw");
  $(".filter__group-ingredient-dd").css("margin-left", "-1px");
  $(".filter__group-ingredient").css("margin-left", "-1px");
  $(".filter__input-ingredient").attr("placeholder", "Search an ingredient");
});

$("#ingredient-group").on("hide.bs.dropdown", function () {
  $(".filter__group-ingredient").css("width", "170px");
  $(".filter__input-ingredient").attr("placeholder", "Ingredients");
  $(".filter__group-ingredient-dd").css("margin-left", "0px");
  $(".filter__group-ingredient").css("margin-left", "0px");
});

$("#device-group").on("show.bs.dropdown", function () {
  $(".filter__group-devices").css("width", "50vw");
  $(".filter__group-devices-dd").css("width", "50vw");
  $(".filter__group-devices").css("margin-left", "-1px");
  $(".filter__group-devices-dd").css("margin-left", "-1px");
  $(".filter__input-device").attr("placeholder", "Search a device");
});

$("#device-group").on("hide.bs.dropdown", function () {
  $(".filter__group-devices").css("width", "170px");
  $(".filter__input-device").attr("placeholder", "Devices");
  $(".filter__group-devices").css("margin-left", "0px");
  $(".filter__group-devices-dd").css("margin-left", "0px");
});

$("#ustensils-group").on("show.bs.dropdown", function () {
  $(".filter__group-ustensils").css("width", "50vw");
  $(".filter__group-ustensils-dd").css("width", "50vw");
  $(".filter__group-ustensils").css("margin-left", "-1px");
  $(".filter__group-ustensils-dd").css("margin-left", "-1px");
  $(".filter__input-ustensils").attr("placeholder", "Search an ustensil");
});

$("#ustensils-group").on("hide.bs.dropdown", function () {
  $(".filter__group-ustensils").css("width", "170px");
  $(".filter__input-ustensils").attr("placeholder", "Ustensils");
});

$(function () {
  $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function () {
    $(this).find(".caret").toggleClass("caretup");
  });
});

generateRecipes();

const searchChanged = (s) => {
  if (s.value.length < 3) {
    searchingArray.forEach((e) => {
      e.element.style.display = "block";
    });
    return;
  }
  const searchText = s.value.toLowerCase();
  searchingArray.forEach((e) => {
    if (e.text.includes(searchText)) {
      e.element.style.display = "block";
    } else {
      e.element.style.setProperty("display" , "none", "important");
      
    }
  });
};

window.searchChanged = searchChanged;
