import { fetchProducts } from './products.js';
import { setupSearch } from './search.js';
import {generateStarRating} from './checkout.js';

async function init(){
const products = await fetchProducts();
renderHtml(products);
setupSearch(products);
showCartBtn();
}
init();

function renderHtml(products){
let html = '';
for (let category in products) {
let items = ``;
for (let item of products[category]) {
items += `
<div class="best-p1" data-id="${item.id}">
<img src="${item.image}" alt="img">
<div class="best-p1-txt">
<div class="name-of-p">
<p>
${item.name}
</p>
</div>
${generateStarRating(item.rating)}
<div class="price">
₹${item.price}
</div>
</div>

<div class="add-cart">
<button class="add-cart-button">
<span>Add To Cart</span>
<div class="cart">
<svg viewBox="0 0 36 26">
<polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
<polyline points="15 13.5 17 15.5 22 10.5"></polyline>
</svg>
</div>
</button>
</div>
</div>
`;
}
html += `
<div class="seller container">
<h2>${category}</h2>
<div class="best-seller">
${items}
</div>
</div>
`;
}
document.getElementById('sellers').innerHTML = html;

// THIS IS THE FIXED PART - use regular function instead of arrow function
document.querySelectorAll(".add-cart button").forEach(function(button) {
button.addEventListener("click", function(e) {
console.log(e);
if (!this.classList.contains("loading")) {
this.classList.add("loading");
setTimeout(() => this.classList.remove("loading"), 3400);
}

// 'this' now correctly refers to the button
const parentElement = this.closest('.best-p1');

// Check if the parent element exists
if (parentElement) {
const id = parentElement.dataset.id;
addToCart(id);
showCartBtn();
} else {
console.log('No parent element with class "best-p1" found');
}
e.preventDefault();
});
});
}

// Make sure cart is initialized properly
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, qty = 1) {
// First check if the item already exists in the cart
const existingItemIndex = cart.findIndex(item => item.productId === id);

// If item exists, just increment its quantity
if (existingItemIndex !== -1) {
cart[existingItemIndex].quantity += qty;
}
// Otherwise, add as a new item
else {
cart.push({
productId: id,
quantity: qty
});
}
// Don't forget to save to localStorage after modifying the cart
localStorage.setItem('cart', JSON.stringify(cart));
}

function showCartBtn() {
const width = window.innerWidth;
const mobile = 768;
const cartWrap = document.querySelector('.cart-wrap');
const cartCountElements = document.querySelectorAll('.cart-count');

if (width <= mobile) {
cartWrap.style.display = 'flex';
document.querySelector('.cart-nav').style.display = 'none';
cartCountElements.forEach(el => {
el.innerText = cart.reduce((total, item) => total + item.quantity, 0);
});
} else {
cartWrap.style.display = 'none';
document.querySelector('.cart-nav').style.display = 'block';
cartCountElements.forEach(el => {
el.innerText = cart.reduce((total, item) => total + item.quantity, 0);
});
}
}
