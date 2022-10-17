import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import "./Cart.css";

const Cart = ({ cart, clearCart }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  let id = [];
  console.log(id);

  // const removeFromCart = (ids) => {
  //   console.log(ids);
  //   for (const id of ids) {
  //     console.log(id);
  //     removeFromDb(id);
  //   }
  // };

  //   removeFromCart(id);
  for (const product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
    id.push(product.id);
  }
  const taxString = (price * 0.1).toFixed(2);
  const tax = parseFloat(taxString);
  let grandTotal = price + shipping + tax;
  return (
    <div className="Cart">
      <h2>Order Summary</h2>
      <p>Selected items: {quantity}</p>
      <p>Total Price: ${price}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
      <button onClick={() => clearCart(id)} className="clear-btn">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <Link to="/order">
        <button className="review-btn">
          <span>Review Order</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Link>
    </div>
  );
};

export default Cart;
