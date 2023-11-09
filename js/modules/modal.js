import openCart from "../functions/openCart";

const Modal = () => {
  const cart = document.querySelector(".cart"),
    cartContent = document.querySelector(".cart_content"),
    closeModalBtn = document.querySelector(".close_modal img"),
    openInModal = document.querySelector(".open_modal"),
    modal = document.querySelector(".modal");

  const openModal = () => {
    setTimeout(() => {
      modal.style.cssText = `
			right: 15px;
			bottom: 15px;
			opacity: 1;
		`;
    }, 5000);
  };

  const closeModal = () => {
    modal.style.cssText = `
		right: -430px;
		bottom: 15px;
		opacity: 0;
	`;
  };

  openModal();

  openInModal.addEventListener("click", () => {
    openCart(cart, cartContent);
    closeModal();
  });

  closeModalBtn.addEventListener("click", closeModal);
};

export default Modal;
