class CreateOneProduct {
  getProductItem(card) {
    let element = document.createElement("div");
    if ("nameClass" in card) {
      element.setAttribute("class", card.nameClass);
    }
    if ("bgImage" in card) {
      element.style.backgroundImage = card.bgImage;
    }
    if ("nameText" in card) {
      element.innerHTML = card.nameText;
    }
    if ("id" in card) {
      element.setAttribute("id", card.id);
    }
    return element;
  }
}

let createOneProduct = new CreateOneProduct(".catalog_counter", catalogProduct);
