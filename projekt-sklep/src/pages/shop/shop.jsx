import React from 'react';
import {PRODUCTS} from "../../dummy/dummyProducts.js";
import Product from "./product.jsx";
import "./shop.css"

const Shop = () => {
    return (
        <div className="shop">
            <div className="products">
                {PRODUCTS.map((product) => <Product data={product}/>)}
            </div>
        </div>
    );
}

export default Shop;