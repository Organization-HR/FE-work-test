import data from "./data.js";
import useStateHook from "./hooks.js";

const { useState } = useStateHook(render);
let shoppingCart = [];
const cardContainer = document.getElementById("card");
const [dessertList, setDessertList] = useState({});
function displayCards(data) {
  function getImageUrl(image) {
    const width = window.innerWidth;

    if (width < 600) {
      return image.mobile; // 모바일 화면
    } else if (width < 1024) {
      return image.tablet; // 태블릿 화면
    } else {
      return image.desktop; // 데스크탑 화면
    }
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    const url = getImageUrl(item.image);

    // Add content to the card
    card.innerHTML = `
    <div>
      <div class="thumbnail-image" >
        <img src=${item.image.desktop}></img>
      </div>
      <button class="add-to-cart-btn" ><img src="./assets/images/icon-add-to-cart.svg"/>Add to Cart</button>
      <div class="item-detail">
        <p>${item.category}</p>
        <h4>${item.name}</h4>
        <p>${"$" + item.price}</p>
      </div>
      
    </div>
        `;

    cardContainer.appendChild(card);
    const button = card.querySelector(".add-to-cart-btn");
    button.addEventListener("mousedown", onBtnHover(item));
  });
}

function render() {
  const $shoppingcart = document.querySelector("#shoppingcart-content");

  $shoppingcart.innerHTML = `
  
    ${dessertList[0]
      .map((item) => {
        return `<div class="cart-dessert"><div class="cart-dessert-title">${
          item.name
        }</div>
          <div class="cart-dessert-detail">
            <span class="count">${item.count}x</span>
            <span class="price"><span class="each-price">${"@ "}</span>${
          "$" + item.price
        }</span>
            <span class="total-price">${"$" + item.price * item.count}</span>
          </div>
        </div>`;
      })
      .join("")}
      <div class="bottom-container">
        <div class="price-total"><div>Order Total</div><span>${calculateTotalPrice()}</span></div>
        <div class="notify"><img src='./assets/images/icon-carbon-neutral.svg'/> This is a <span> carbon-neutral </span> delivery</div>
        <button class="modal_btn">Confirm Order</button>
      </div>
  
  `;

  const modal = document.querySelector(".modal");
  const modalOpen = document.querySelector(".modal_btn");
  const modalClose = document.querySelector(".close_btn");
  const background = document.querySelector("body");

  // 모달팝업 on/off
  modalOpen.addEventListener("click", () => onModalOpen(modal, background));
  modalClose.addEventListener("click", () => onModalClose(modal));
}

function onModalClose(modal) {
  modal.classList.remove("on");
  background.classList.remove("modal-on");
  setDessertList({});
}
function onModalOpen(modal, background) {
  modal.classList.add("on");
  background.classList.add("modal-on");

  const shoppingList = document.querySelector(".shopping-list");
  // const list = document.createElement("div");
  // list.className = "list-item";
  dessertList[0].forEach((item) => {
    const listItem = document.createElement("div");

    listItem.className = "item";
    listItem.innerHTML = `
      <div class="confirm-item">
        <img src=${item.image.thumbnail}></img>
        <div>
          <div>${item.name}</div>
          <div>
            <span>${item.count + "x"}</span><span>${"@" + item.price}</span>
          </div>
        </div>
        <div>${item.count * item.price}</div>
      </div>
    `;

    shoppingList.appendChild(listItem);
  });
  const orderTotal = document.createElement("div");
  orderTotal.className = "order-total";
  orderTotal.innerHTML = `
  <div><span>Order Total</span><span>${calculateTotalPrice()}</span></div>
`;
  shoppingList.appendChild(orderTotal);
}

function calculateTotalPrice() {
  let sum = 0;
  shoppingCart.map((item) => {
    sum += item.count * item.price;
  });
  return "$" + sum.toFixed(2);
}

function onBtnHover(item) {
  return function (event) {
    // const [dessertList, setDessertList] = useState({});
    const button = event.target;
    // item.count = item.count ? item.count + 1 : 1;

    if (!item.count) {
      item.count = 1;
      button.classList.add("clicked");
      button.innerHTML = `
      <div  id="quantity-btn">
        <button class="quantity-btn decrement">-</button>
        <span class="quantity-display">${item.count}</span>
        <button class="quantity-btn increment">+</button>
      </div>
    `;
      const incrementBtn = button.querySelector(".increment");
      const decrementBtn = button.querySelector(".decrement");
      const quantityDisplay = button.querySelector(".quantity-display");
      incrementBtn.addEventListener("click", () => {
        item.count += 1;
        setDessertList(shoppingCart);
        quantityDisplay.textContent = item.count;
        // setDessertList(shoppingCart);
      });

      decrementBtn.addEventListener("click", () => {
        if (item.count > 1) {
          item.count -= 1;
          setDessertList(shoppingCart);
          quantityDisplay.textContent = item.count;
          return;
        }
        // item count == 0 && remove from shopping cart
        if (item.count == 1) {
          let index = shoppingCart.indexOf(item);
          delete item.count;
          shoppingCart.splice(index, 1);
          setDessertList(shoppingCart);
          button.classList.remove("clicked");
          button.innerHTML = `<img src="./assets/images/icon-add-to-cart.svg"/>Add to Cart`;
        }
      });

      shoppingCart.push(item);
    } else {
      //   item.count = item.count + 1;
    }
    setDessertList(shoppingCart);
  };
}

displayCards(data);
