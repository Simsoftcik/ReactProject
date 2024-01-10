import React from 'react';
import {PRODUCTS} from "../../dummy/dummyProducts.js";
import './styleOfProduct.css';

const Product1 = () => {
    // Używamy pierwszego produktu z tablicy PRODUCTS
    const product = PRODUCTS[0];

    return (
        <div className="product1">
            <div className="product1-info">
                <div className="product1-details">
                    <h2>{product.productName}</h2>
                    <img src={product.productImage} alt={product.productName}/>
                </div>
                <div className="product1-pricing">
                    <p className="price1">Cena: ${product.price.toFixed(2)}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};


export default Product1;
