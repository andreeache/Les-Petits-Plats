import { recipes } from "./recipes.js";

const ingredientFilter = document.getElementById("ingredient-filter");

const generateIngredients = () => {
  const ingredientsDropdown = document.getElementById("ingredients-dropdown");

  let myIngredients = [];
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i]["ingredients"].length; j++) {
      myIngredients.push(recipes[i]["ingredients"][j]["ingredient"]);
    }
  }
  let myIngredientsSet = [...new Set(myIngredients)].sort();

  for (let i = 0; i < myIngredientsSet.length; i++) {
    let ingredient = document.createElement("DIV");
    ingredient.setAttribute("class", "col-4");
    ingredientsDropdown.appendChild(ingredient);

    let ingredientTag = document.createElement("A");
    ingredientTag.setAttribute(
      "class",
      "text-decoration-none  text-reset ingredient-tag"
    );
    ingredientTag.setAttribute("href", "");
    ingredientTag.innerText = myIngredientsSet[i];
    ingredient.appendChild(ingredientTag);
  }
};

generateIngredients();

$("#ingredient-group").on("show.bs.dropdown", function () {
  console.log("deschis");
  $('.ingredient-group').css("width","685px");
  $(".ingredient-input").attr("placeholder", "Search an ingredient");
  
});

$("#ingredient-group").on("hide.bs.dropdown", function () {
    console.log("deschis");
    $('.ingredient-group').css("width","200px");
    $(".ingredient-input").attr("placeholder", "Ingredients")
  });
  
//  $("#serMemtb").attr("placeholder", "Type a Location").val("").focus().blur();

$(function(){
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function(){
      $(this).find(".caret").toggleClass("caretup");
    });
  });