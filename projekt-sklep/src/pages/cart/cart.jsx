import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {PRODUCTS} from "../../dummy/dummyProducts.js";
import {ShopContext} from "../../context/shopContext.jsx";
import CartItem from "./CartItem.jsx";
import "./cart.css"

const Cart = () => {

    const {clearCart , cartItems , getTotalCartAmount} = useContext(ShopContext);
    const navigate = useNavigate();

    const totalCartAmount = getTotalCartAmount();
    const [displayedTotalCartAmount , setDisplayedTotalCartAmount] = useState(totalCartAmount);

    useEffect(() => {
        setDisplayedTotalCartAmount(totalCartAmount);
    }, [totalCartAmount]);

    return (
        <div className="cart">
            <div>
                <h1>
                    Twój koszyk:
                </h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] > 0){ //jesli w koszyku jest wiecej niz 0 sztuk danego produktu
                        return <CartItem data={product}/>
                    }

                })}
            </div>
            {totalCartAmount > 0 ?
                <div className="checkout-correct">
                    <p> Podsumowanie: {displayedTotalCartAmount} zł</p>
                    <button onClick={() => navigate("/")}> Kontynuuj Zakupy</button>
                    <button onClick={() => setDisplayedTotalCartAmount((prev)=>prev+1)}> Zapłać</button>
                    <button onClick={() => clearCart()}> Wyczyść Koszyk</button>
                </div>

                :
                <div className="checkout">
                    <h1>Twój koszyk jest pusty!</h1>
                    <button onClick={() => navigate("/")}> Kontynuuj Zakupy</button>
                </div>



            }
        </div>
    );
}

export default Cart;