const productList = document.getElementById("product-list");
const cartQuantity = document.getElementById("cart-quantity");
const cartItems = document.getElementById("cart-items");
const orderButton = document.getElementById("order-button");
const orderModal = document.getElementById("order-modal");
const closeModal = document.getElementsByClassName("close")[0];
let cart = [];

// Parse JSON data from script tag
const products = JSON.parse(document.getElementById("data-json").textContent);
products.forEach((product) => {
  let productQuantity = 0;
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  const buttonDiv = document.createElement("div");

  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.name === product.name);
  if (existingProduct) {
    productQuantity = existingProduct.quantity;
  }

  const button = new CartButton(
    "Add to Cart",
    () => {
      addToCart(product.name, product.price, productQuantity);
    },
    () => {
      minusCart(product.name, productQuantity);
    },
    productQuantity
  );

  buttonDiv.appendChild(button.render());
  productDiv.innerHTML = `
          <img src="${product.image.thumbnail}" alt="${product.name}">
          <div class="category">${product.category}</div>
          <div class="name">${product.name}</div>
          <div class="price">$${product.price.toFixed(2)}</div>
        `;
  productDiv.appendChild(buttonDiv);
  productList.appendChild(productDiv);
});

function addToCart(name, price, productQuantity) {
  const existingProduct = cart.find((item) => item.name === name);
  if (existingProduct) {
    existingProduct.quantity += 1;
    productQuantity = existingProduct.quantity;
  } else {
    cart.push({ name, price, quantity: 1 });
    productQuantity = 1;
    cartQuantity.textContent = cart.length;
    const cartItem = document.createElement("div");

    cartItem.textContent = `${name} - $${price.toFixed(2)} x 1`;
    cartItems.appendChild(cartItem);
  }
  updateCartDisplay();
  // Update button text
  //button.setText(`Add More (${productQuantity})`);
}

function minusCart(name) {
  const existingProduct = cart.find((item) => item.name === name);
  if (existingProduct) {
    existingProduct.quantity -= 1;

    if (existingProduct.quantity < 1) {
      cart = cart.filter((item) => item.name !== name);
      existingProduct.quantity = 0;
    }
    cartQuantity.textContent = cart.length; // Update cart quantity here
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    if (item.quantity < 1) {
      return; // Skip items with quantity less than 1
    }

    const cartItem = document.createElement("div");
    const removeButton = document.createElement("button");

    removeButton.textContent = `x`;
    removeButton.addEventListener("click", () => {
      item.quantity = 0;
      minusCart(item.name);
    });

    cartItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${
      item.quantity
    }`;
    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);
  });

  // Show or hide the order button based on cart quantity
  if (cart.length > 0) {
    orderButton.style.display = "block";
  } else {
    orderButton.style.display = "none";
  }
}

// Event listener for order button
orderButton.addEventListener("click", () => {
  orderModal.style.display = "block";
});

// Event listener for close button on modal
closeModal.addEventListener("click", () => {
  orderModal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target == orderModal) {
    orderModal.style.display = "none";
  }
});
