import {generateStarRating} from './checkout.js'
let carts = JSON.parse(localStorage.getItem('cart'));

let totalPrice = 0;
let totalQty = 0;
export function renderCart(products) {
// 1. First check if the cart element exists
const cartBody = document.querySelector('.carts');

// If the element doesn't exist, log an error and return early
if (!cartBody) {
console.error("Could not find element with class 'cartBody'");
return;
}

// 2. Check if we have valid cart items to render
if (!Array.isArray(carts) || carts.length === 0) {
cartBody.innerHTML = `Your cart is empty`;
return;
}

// 3. Clear existing content before adding new items
cartBody.innerHTML = '';

// 4. Fixed nested loops - the original loop structure had issues
carts.forEach((cartItem) => {
// Iterate over product categories
for (let category in products) {
// Iterate over products in each category
for (let product of products[category]) {
if (cartItem.productId === product.id) {
// Build the HTML string and append it
totalPrice += product.price;
totalQty += cartItem.quantity;
cartBody.innerHTML += `
<div class="card">
<div class="card-img">
<img src="${product.image}">
</div>
<div class="card-content">
<div class="card-title">
${product.name}
</div>
<div class="card-rating">
${generateStarRating (product.rating)}
</div>
<div class="card-pricing">
<span class="price">${formatMoney(product.price)}</span>
<span class="card-mrp">MRP ${formatMoney(product.mrp)}</span>
<span class="card-save">(Save ₹${product.mrp - product.price})</span>
</div>
<div class="card-qty">
Qty.: ${cartItem.quantity}
</div>
<div class="card-delivery">
Standard Delivery by 12 May 2025 | Free
</div>
</div>
</div>
`;
}
}
}
});
renderOrderSummary();
}

function renderOrderSummary(){
document.querySelector('.order-summary-table').innerHTML = `
<thead>
<tr>
<th colspan="2">Order Summary <span style="font-size:0.9em;font-weight:400;">(${totalQty} items)</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>Total (including Tax)</td>
<td>${formatMoney(totalPrice)}</td>
</tr>
<tr>
<td colspan="2">
<button>
checkout
</button>
</td>
</tr>
</tbody>
`;
}

function formatMoney(num){
return '₹' + num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
// function getCartQtyCount(products) {
//   try {
//     let qty = 0;
//     // Make sure carts is always an array
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
//     const cartCountElements = document.querySelectorAll('.cart-count');
//   cartCountElements.forEach(el => {
//     el.innerText = cart.reduce((total, item) => total + item.quantity, 0);
//   });
//     return qty;
//   } catch (e) {
//     console.error(e);
//     return '0'; // Return a string zero instead of error message
//   }
// }