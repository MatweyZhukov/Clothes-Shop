const getProducts = async (url) => {
  const res = await fetch(url);

  if (!res) {
    throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export default getProducts;
