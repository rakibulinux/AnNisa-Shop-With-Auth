import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ product, handleRemoveItem }) => {
  const { name, _id, price, quantity, img, shipping } = product;
  return (
    <div className="ReviewItem">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="ReviewItem-details-container">
        <div className="ReviewItem-details">
          <h3>{name}</h3>
          <p>Price: ${price}</p>
          <p>Shipping Charge: ${shipping}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="ReviewItem-btn">
          <button onClick={() => handleRemoveItem(_id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
