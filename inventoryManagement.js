// Array of Products
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(product) {
  products.push(product);
}

function updateProductName(index, newName) {
  products[index] = newName;
}

function removeLastProduct() {
  products.pop();
}

module.exports = {
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct,
  products,
};
