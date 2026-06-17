import { fetchProducts } from './products.js';
import { renderCart } from './cart.js';

async function init(){
  const products = await fetchProducts();
  renderCart(products);
}

init()

export function generateStarRating(rating) {
  // Clamp rating between 0 and 5
  rating = Math.max(0, Math.min(5, rating));
  let starsHtml = '<div class="rating">';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHtml += "<i class='bx bxs-star'></i>"; // filled star
    } else {
      starsHtml += "<i class='bx bx-star'></i>"; // empty star
    }
  }
  starsHtml += '</div>';
  return starsHtml;
}

// Example usage:
console.log(generateStarRating(3));