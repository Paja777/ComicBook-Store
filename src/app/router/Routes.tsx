import { BrowserRouter, Route } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import About from "../../features/about/About";
import ProductDetails from "../../features/shop/ProductDetails";
import Contact from "../../features/contact/Contact";
import CartPage from "../../features/cart/CartPage";
import FavoritesPage from "../../features/favorite/FavoritesPage";
import SignupForm from "../../features/account/Signup";
import LoginForm from "../../features/account/Login";
import AdminDashboard from "../../features/adimin/AdminDashboard";


const basename = 'https://comicbook-store-gxha.onrender.com'; 

export const AppRouter = () => (
  <BrowserRouter basename={basename}>
    <Route
      path="/"
      element={<App />}
    >
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorite" element={<FavoritesPage />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Route>
  </BrowserRouter>
);
