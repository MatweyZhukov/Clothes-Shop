import getProducts from "../services/services";
import shakeAnimation from "../functions/shakeAnimation";

const Products = () => {
  class Product {
    constructor(id, title, price, currency, image, ...classes) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.currency = currency;
      this.image = image;
      this.classes = classes;
    }

    render() {
      const element = document.createElement("div");
      element.classList.add("tile");
      element.setAttribute("data-id", this.id);

      element.addEventListener("click", () => {
        shakeAnimation(element);
      });

      element.innerHTML = `
				<img data-add src="${this.image}">
				<div class="title_price">
					<p class="title">${this.title}</p>
					<p class="price"><span data-current-price>${this.price}</span> ${this.currency}</p>
				</div>
			 `;

      document.querySelector(".block_tiles").append(element);
    }
  }

  getProducts("http://localhost:3000/products")
    .then((data) => {
      data.forEach(({ id, title, price, currency, image }) => {
        new Product(id, title, price, currency, image).render();
      });
    })
    .catch((err) => console.log(err));
};

export default Products;
