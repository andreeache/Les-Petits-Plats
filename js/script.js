import { recipes } from "./recipes.js";
import {
  currentTags,
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

// $(function () {
//   $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function () {
//     $(this).find(".caret").toggleClass("caretup");
//   });
// });

generateRecipes("", []);

const searchChanged = (s) => {
  if (s.value.length < 3) {
    generateRecipes("", currentTags);
  } else {
    generateRecipes(s.value.toLowerCase(), currentTags);
  }
};

window.searchChanged = searchChanged;
