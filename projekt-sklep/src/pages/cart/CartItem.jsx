import React, {useEffect, useState} from 'react';
import {ShopContext} from "../../context/shopContext.jsx";

const CartItem = (props) => {

    const {id , productName , price , productImage } = props.data;
    const {addToCart , removeFromCart , removeCompletelyFromCart , cartItems , setCartItemCount} = React.useContext(ShopContext);

    const [inputValue, setInputValue] = useState(cartItems[id].toString());

    useEffect(() => {
        setInputValue(cartItems[id].toString());
    } , [cartItems[id]]);

    return (
        <div className="cartItem">
            <img src={productImage}></img>
            <div className="description">
                <p className="product-name">{productName}</p>
                <p className="product-price">{price} zł</p>
                <div className="countHandler">
                    <button className="countHandler-button" onClick={() => removeFromCart(id)}>-</button>

                    {/*<input value={cartItems[id]} onChange={(event) => {setCartItemCount(Number(event.target.value) , id)}}/>*/}

                    <input className= "changer"
                        value={inputValue}
                        onKeyDown={(event) => {
                            if ( event.key === 'Enter' && event.target.value.length > 0) {
                                setCartItemCount(Number(event.target.value) , id)
                            }
                        }}
                        onChange={(event) => {
                            setInputValue(event.target.value); //to new value
                        }}
                        onBlur={(event) => {
                            setInputValue(cartItems[id].toString()); //to default value
                        }}
                    />

                    <button className="countHandler-button" onClick={() => {addToCart(id)}}>+</button>
                    <button className="removal-button" onClick={() => {removeCompletelyFromCart(id)}}>Usuń</button>
                </div>



            </div>
        </div>)

}

export default CartItem;