import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import About from "../../features/about/About";
import Register from "../../features/account/Register";
import ProductDetails from "../../features/shop/ProductDetails";
import Contact from "../../features/contact/Contact";
import CartPage from "../../features/cart/CartPage";
import AccountPage from "../../features/account/AccountPage";
import FavoritesPage from "../../features/favorite/FavoritesPage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/:id', element: <ProductDetails />},
            {path: 'about', element: <About />},
            {path: 'contact', element: <Contact />},
            {path: 'register', element: <Register />},
            {path: 'cart', element: <CartPage />},
            {path: 'account', element: <AccountPage />},
            {path: 'favorites', element: <FavoritesPage />},


        ]
    }
])