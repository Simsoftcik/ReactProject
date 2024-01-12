import React, {useContext} from 'react';
import {PRODUCTS} from "../../dummy/dummyProducts.js";
import { ShopContext } from "../../context/shopContext.jsx";
import './product-page.css';
import {useParams} from "react-router-dom";

const ProductPage = () => {

    const { id } = useParams();
    const product = PRODUCTS[id];
    const { addToCart , cartItems , removeFromCart , removeCompletelyFromCart  } = useContext(ShopContext)

    return (
        <div className="p-box">
            <div className="p-info">
                <div className="p-left-details">
                    <h2>{product.productName}</h2>
                    <img src={product.productImage} alt={product.productName}/>
                </div>
                <div className="p-pricing">
                    <div className="p-right-details">
                        <p className="p-price">Cena: ${product.price.toFixed(2)}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="p-bttn-section">
                        <button className="p-addToCartBttn" onClick={() => addToCart(id)}>
                            Dodaj do koszyka! {cartItems[id] ? `(${cartItems[id]})` : null}
                        </button>
                        <button className="p-removeOneFromCartBttn" onClick={() => removeFromCart(id)}>
                            Usuń z koszyka jedną sztuke! {cartItems[id] ? `(${cartItems[id]})` : null}
                        </button>
                        <button className="p-removeCompletlyFromCartBttn" onClick={() => removeCompletelyFromCart(id)}>
                            Usuń z koszyka wszystkie sztuki! {cartItems[id] ? `(${cartItems[id]})` : null}
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};


export default ProductPage;
