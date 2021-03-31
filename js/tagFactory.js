import { generateRecipes } from "./recipeCard.js";

export class tagFactory {
  constructor(parentDropdown, firstTag, secondTag, mapOfTags) {
    this.parentDropdown = parentDropdown;
    this.firstTag = firstTag;
    //second tag
    // if a non-empty string then it looks for the tag in an array
    // if an empty string then it looks for the elements in an array
    // if null then it means that there is no array, and the content is taken as is
    this.secondTag = secondTag;

    this.parentDropdown.textContent = "";
    this.myTags = [];

    // the map of tags used to quickly get all the matching recipes for a certain tag
    this.tagMap = mapOfTags;
  }

  addTag(recipe, tag) {
    this.myTags.push(tag);

    if (this.tagMap) {
      const myKey = tag.toLowerCase();
      if (!this.tagMap.has(myKey)) {
        // first recipe to contain this tag
        this.tagMap.set(myKey, [recipe]);
      } else {
        // multiple recipes with this tag, just append it
        let value = this.tagMap.get(myKey);
        value.push(recipe);
        this.tagMap.set(myKey, value);
      }
    }
  }

  addTags(recipe) {
    if (this.secondTag != null) {
      recipe[this.firstTag].forEach((subitem) => {
        if (this.secondTag != "") {
          this.addTag(recipe, subitem[this.secondTag]);
        } else {
          this.addTag(recipe, subitem);
        }
      });
    } else {
      this.addTag(recipe, recipe[this.firstTag]);
    }
  }

  generate() {
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
      searchingArray.push(new searchable(tag, myTagSet[i].toLowerCase()));
    }
  }
}

export let currentTags = [];

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

  // regenerate all the elements
  currentTags.push(newButtonName.innerText.toLowerCase());
  const s = document.getElementById("searchBar");
  generateRecipes(s.value.toLowerCase(), currentTags);
}

export function filterClose(element) {
  currentTags = currentTags.filter((value, index, array) => {
    // it also contains the (X) at the end of the innerText
    return value != element.innerText.toLowerCase().slice(0, -1);
  });
  element.parentNode.removeChild(element);

  const s = document.getElementById("searchBar");
  generateRecipes(s.value.toLowerCase(), currentTags);
}

export let searchingArray = [];

export class searchable {
  element;
  text;
  constructor(element, text) {
    this.element = element;
    this.text = text;
  }
}
