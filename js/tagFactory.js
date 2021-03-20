export class tagFactory {
  constructor(parentDropdown, items, firstTag, secondTag) {
    this.parentDropdown = parentDropdown;
    this.items = items;
    this.firstTag = firstTag;
    //second tag
    // if a non-empty string then it looks for the tag in an array
    // if an empty string then it looks for the elements in an array
    // if null then it means that there is no array, and the content is taken as is
    this.secondTag = secondTag;
  }

  generate() {
    let myTags = [];
    this.items.forEach((item) => {
      if (this.secondTag != null) {
        item[this.firstTag].forEach((subitem) => {
          if (this.secondTag != "") {
            myTags.push(subitem[this.secondTag]);
          } else {
            myTags.push(subitem);
          }
        });
      } else {
        myTags.push(item[this.firstTag]);
      }
    });
    let myTagSet = [...new Set(myTags)].sort();

    for (let i = 0; i < myTagSet.length; i++) {
      let tag = document.createElement("DIV");
      tag.setAttribute("class", "col-4");
      this.parentDropdown.appendChild(tag);

      let dropdownTag = document.createElement("A");
      dropdownTag.setAttribute(
        "class",
        "text-decoration-none  text-reset ingredient-tag"
      );
      dropdownTag.setAttribute("href", "#");
      dropdownTag.innerText = myTagSet[i];
      tag.appendChild(dropdownTag);
    }
  }
}
