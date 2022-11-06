import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

/* 
counbt: loaded
perPage: 10
pages: count/perPage
page: 
*/

const Shop = () => {
  // const { products, count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const url = `https://annisa-shop-server.vercel.app/products?page=${page}&size=${size}`;
    console.log(url, page, size);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const ids = Object.keys(storedCart);
    console.log(ids);
    fetch("https://annisa-shop-server.vercel.app/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    // console.log(product);
    let newCart;
    const exsist = cart.find((product) => product._id === selectedProduct._id);
    if (!exsist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exsist.quantity = exsist.quantity + 1;
      newCart = [...rest, exsist];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="Shop">
      {/* <AwaitTry></AwaitTry> */}
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/order">
            <button className="review-btn">
              <span>Review Order</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        <div className="page-size">
          <p>Page number: {page}</p>
          <p>Size number: {size}</p>
        </div>
        <div>
          {[...Array(pages).keys()].map((number) => (
            <button
              onClick={() => setPage(number)}
              className={page === number && "selected"}
              key={number}
            >
              {number + 1}
            </button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Shop;
