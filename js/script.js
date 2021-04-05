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
import { filterInput, filterTags } from "./search.js";

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

generateRecipes(recipes, []);

const searchChanged = (s) => {
  if (s.value.length < 3) {
    generateRecipes(recipes);
  } else {
    const myRecipes = filterInput(recipes, s.value);
    if (currentTags.length > 0) {
      const myTagsFilteredRecipes = filterTags(myRecipes, currentTags);
      generateRecipes(myTagsFilteredRecipes);
    } else {
      generateRecipes(myRecipes);
    }
  }
};

window.searchChanged = searchChanged;

const tagChanged = (s) => {
  let tags = s.parentNode.getElementsByClassName("col-md-4");
  let toFind = s.value.toLowerCase();
  for (let i = 0; i < tags.length; i++) {
    let e = tags[i];
    if (e.innerText.toLowerCase().includes(toFind)) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  }
};

window.tagChanged = tagChanged;
