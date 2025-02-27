// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price = product.querySelector('.price span').innerText;
const quantity = product.querySelector('.quantity input').value;
const subtotal = price * quantity;
product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
return subtotal
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2  // ITERATION 3

  const allProducts = document.getElementsByClassName('product');
  const total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    subtotal = updateSubtotal(allProducts[i]); 
  }
  document.querySelector("#total-value span").textContent = total.toFixed(2);
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
