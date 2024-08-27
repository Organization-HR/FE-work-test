document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      displayProducts(data);
    })
    .catch((error) => {
      console.error("호출 실패");
    });
});

function displayProducts(products) {
  const itemsContainer = document.querySelector(".items-container");

  products.forEach((product) => {
    const itemBox = `
            <div class="item-box">
              <div class="image-wrapper">
                <img class="item-image" src="${product.image.desktop}" alt="${
      product.name
    }">
                <button class="add-to-cart">Add to Cart</button>
              </div>
              <div class="item-info-box">
                <p class="item-title">${product.name}</p>
                <p class="item-explain">${product.category}</p>
                <p class="item-money">$${product.price.toFixed(2)}</p>
              </div>
            </div>
          `;

    itemsContainer.insertAdjacentHTML("beforeend", itemBox);
  });

  attachAddToCartEvent();
}

function attachAddToCartEvent() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      let count = 1;
      const itemBox = button.closest(".item-box");
      const product = itemBox.querySelector(".item-title").textContent;
      const price = parseFloat(
        itemBox.querySelector(".item-money").textContent.replace("$", "")
      );

      const changeButton = document.createElement("div");
      changeButton.className = "added-to-cart";
      changeButton.innerHTML = `
              <img src="./assets/images/icon-decrement-quantity.svg" class="decrement" />
              <span>${count}</span>
              <img src="./assets/images/icon-increment-quantity.svg" class="increment" />
            `;

      button.replaceWith(changeButton);

      const decrementButton = changeButton.querySelector(".decrement");
      const incrementButton = changeButton.querySelector(".increment");
      const quantitySpan = changeButton.querySelector("span");

      updateCart(product, price, count);

      decrementButton.addEventListener("click", function () {
        count--;
        if (count <= 0) {
          replaceWithAddToCart(changeButton, itemBox);
          removeFromCart(product);
        } else {
          quantitySpan.textContent = count;
          updateCart(product, price, count);
        }
      });

      incrementButton.addEventListener("click", function () {
        count++;
        quantitySpan.textContent = count;
        updateCart(product, price, count);
      });
    });
  });
}

function updateCart(product, price, count) {
  const cartList = document.querySelector(".cart-list");
  const existingCartItem = cartList.querySelector(
    `[data-product="${product}"]`
  );

  if (existingCartItem) {
    existingCartItem.querySelector(
      ".cart-item-quantity"
    ).textContent = `${count}x`;
    existingCartItem.querySelector(".cart-item-total").textContent = `$${(
      price * count
    ).toFixed(2)}`;
  } else {
    const cartItem = `
            <li class="cart-item" data-product="${product}">
              <div class="cart-item-info">
                <p>${product}</p>
                <p>
                  <span class="cart-item-quantity">${count}x</span>&nbsp;&nbsp;&nbsp;<span>@</span>
                  <span>$${price.toFixed(2)}</span>
                  <span class="cart-item-total">$${(price * count).toFixed(
                    2
                  )}</span>
                </p>
              </div>
              <button class="remove-item"></button>
            </li>
          `;
    cartList.insertAdjacentHTML("beforeend", cartItem);
    attachRemoveItemEvent();
  }
}

function removeFromCart(product) {
  const cartList = document.querySelector(".cart-list");
  const cartItem = cartList.querySelector(`[data-product="${product}"]`);

  if (cartItem) {
    cartItem.remove();
  }

  // Add to Cart 버튼으로 대체
  const itemBox = Array.from(document.querySelectorAll(".item-box")).find(
    (box) => box.querySelector(".item-title").textContent === product
  );

  if (itemBox) {
    const changeButton = itemBox.querySelector(".added-to-cart");
    replaceWithAddToCart(changeButton, itemBox);
  }
}

function attachRemoveItemEvent() {
  const removeButtons = document.querySelectorAll(".remove-item");

  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cartItem = button.closest(".cart-item");
      const product = cartItem.getAttribute("data-product");

      removeFromCart(product);
    });
  });
}

function replaceWithAddToCart(changeButton, itemBox) {
  const newAddToCartButton = document.createElement("button");
  newAddToCartButton.className = "add-to-cart";
  newAddToCartButton.textContent = "Add to Cart";
  changeButton.replaceWith(newAddToCartButton);
  attachAddToCartEvent();
}
