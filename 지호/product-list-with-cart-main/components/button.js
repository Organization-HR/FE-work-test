class CartButton {
  constructor(label, addClick, minusClick, quantity) {
    this.label = label;
    this.addClick = () => {
      addClick();
      this.handleAddClick();
    };
    this.minusClick = () => {
      minusClick();
      this.handleMinusClick();
    };
    this.quantity = quantity; // Initialize quantity
  }

  handleAddClick() {
    this.quantity++;
    this.updateQuantityElement();
  }

  handleMinusClick() {
    if (this.quantity > 0) {
      this.quantity--;
      this.updateQuantityElement();
    }
  }

  updateQuantityElement() {
    if (this.quantityElement) {
      this.quantityElement.textContent = this.quantity;
    }
    if (this.buttonElement) {
      if (this.quantity > 0) {
        this.buttonElement.style.display = "none";
        this.incrementButton.style.display = "inline-block";
        this.decrementButton.style.display = "inline-block";
        this.quantityElement.style.display = "inline-block";
      } else {
        this.buttonElement.style.display = "inline-block";
        this.buttonElement.textContent = `₩${this.label} ${this.quantity}`;
        this.incrementButton.style.display = "none";
        this.decrementButton.style.display = "none";
        this.quantityElement.style.display = "none";
      }
    }
  }

  render() {
    const container = document.createElement("div");

    const button = document.createElement("button");
    button.textContent = `₩${this.label} ${this.quantity}`;
    button.classList.add("main-button");
    button.addEventListener("click", this.addClick);
    this.buttonElement = button;

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.classList.add("quantity-button");
    decrementButton.addEventListener("click", this.minusClick);
    this.decrementButton = decrementButton;

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.classList.add("quantity-button");
    incrementButton.addEventListener("click", this.addClick);
    this.incrementButton = incrementButton;

    this.quantityElement = document.createElement("span");
    this.quantityElement.textContent = this.quantity;

    container.appendChild(decrementButton);
    container.appendChild(this.quantityElement);
    container.appendChild(incrementButton);
    container.appendChild(button);

    this.updateQuantityElement(); // Initial update to set the correct visibility

    return container;
  }

  setText(newText) {
    if (this.buttonElement) {
      this.buttonElement.textContent = newText;
    }
  }
}
