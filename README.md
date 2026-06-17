# Ecommerce - Rahul Gupta

An ecommerce frontend project built with HTML, CSS, and JavaScript.

## Features

- Product listing and search
- Shopping cart management
- Checkout flow
- Image slideshow

## Tech Stack

| Layer       | Technology  |
|-------------|-------------|
| Markup      | HTML5       |
| Styling     | CSS3        |
| Logic       | Vanilla JavaScript (ES6+) |

## Architecture

The project follows a modular JavaScript pattern with separate modules for each core feature:

| Module       | File              | Responsibility                          |
|--------------|-------------------|-----------------------------------------|
| Products     | `scripts/products.js` | Product data, rendering, and filtering |
| Cart         | `scripts/cart.js` | Cart state management and UI updates     |
| Checkout     | `scripts/checkout.js` | Order processing and form validation  |
| Search       | `scripts/search.js` | Real-time product search                |
| Slideshow    | `scripts/slideshow.js` | Image carousel/slider logic          |
| Main         | `scripts/main.js` | App initialization and coordination      |

Styles are also modularized per feature area under `styles/`.

## Project Structure

```
├── assets/img/           # Image assets
├── scripts/              # JavaScript modules
├── styles/               # CSS stylesheets
├── cart.html             # Cart page
├── index.html            # Landing page
└── README.md
```

## Getting Started

Open `index.html` in any modern browser to launch the application.

---

**Author:** Rahul Gupta