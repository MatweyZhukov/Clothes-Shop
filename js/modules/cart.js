import showElems from "../functions/showElems";
import hideElems from "../functions/hideElems";
import openCart from "../functions/openCart";

const Cart = () => {
  const cart = document.querySelector(".cart"),
    cartContent = document.querySelector(".cart_content"),
    close = document.querySelector(".close img"),
    cartWrapper = document.querySelector(".cart_main"),
    headerCart = document.querySelector(".cart_title"),
    open = document.querySelector(".open"),
    empty = document.querySelector(".empty");

  const toggleCartStatus = () => {
    cartWrapper.children.length > 0
      ? (headerCart.textContent = "Ваши товары:")
      : (headerCart.textContent = "Ваша корзина пуста!");

    if (cartWrapper.children.length > 0) {
      headerCart.textContent = "Ваши товары:";
      hideElems(empty);
    } else {
      headerCart.textContent = "Ваша корзина пуста!";
      showElems(empty);
    }
  };

  const closeCart = () => {
    cart.style.opacity = 0;
    cart.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
    cartContent.style.cssText = "transform: scale(0)";
  };

  const addToCart = (e) => {
    const card = e.target.closest(".tile");

    const productInfo = {
      id: card.dataset.id,
      src: card.querySelector("[data-add]").getAttribute("src"),
      title: card.querySelector(".title").textContent,
      price: card.querySelector("[data-current-price]").textContent,
    };

    const { id, src, title, price } = productInfo;

    const itemInCart = cartWrapper.querySelector(`[data-id="${id}"]`);

    if (itemInCart) {
      const counter = itemInCart.querySelector("[data-counter]");
      counter.textContent < 3 ? counter.textContent++ : null;
    } else {
      const element = `
				 <div data-id="${id}" class="added_tile">
					 <div class="block-counter">
						 <p class="counter"><span data-counter>1</span>x</p>
						 <img data-close style="width: 30px;" src="images/remove.png">
					 </div>
					 <img src="${src}">
					 <div class="title_price">
						 <p class="title">${title}</p>
						 <p class="price"><span data-current-price>${price}</span> USD</p>
					 </div>
				 </div>
			  `;

      cartWrapper.insertAdjacentHTML("beforeend", element);
    }
  };

  const removeFromCart = (e) => {
    hideElems(e.target.closest(".added_tile"));

    setTimeout(() => {
      e.target.closest(".added_tile").remove();
      toggleCartStatus();
    }, 150);
  };

  window.addEventListener("click", (e) => {
    //Открытие и закрытие корзины
    e.target === cart || e.target === close
      ? closeCart()
      : e.target === open
      ? openCart(cart, cartContent)
      : null;

    //Добавление товаров в корзину
    if (e.target.hasAttribute("data-add")) {
      addToCart(e);
      toggleCartStatus();
    }

    //Удаление из корзины
    if (e.target.hasAttribute("data-close")) {
      removeFromCart(e);
    }
  });

  //Закрытие по клавише
  window.addEventListener("keydown", (e) => {
    e.key === "Escape" ? closeCart() : null;
  });
};

export default Cart;
