import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from "../../dummy/dummyProducts.js";
import "./shop.css";
import Product from "./product.jsx";

const Shop = () => {
    return (
        <div className="shop">
            <div className="products">
                {PRODUCTS.map((product) => (

                        <Product data={product} key={product.id}/>

                ))}
            </div>
        </div>
    );
};

export default Shop;
