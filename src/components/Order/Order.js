import React from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1>I Am from Order {products.length}</h1>
    </div>
  );
};

export default Order;
