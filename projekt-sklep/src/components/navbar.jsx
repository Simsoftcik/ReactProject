import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react"
import {ShopContext} from "../context/shopContext.jsx";
import "./navbar.css";
import { useAuth } from '../context/authContext.jsx';
//phosphor-react to biblioteka ikonek

const Navbar = () => {

    const { isLoggedIn, login, logout } = useAuth();

    const {getTotalCartItems} = React.useContext(ShopContext);
    return (
        <div className="navbar">
            <Link to="/"><div className="navbar-brand">eBazarek Andrzej</div></Link>
            <div className="links">
                <Link to="/">Bazarzysko</Link>
                <Link to="/aboutus">O nas</Link>
                {isLoggedIn ? 
                (<>
                    <Link to="/" onClick={logout}>Wyloguj się</Link>
                    <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
                <p className="item-no">({getTotalCartItems()})</p></>)
                : 
                (<Link to="/login">Zaloguj się</Link>)
                }
            </div>
        </div>
    );
}

export default Navbar;