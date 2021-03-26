import { recipes } from "./recipes.js";
import { searchingArray, searchable, tagFactory } from "./tagFactory.js";

export const generateRecipes = (searchFilter, tags) => {
  const mainSection = document.getElementById("main-section");
  const ingredientsDropdown = document.getElementById("ingredients-dropdown");
  const devicesDropdown = document.getElementById("devices-dropdown");
  const ustensilsDropdown = document.getElementById("ustensils-dropdown");

  let ingredientsFactory = new tagFactory(
    ingredientsDropdown,
    "ingredients",
    "ingredient"
  );

  let applianceFactory = new tagFactory(devicesDropdown, "appliance", null);
  let ustensilsFactory = new tagFactory(ustensilsDropdown, "ustensils", "");

  mainSection.textContent = "";

  for (let i = 0; i < recipes.length; i++) {
    //create recipe card
    const recipe = recipes[i];
    let display = false;

    if (
      recipe["name"].toLowerCase().includes(searchFilter) ||
      recipe["description"].toLowerCase().includes(searchFilter)
    ) {
      display = true;
    }

    recipe["ingredients"].forEach((ingredient) => {
      if (ingredient["ingredient"].toLowerCase().includes(searchFilter)) {
        display = true;
      }
    });

    if (!display && tags.length > 0) {
      tags.forEach((tag) => {
        if (!recipe["appliance"].toLowerCase().includes(tag)) {
          display = true;
        }
      });
    }

    if (!display && tags.length > 0) {
      recipe["ustensils"].forEach((ustensil) => {
        tags.forEach((tag) => {
          if (ustensil["ustensils"].toLowerCase().includes(tag)) {
            display = true;
          }
        });
      });
    }
    if (!display) {
      continue;
    }

    let mainCard = document.createElement("DIV");
    mainCard.setAttribute("class", "col-md-6 col-lg-4 main-card d-flex p-2");
    mainSection.appendChild(mainCard);

    let recipeCard = document.createElement("DIV");
    recipeCard.setAttribute("class", "card m-2 bg-light recipe-card bg-light");
    mainCard.appendChild(recipeCard);

    let recipeCardTop = document.createElement("DIV");
    recipeCardTop.setAttribute("class", "card-img-top recipe-card__top");
    recipeCardTop.setAttribute("id", "missing-photo");
    recipeCard.appendChild(recipeCardTop);

    let recipeCardBody = document.createElement("DIV");
    recipeCardBody.setAttribute("class", "card-body recipe-card__body");
    recipeCard.appendChild(recipeCardBody);

    let recipeCardHeader = document.createElement("DIV");
    recipeCardHeader.setAttribute("class", "row recipe-card__header");
    recipeCardBody.appendChild(recipeCardHeader);

    let recipeCardTitle = document.createElement("DIV");
    recipeCardTitle.setAttribute("class", "col-8 recipe-card__title");
    recipeCardTitle.innerText = recipe["name"];
    recipeCardHeader.appendChild(recipeCardTitle);

    let mySearchText = recipe["name"];

    let recipeCardDuration = document.createElement("DIV");
    recipeCardDuration.setAttribute(
      "class",
      "col-4 d-flex justify-content-end recipe-card__duration"
    );
    recipeCardHeader.appendChild(recipeCardDuration);

    let timerIcon = document.createElement("i");
    timerIcon.setAttribute(
      "class",
      "recipe-card__duration-icon bi bi-clock font-weight-bold pr-1"
    );
    timerIcon.innerHTML = "";
    recipeCardDuration.appendChild(timerIcon);

    let recipeDuration = document.createElement("DIV");
    recipeDuration.setAttribute("class", "recipe-card__duration-numerals pr-1");
    recipeDuration.innerText = recipe["time"];
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

    recipe["ingredients"].forEach((ingredient) => {
      let ingredients = document.createElement("div");
      ingredients.setAttribute(
        "class",
        "recipe-card__ingredients d-flex justify-content-start "
      );
      ingredients.setAttribute("id", "ingredient");
      recipeCardDetails.appendChild(ingredients);

      let ingredientName = document.createElement("DIV");
      ingredientName.setAttribute(
        "class",
        "recipe-card__ingredients-name overflow-hidden"
      );
      ingredientName.setAttribute("id", "recipe-card__ingredients-name");
      ingredientName.innerHTML =
        ingredient["ingredient"].bold() +
        (ingredient["quantity"]
          ? ": " +
            ingredient["quantity"] +
            (ingredient["unit"] ? " " + ingredient["unit"] : "")
          : "");
      ingredients.appendChild(ingredientName);
      mySearchText += ingredient["ingredient"];
    });

    let recipeSteps = document.createElement("DIV");
    recipeSteps.setAttribute(
      "class",
      "col-6 recipe-card__steps overflow-hidden "
    );
    recipeSteps.setAttribute("id", "description");
    recipeSteps.innerText = recipe["description"];
    recipeInstructions.appendChild(recipeSteps);
    mySearchText += recipe["description"];
    searchingArray.push(new searchable(mainCard, mySearchText.toLowerCase()));

    ingredientsFactory.addTags(recipe);
    applianceFactory.addTags(recipe);
    ustensilsFactory.addTags(recipe);
  }
  ingredientsFactory.generate();
  applianceFactory.generate();
  ustensilsFactory.generate();
};
