import React from 'react';
import Modals from '../Modals/Modals';

import './SingleProduct.css';
const SingleProduct = (props) => {
    console.log(props);
    const {setCartCount}=props;
    return (    <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
    className="col-md-4">
                    <div className="card p-2 border">
                        <img className='w-50 m-auto ' src={props.products.image} alt="" />
                <h1>{props.products.title.slice(0,10)} </h1>
                <div className='d-flex justify-content-around'> 
                <button onClick={setCartCount} className='btn btn-success'> Add to Cart </button>
                <button className='btn btn-danger'> Delete </button>
                {/* <button className='btn btn-info'> Details </button> */}
                <Modals products={props.products}></Modals>

                </div>
                </div>
                </div>


      
    );
};

export default SingleProduct;