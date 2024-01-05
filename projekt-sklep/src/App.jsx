import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.jsx'
import Shop from "./pages/shop/shop.jsx";
import Cart from "./pages/cart/cart.jsx";
import {ShopContextProvider} from "./context/shopContext.jsx";

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <BrowserRouter>
                    <Navbar />
                    {/*navbars bedzie widoczne w kazdej stronie*/}
                    <Routes>
                        <Route path="/" element={<Shop/>} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="*" element={<h1>Not Found</h1>} />
                    </Routes>
                </BrowserRouter>
            </ShopContextProvider>

        </div>

        )

}

export default App
