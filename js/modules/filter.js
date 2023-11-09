import showElems from "../functions/showElems";
import hideElems from "../functions/hideElems";

const Filter = () => {
  const filter = () => {
    const input = document.querySelector("input");

    input.addEventListener("input", () => {
      const filter = input.value.toLowerCase(),
        filteredProducts = document.querySelectorAll(".title");

      filteredProducts.forEach((item) => {
        if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
          showElems(item.closest(".tile"));
        } else {
          hideElems(item.closest(".tile"));
        }
      });
    });
  };

  filter();
};

export default Filter;
