import { generateRecipes } from "./recipeCard.js";
import { filterInput, filterTags } from "./search.js";
import { recipes } from "./recipes.js";

export class tagFactory {
  constructor(parentDropdown, firstTag, secondTag) {
    this.parentDropdown = parentDropdown;
    this.firstTag = firstTag;
    //second tag
    // if a non-empty string then it looks for the tag in an array
    // if an empty string then it looks for the elements in an array
    // if null then it means that there is no array, and the content is taken as is
    this.secondTag = secondTag;

    this.parentDropdown.textContent = "";
    this.myTags = [];
  }
// add tags for each displayed recipe
  addTags(recipe) {
    if (this.secondTag != null) {
      recipe[this.firstTag].forEach((subitem) => {
        if (this.secondTag != "") {
          this.myTags.push(subitem[this.secondTag]);
        } else {
          this.myTags.push(subitem);
        }
      });
    } else {
      this.myTags.push(recipe[this.firstTag]);
    }
  }
// generate tags in the dropdown list
  generate() {
    // remove duplicates and sort tags
    let myTagSet = [...new Set(this.myTags)].sort();

    for (let i = 0; i < myTagSet.length; i++) {
      let tag = document.createElement("DIV");
      tag.setAttribute("class", "col-md-4");
      this.parentDropdown.appendChild(tag);

      let dropdownTag = document.createElement("div");
      dropdownTag.setAttribute(
        "class",
        "text-decoration-none  text-reset ingredient-tag text-capitalize"
      );
      dropdownTag.innerText = myTagSet[i];
      dropdownTag.setAttribute("onclick", "tagClick(this)");
      tag.appendChild(dropdownTag);
    }
  }
}

export let currentTags = [];

// create tag button for selected tag filter
export function tagClick(element) {
  let filterSection = document.getElementById("filter-section");

  let newButton = document.createElement("button");
  let myClass =
    "m-1 px-2  py-1 d-flex  justify-content-between filter-srction__btn rounded";

  if (
    element.parentNode.parentNode.parentNode
      .getAttribute("class")
      .includes("bg-primary")
  ) {
    myClass += " btn-primary";
  } else if (
    element.parentNode.parentNode.parentNode
      .getAttribute("class")
      .includes("bg-success")
  ) {
    myClass += " btn-success";
  } else {
    myClass += " btn-danger";
  }

  newButton.setAttribute("class", myClass);
  newButton.setAttribute("onclick", "filterClose(this)");
  newButton.setAttribute("aria-label", "Close");
  let newButtonName = document.createElement("DIV");
  newButtonName.innerText = element.innerText;
  newButton.appendChild(newButtonName);

  let newButtonIcon = document.createElement("DIV");
  newButtonIcon.setAttribute("class", "bi bi-x-circle ml-2");
  newButton.appendChild(newButtonIcon);

  filterSection.appendChild(newButton);

  // regenerate all the elements and new search including the current tag
  currentTags.push(newButtonName.innerText.toLowerCase());
  const s = document.getElementById("searchBar");
  const myRecipes = filterInput(recipes, s.value);
  const myTagsFilteredRecipes = filterTags(myRecipes, currentTags);
  generateRecipes(myTagsFilteredRecipes);
}

// close tag filter button
export function filterClose(element) {
  currentTags = currentTags.filter((value, index, array) => {
    // it also contains the (X) at the end of the innerText
    return value != element.innerText.toLowerCase().slice(0, -1);
  });
  element.parentNode.removeChild(element);

  const s = document.getElementById("searchBar");
// after closing the tag, it will generate a new search witth the current values
  const myRecipes = filterInput(recipes, s.value);
  if (currentTags.length > 0) {
    const myTagsFilteredRecipes = filterTags(myRecipes, currentTags);
    generateRecipes(myTagsFilteredRecipes);
  } else {
    generateRecipes(myRecipes);
  }
}

