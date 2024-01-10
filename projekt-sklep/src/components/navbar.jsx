import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react"
import {ShopContext} from "../context/shopContext.jsx";
import "./navbar.css";
//phosphor-react to biblioteka ikonek

const Navbar = () => {

    const {getTotalCartItems} = React.useContext(ShopContext);
    return (
        <div className="navbar">
            <Link to="/"><div className="navbar-brand">eBazarek Andrzej</div></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/aboutus">About us</Link>
                <Link to="/login">Log in</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
                <p className="item-no">({getTotalCartItems()})</p>
            </div>
        </div>
    );
}

export default Navbar;