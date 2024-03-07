import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import About from "../../features/about/About";
import ProductDetails from "../../features/shop/ProductDetails";
import Contact from "../../features/contact/Contact";
import CartPage from "../../features/cart/CartPage";
import FavoritesPage from "../../features/favorite/FavoritesPage";
import SignupForm from "../../features/account/Signup";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/:id', element: <ProductDetails />},
            {path: 'about', element: <About />},
            {path: 'contact', element: <Contact />},
            {path: 'cart', element: <CartPage />},
            {path: 'favorite', element: <FavoritesPage />},
            {path: 'signup', element: <SignupForm />},


        ]
    }
])