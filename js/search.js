export const filterInput = (initialRecipes, text) => {
  const returnValue = [];
  const searchFilter = text.toLowerCase();

  for (let i = 0; i < initialRecipes.length; i++) {
    //create recipe card
    const recipe = initialRecipes[i];

    if (
      recipe["name"].toLowerCase().includes(searchFilter) ||
      recipe["description"].toLowerCase().includes(searchFilter)
    ) {
      returnValue.push(recipe);
      continue;
    }

    for (let j = 0; j < recipe["ingredients"].length; j++) {
      const ingredient = recipe["ingredients"][j];
      if (ingredient["ingredient"].toLowerCase().includes(searchFilter)) {
        returnValue.push(recipe);
        return;
      }
    }
  }
  return returnValue;
};

export const filterTags = (initialRecipes, tags) => {
  const recipesWithoutAllTags = [];

  for (let i = 0; i < initialRecipes.length; i++) {
    const recipe = initialRecipes[i];
    for (let t = 0; t < tags.length; t++) {
      let tag = tags[t];

      if (recipe["appliance"].toLowerCase().includes(tag)) {
        continue;
      }

      let j = 0;
      for (; j < recipe["ingredients"].length; j++) {
        const ingredient = recipe["ingredients"][j];
        if (ingredient["ingredient"].toLowerCase().includes(tag)) {
          break;
        }
      }
      if (j != recipe["ingredients"].length) {
        continue;
      }

      for (j = 0; j < recipe["ustensils"].length; j++) {
        if (recipe["ustensils"][j].toLowerCase().includes(tag)) {
          break;
        }
      }

      if (j != recipe["ustensils"].length) {
        continue;
      }

      recipesWithoutAllTags.push(recipe);
    }
  }

  const returnValue = [];
  for (let i = 0; i < initialRecipes.length; i++) {
    if (!recipesWithoutAllTags.includes(initialRecipes[i])) {
      returnValue.push(initialRecipes[i]);
    }
  }
  return returnValue;
};
