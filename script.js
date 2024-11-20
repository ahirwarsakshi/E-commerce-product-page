// Initialize cart array
let cart = [];

// Get cart container element
const cartContainer = document.getElementById("cart");

// Get cart list element
const cartList = document.getElementById("cart-list");

// Get cart total price element
const cartTotalPrice = document.getElementById("cart-total-price");

// Get add to cart button element
const addToCartButtons = document.getElementsByClassName("add-to-cart");

// Add event listener to each add to cart button
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function() {
    // Add product to cart
    cart.push({
      name: "Smartphone XY