// Write your code here
//Array of Products
const products = [ "Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct(products){
    console.log(products)
}

logFirstProduct(products);// call to action function

//Adding products
function addProduct(products){
    products.push("Keyboard")
    console.log(products)
}
addProduct(products);

//updating
function updateProductName(products){
    products[0] = "Traditional Computer"
    console.log(products)
}
updateProductName(products)

// Removing an item in the array
function removeLastProduct(products){
    products.pop()
    console.log(products)
}
removeLastProduct(products)


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
