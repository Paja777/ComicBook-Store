import Button from "../../app/components/Button";
import { useAppSelector } from "../../app/store/ConfigureStore";
import cartCover from "../../assets/cart cover.jpg";
import ProductList from "../shop/ProductList";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useAppSelector((state) => state.account);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="relative h-[700px] text-red-600 overflow-hidden">
      <div className="absolute top-10 left-[39%] font-poppins text-[50px]  opacity-45 text-gradient">
        Your Cart
      </div>
      
        <Button
          size={{ w: "75px", h: "100px" }}
          name="<- back"
          onHandleButtonClick={handleButtonClick}
        />
      
      <img src={cartCover} alt="cover_image" className="opacity-20 absolute" />
      <div className="mt-36 ">
        <ProductList products={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
