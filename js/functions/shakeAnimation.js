const shakeAnimation = (item) => {
  item.classList.add("shake");

  setTimeout(() => {
    item.classList.remove("shake");
  }, 600);
};

export default shakeAnimation;
