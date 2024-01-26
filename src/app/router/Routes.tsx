import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Shop from "../../features/shop/Shop";
import About from "../../features/about/About";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'shop', element: <Shop />},
            {path: 'about', element: <About />},


        ]
    }
])