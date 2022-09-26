import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  {
    cart.map((car) => console.log(car));
  }
  return (
    <div>
      <h1>Order Summary</h1>
      <p>Selected items: {cart.length}</p>
      <p>Total Price: {cart.price}</p>
      <p>Total Shipping Charge: {cart.shipping}</p>
      <p>Tax: {cart.length}</p>
      <p>Grand Total: {cart.length}</p>
    </div>
  );
};

export default Cart;
