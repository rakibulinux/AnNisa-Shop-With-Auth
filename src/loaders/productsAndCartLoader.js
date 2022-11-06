import { getStoredCart } from "../utilities/fakedb";

export const productsAddCartLoader = async () => {
  //Get products

  const productsData = await fetch(
    "https://annisa-shop-server.vercel.app/products"
  );
  const { products } = await productsData.json();
  console.log(products);
  // get cart
  const savedCart = getStoredCart();

  const initialCart = [];

  for (const id in savedCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }
  return { products: products, initialCart: initialCart };
};
