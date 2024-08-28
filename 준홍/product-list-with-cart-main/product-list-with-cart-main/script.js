// 데이터 호출
document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      displayProducts(data);
    })
    .catch((error) => {
      console.error("호출 실패", error);
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
          <div class="add-to-cart">
            <img src="./assets/images/icon-add-to-cart.svg" alt="add-to-cart" class="add-to-cart-image"/>
            <span class="add-to-cart-message">Add to Cart</span>
          </div>
          <div class="added-to-cart" style="display: none;">
            <img src="./assets/images/icon-decrement-quantity.svg" class="decrement" />
            <span>1</span>
            <img src="./assets/images/icon-increment-quantity.svg" class="increment" />
          </div>
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
      const changeButton = itemBox.querySelector(".added-to-cart");

      // 버튼을 토글 (숨김/표시)
      button.style.display = "none";
      changeButton.style.display = "flex";

      const decrementButton = changeButton.querySelector(".decrement");
      const incrementButton = changeButton.querySelector(".increment");
      const countSpan = changeButton.querySelector("span");

      updateCart(product, price, count);
      updateButton();

      decrementButton.addEventListener("click", function () {
        count--;
        if (count <= 0) {
          toggleToAddToCart(changeButton);
          removeFromCart(product);
        } else {
          countSpan.textContent = count;
          updateCart(product, price, count);
        }
        updateButton();
      });

      incrementButton.addEventListener("click", function () {
        count++;
        countSpan.textContent = count;
        updateCart(product, price, count);
        updateButton();
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
            <span class="cart-item-total">$${(price * count).toFixed(2)}</span>
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

  const itemBox = Array.from(document.querySelectorAll(".item-box")).find(
    (box) => box.querySelector(".item-title").textContent === product
  );

  if (itemBox) {
    const changeButton = itemBox.querySelector(".added-to-cart");
    toggleToAddToCart(changeButton);

    // 수량을 초기화하여 '1'로 설정
    const countSpan = changeButton.querySelector("span");
    countSpan.textContent = "1";

    // data-count 속성이나 다른 상태를 초기화
    changeButton.setAttribute("data-count", "1");
    updateButton();
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

function toggleToAddToCart(changeButton) {
  changeButton.style.display = "none";
  changeButton.previousElementSibling.style.display = "flex";
}

function calculateCount() {
  let totalCount = 0;
  const allCountHTML = document.querySelectorAll(".cart-item-quantity");
  const myCartCount = document.querySelector(".cart-list-size");

  allCountHTML.forEach((countElement) => {
    const countValue = parseInt(countElement.textContent.slice(0, -1));
    if (!isNaN(countValue)) {
      totalCount += countValue;
    }
  });

  myCartCount.innerHTML = totalCount;
  calculateTotalPrice();

  return totalCount;
}

function calculateTotalPrice() {
  const itemPriceTag = document.querySelectorAll(".cart-item-total");
  let orderTotal = document.querySelector(".total-price-wrapper :last-child");
  let totalPrice = 0;

  itemPriceTag.forEach((items) => {
    totalPrice += parseFloat(items.textContent.slice(1));
  });

  orderTotal.innerHTML = "$" + totalPrice.toFixed(2);

  return totalPrice;
}

function updateButton() {
  const listContainer = document.querySelector(".right-container");
  let confirmButton = listContainer.querySelector(".confirm-button");
  let emptyList = listContainer.querySelector(".empty-list");
  let carbonTag = listContainer.querySelector(".carbon-neutral-wrapper");
  let totalPrice = listContainer.querySelector(".total-price-wrapper");

  if (calculateCount() > 0) {
    totalPrice.style.display = "flex";
    carbonTag.style.display = "flex";
    emptyList.style.display = "none";
    confirmButton.style.display = "block";
  } else {
    totalPrice.style.display = "none";
    carbonTag.style.display = "none";
    emptyList.style.display = "flex";
    confirmButton.style.display = "none";
  }
}
