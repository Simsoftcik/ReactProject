import React, {useContext} from "react";
import { ShopContext } from "../../context/shopContext.jsx";
import {Link} from "react-router-dom";
import "./product.css";

const Product = (props) => {
    const {id , productName , price , productImage } = props.data;
    const { addToCart , cartItems } = useContext(ShopContext)
    return (
        <div className="product">
            <Link key={id} to={`/products/${id}`}>
                <img src={productImage} alt={productName}/>
                <div className="product-info">
                    <p className="product-name">{productName}</p>
                    <p>{price} zł</p>
                </div>
            </Link>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>
                    Dodaj do koszyka! {cartItems[id] ? `(${cartItems[id]})` : null}
                </button>


        </div>
    )
};

export default Product;
