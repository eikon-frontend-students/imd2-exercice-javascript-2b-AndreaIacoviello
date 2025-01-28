document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".product-addtocart");
  const confirmationBox = document.querySelector(".confirmation");

  const showConfirmation = () => {
    confirmationBox.classList.add("is-active");

    setTimeout(() => {
      confirmationBox.classList.remove("is-active");
    }, 3000);
  };

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showConfirmation();
    });
  });
});
