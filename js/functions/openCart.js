const openCart = (cart, cartContent) => {
  cart.style.opacity = 1;
  cart.style.pointerEvents = "all";
  document.body.style.overflow = "hidden";
  cartContent.style.cssText = "transform: scale(1)";
};

export default openCart;
