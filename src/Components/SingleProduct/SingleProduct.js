import React from 'react';
import './SingleProduct.css';
const SingleProduct = (props) => {
    console.log(props);
    return (
        <div>
            {/* <h2>Single prodicts</h2> */}

                <div className="col-md-4">
                    <div className="card p-2 border">
                <h1>{props.products.title.slice(0,10)} </h1>

                </div>
                </div>


        </div>
    );
};

export default SingleProduct;