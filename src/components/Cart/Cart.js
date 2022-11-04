import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  let id = [];
  console.log(id);

  for (const product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
    id.push(product._id);
  }
  const taxString = (price * 0.1).toFixed(2);
  const tax = parseFloat(taxString);
  let grandTotal = price + shipping + tax;
  return (
    <div className="Cart">
      <h2>Order Summary</h2>
      <div className="order-info">
        <p>Selected items: {quantity}</p>
        <p>Total Price: ${price}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h5>Grand Total: ${grandTotal}</h5>
      </div>
      <button onClick={() => clearCart(id)} className="clear-btn">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
