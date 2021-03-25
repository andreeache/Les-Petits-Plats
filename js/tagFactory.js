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
  }

  generate(parentItem) {
    let myTags = [];
    if (this.secondTag != null) {
      parentItem[this.firstTag].forEach((subitem) => {
        if (this.secondTag != "") {
          myTags.push(subitem[this.secondTag]);
        } else {
          myTags.push(subitem);
        }
      });
    } else {
      myTags.push(parentItem[this.firstTag]);
    }
    let myTagSet = [...new Set(myTags)].sort();

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
}

export function filterClose(element) {
  element.parentNode.removeChild(element);
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
