export const filterInput = (initialRecipes, text) => {
    // empty array for the recipes that will match the input
  const returnValue = [];
  const searchFilter = text.toLowerCase();

  for (let i = 0; i < initialRecipes.length; i++) {
    if (initialRecipes[i]["searchText"].includes(searchFilter)) {
      returnValue.push(initialRecipes[i]);
      continue;
    }
  }
  return returnValue;
};

// filter recipes according to tags from dropdown list
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
// array with all the recipes that don't match the tags
      recipesWithoutAllTags.push(recipe);
    }
  }
// iterates all the recipes and display the ones that don't belong thr recipesWithoutAllTags
  const returnValue = [];
  for (let i = 0; i < initialRecipes.length; i++) {
    if (!recipesWithoutAllTags.includes(initialRecipes[i])) {
      returnValue.push(initialRecipes[i]);
    }
  }
  return returnValue;
};
