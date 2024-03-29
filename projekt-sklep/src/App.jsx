import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.jsx'
import Shop from "./pages/shop/shop.jsx";
import Cart from "./pages/cart/cart.jsx";
import Login from './pages/login/login.jsx';
import AboutUs from './pages/aboutUs/aboutUs.jsx';
import ProductPage from './pages/products/ProductPage.jsx';
import {ShopContextProvider} from "./context/shopContext.jsx";
import { AuthProvider } from './context/authContext.jsx';

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <AuthProvider>
                    <BrowserRouter>
                        <Navbar />
                        {/*navbars bedzie widoczne w kazdej stronie*/}
                        <Routes>
                            <Route path="/" element={<Shop/>} />
                            <Route path="/cart" element={<Cart/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/aboutus" element={<AboutUs/>} />
                            <Route path="/products/:id" element={<ProductPage />} />


                            <Route path="*" element={<h1>Not Found</h1>} />
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </ShopContextProvider>

        </div>

        )

}

export default App
