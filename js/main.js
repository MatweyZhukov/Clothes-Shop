import Filter from "./modules/filter";
import Products from "./modules/products";
import Cart from "./modules/cart";
import Modal from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  Cart();
  Modal();
  Filter();
  Products();
});
