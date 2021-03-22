import { recipes } from "./recipes.js";

export const generateRecipes = () => {
  const mainSection = document.getElementById("main-section");
  recipes.forEach((recipe) => {
    //create recipe card

    let mainCard = document.createElement("DIV");
    mainCard.setAttribute("class", "col-md-6 col-lg-4 main-card d-flex");
    mainSection.appendChild(mainCard);

    let recipeCard = document.createElement("DIV");
    recipeCard.setAttribute("class", "card m-3 bg-light recipe-card bg-light");
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

    let recipeCardDuration = document.createElement("DIV");
    recipeCardDuration.setAttribute(
      "class",
      "col-4 d-flex justify-content-around recipe-card__duration"
    );
    recipeCardHeader.appendChild(recipeCardDuration);

    let timerIcon = document.createElement("DIV");
    timerIcon.setAttribute("class", "recipe-card__duration-icon");
    timerIcon.innerHTML = "w";
    recipeCardDuration.appendChild(timerIcon);

    let recipeDuration = document.createElement("DIV");
    recipeDuration.setAttribute("class", "recipe-card__duration-numerals");
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
      ingredients.setAttribute("class", "recipe-card__ingredients d-flex");
      ingredients.setAttribute("id", "ingredient");
      recipeCardDetails.appendChild(ingredients);

      let ingredientName = document.createElement("DIV");
      ingredientName.setAttribute("class", "recipe-card__ingredients-name");
      ingredientName.setAttribute("id", "recipe-card__ingredients-name");
      ingredientName.innerText = ingredient["ingredient"] + ": ";
      ingredients.appendChild(ingredientName);

      let ingredientsQty = document.createElement("DIV");
      ingredientsQty.setAttribute("class", "recipe-card__quantity d-flex");
      ingredients.appendChild(ingredientsQty);

if (ingredient["quantity"]) {
      let quantity = document.createElement("DIV");
      quantity.setAttribute("id", "recipe-card__quantity-value");
      quantity.innerText =ingredient["quantity"];
      ingredientsQty.appendChild(quantity);
}
      if (ingredient["unit"]) {
        let qtyUnits = document.createElement("DIV");
        qtyUnits.setAttribute("id", "recipe-card__quantity-units");
        qtyUnits.innerText = ingredient["unit"];
        ingredientsQty.appendChild(qtyUnits);
      }
    });

    let recipeSteps = document.createElement("DIV");
    recipeSteps.setAttribute(
      "class",
      "col-6 recipe-card__steps overflow-hidden "
    );
    recipeSteps.setAttribute("id", "description");
    recipeSteps.innerText = recipe["description"];
    recipeInstructions.appendChild(recipeSteps);
  });
};
