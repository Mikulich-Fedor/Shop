class Store {
  constructor() {}

  getProducts() {
    let products = [];
    let productsLcStorage = localStorage.getItem("Store");

    if (productsLcStorage !== null) {
      products = JSON.parse(productsLcStorage);
    }

    return products;
  }

  putProduct(id) {
    let products = this.getProducts();
    let index = products.indexOf(id);
    let statusProduct;

    if (index === -1) {
      products.push(id);
      statusProduct = true;
    } else {
      products.splice(index, 1);
      statusProduct = false;
    }

    localStorage.setItem("Store", JSON.stringify(products));

    return {
      products: products,
      statusProduct: statusProduct,
    };
  }
}

let store = new Store();
