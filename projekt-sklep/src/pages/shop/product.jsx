import React, {useContext} from "react";
import { ShopContext } from "../../context/shopContext.jsx";

const Product = (props) => {
    const {id , productName , price , productImage } = props.data;
    const { addToCart , cartItems } = useContext(ShopContext)
    return (
        <div className="product">
            <img src={productImage} alt={productName}/>
            <div className="product-info">
                <p className="product-name">{productName}</p>
                <p>{price} zł</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Dodaj do koszyka! {cartItems[id] ? `(${cartItems[id]})` : null}
            </button>
        </div>
    )
};

export default Product;
//39.36