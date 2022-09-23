import React from 'react';
import Modal from '../Modal/Modal';
import './SingleGun.css'
const SingleGun = (props) => {
    // console.log(props);
    const {gun, countIncrease} = props
    // console.log(props);
    const {action, name, img} = gun;
    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-64 w-full rounded-lg" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge border-none bg-purple-300 text-purple-900">{action}</div>
                    </h2>
                    <div className="card-actions justify-start">
                    <div className=""><button onClick={() => countIncrease()} className="btn btn-accent">Add to cart</button></div> 
                    <Modal gun={gun}></Modal>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;