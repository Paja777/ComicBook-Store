import { useAppSelector } from "../../app/store/ConfigureStore";
import cartCover from "../../assets/cart cover.jpg";
import ProductList from "../shop/ProductList";

const CartPage = () => {
  const { cartItems } = useAppSelector((state) => state.account);
  return (
    <div className="relative h-[700px] text-red-600 overflow-hidden">
      <div className="absolute top-10 left-[39%] font-poppins text-[50px]  opacity-45 text-gradient">
        Your Cart
      </div>
      <img src={cartCover} alt="cover_image" className="opacity-20 absolute" />
      <div>
        <ProductList products={cartItems}/>
      </div>
    </div>
  );
};

export default CartPage;