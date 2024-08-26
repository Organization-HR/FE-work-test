class CartButton {
  constructor(label, onClick) {
    this.label = label;
    this.onClick = onClick;
  }

  render() {
    const button = document.createElement("button");
    button.textContent = this.label;
    button.addEventListener("click", this.onClick);
    this.buttonElement = button; // Store the button element
    return button;
  }

  setText(newText) {
    if (this.buttonElement) {
      this.buttonElement.textContent = newText;
    }
  }
}
