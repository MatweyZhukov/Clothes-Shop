const showElems = (elem) => {
  if (elem) {
    elem.style.display = "block";

    setTimeout(() => {
      elem.style.opacity = 1;
    });
  }
};

export default showElems;
