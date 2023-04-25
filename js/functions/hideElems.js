const hideElems = (elem) => {
  if (elem) {
    elem.style.opacity = 0;

    setTimeout(() => {
      elem.style.display = "none";
    }, 150);
  }
};

export default hideElems;
