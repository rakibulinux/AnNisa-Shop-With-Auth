import React from "react";
import "./Modal.css";
const Modal = (props) => {
//   console.log(props);
  const {action, bullet, name, img, price} = props.gun
  return (
    <div className="Modal">
      <div className="">
        <label htmlFor="my-modal" className="btn modal-button">
          Details
        </label>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <figure><img className="h-64 w-full rounded-lg" src={img} alt="Shoes" /></figure>
          <h2 className="card-title">
                    {name}
                    <div className="badge border-none bg-purple-300 text-purple-900">{action}</div>
                    </h2>
          <h3 className="text-2xl text-start">Bullet: {bullet}</h3>
          <h3 className="text-2xl text-start">Action: {action}</h3>
          <h3 className="text-2xl text-start">Price: ${price}</h3>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              CLOSE
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
