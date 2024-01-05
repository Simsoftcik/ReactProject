import React, {useState} from "react";
import {PRODUCTS} from "../dummy/dummyProducts.js";

//global states -> global varaiables
export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart
}
export const ShopContextProvider = (props) => {

    // cartItems = obj{ itemId:noOfItem }
    const [ cartItems , setCartItems ] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                total += itemInfo.price * cartItems[item];
            }
        }
        return total;
    }

    const getTotalCartItems = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0){
                total += cartItems[item];
            }
        }
        return total;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            return ({...prev , [itemId]: prev[itemId] + 1})
        })
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            return ({...prev , [itemId]: prev[itemId] - 1})
        })
    }

    const clearCart = () => {
        setCartItems(getDefaultCart());
    }

    const removeCompletelyFromCart = (itemId) => {
        setCartItems((prev) => {
            return ({...prev , [itemId]: 0})
        })
    }

    const setCartItemCount = (count , itemId ) => {
        setCartItems((prev) => {
            return ({...prev , [itemId]: count})
        })
    }

    // console.log(cartItems)

    const contextValue = {
        cartItems ,
        addToCart ,
        removeFromCart ,
        clearCart ,
        removeCompletelyFromCart ,
        setCartItemCount ,
        getTotalCartAmount ,
        getTotalCartItems
    }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>//provider -> track of all data, organize logic
}

