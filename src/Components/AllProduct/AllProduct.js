import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProduct = (props) => {
    const {setCartCount}=props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data) => setProducts(data));
    }, []);
    console.log(products);
    return (
        <div className="">
            <h1> All Products</h1>
            <div className="row container"> 
{
    products.map((pd) => (
        <SingleProduct setCartCount={setCartCount} key={pd.id} products={pd}> </SingleProduct>
    ))
}
</div>   
        </div>
    );
};

export default AllProduct;