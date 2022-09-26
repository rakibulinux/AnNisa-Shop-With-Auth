import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { name, img, seller, ratings, price } = product;
  return (
    <div className="Product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Price: ${price}</p>
        <p className="product-manu">Manufacturer: {seller}</p>
        <p className="product-rating">Rating: {ratings} stars</p>
      </div>
      <div>
        <button onClick={() => handleAddToCart(product)} className="btn-cart">
          <p>Add to Cart</p>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default Product;
