import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const prices = document.querySelectorAll(".price");
  for (let price of prices) {
    if (price.classList.contains("hot")) {
      price.textContent += "🔥";
    }
  }
});
