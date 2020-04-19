let vase = document.getElementById("vase");
let pictures = document.getElementById("pictures");
let light = document.getElementById("light");
let candles = document.getElementById("candles");
let indexObj = 2;

class AllProducts {
  constructor(containerProducts, catalogProduct, catalogCounter) {
    this.containerProducts = document.querySelector(containerProducts);
    this.catalogProduct = catalogProduct;
    this.catalogCounter = document.querySelector(".catalog_counter");
    this.createProducts();
  }
  createProducts() {
    let wrapper = document.createElement("slot");
    let products = store.getProducts();
    this.catalogCounter.innerHTML = products.length;
    for (let i = 0; i < this.catalogProduct.length; i++) {
      let index = products.indexOf(this.catalogProduct[i].id);
      let activeText;

      if (index === -1) {
        activeText = "Добавить в корзину";
      } else {
        activeText = "Удолить из корзины";
      }

      let item = createOneProduct.getProductItem({
        nameTag: "div",
        nameClass: "item",
      });
      let name = createOneProduct.getProductItem({
        nameTag: "div",
        nameClass: "name",
        nameText: this.catalogProduct[i].name,
      });
      let img = createOneProduct.getProductItem({
        nameTag: "div",
        nameClass: "img",
        bgImage: `url(${this.catalogProduct[i].img})`,
      });
      let price = createOneProduct.getProductItem({
        nameTag: "div",
        nameClass: "price",
        nameText: this.catalogProduct[i].price,
      });
      let btn = createOneProduct.getProductItem({
        nameTag: "button",
        nameClass: "btn",
        nameText: activeText,
        id: this.catalogProduct[i].id,
      });
      btn.addEventListener("click", function () {
        let id = this.getAttribute("id");
        let result = store.putProduct(id);

        allProducts.catalogProduct.innerHTML = result.products.length;
        if (result.statusProduct) {
          this.innerHTML = "Удалить из корзины";
        } else {
          this.innerHTML = "Добавить в корзину";
        }
      });
      item.appendChild(name);
      item.appendChild(img);
      item.appendChild(price);
      item.appendChild(btn);
      wrapper.appendChild(item);
    }
    this.containerProducts.appendChild(wrapper);
  }
}

function checkBtn(catalogProduct, indexObj) {
  let cotBtn = document.querySelectorAll(".price-list li");
  let boxContaiterProducts = document.getElementById("boxContainer");
  this.catalogProduct = catalogProduct;
  this.indexObj = indexObj;
  for (let i = 0; i < cotBtn.length; i++) {
    cotBtn[i].addEventListener("click", () => {
      let btnValue = cotBtn[i].value;
      switch (btnValue) {
        case 0:
          indexObj = 0;
          boxContaiterProducts.innerHTML = "";
          let allProducts0 = new AllProducts(
            ".contaiter_products",
            catalogProduct[indexObj],
            ".catalog_counter"
          );

          console.log(catalogProduct[indexObj]);
          break;
        case 1:
          indexObj = 1;
          boxContaiterProducts.innerHTML = "";
          let allProducts1 = new AllProducts(
            ".contaiter_products",
            catalogProduct[indexObj],
            ".catalog_counter"
          );
          console.log(catalogProduct[indexObj]);
          break;
        case 2:
          indexObj = 2;
          boxContaiterProducts.innerHTML = "";
          let allProducts2 = new AllProducts(
            ".contaiter_products",
            catalogProduct[indexObj],
            ".catalog_counter"
          );
          console.log(catalogProduct[indexObj]);
          break;
        case 3:
          alert("Пока нет");
          break;
      }
    });
  }
}

checkBtn(catalogProduct, indexObj);

let allProducts = new AllProducts(
  ".contaiter_products",
  catalogProduct[indexObj],
  ".catalog_counter"
);
