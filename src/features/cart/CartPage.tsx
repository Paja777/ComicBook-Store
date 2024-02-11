import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../app/components/Button";
import { useAppSelector } from "../../app/store/ConfigureStore";
import cartCover from "../../assets/cart cover.jpg";
import ProductList from "../shop/ProductList";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems } = useAppSelector((state) => state.account);
  const navigate = useNavigate();
  const { user } = useAuth0();
  const totalCost = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace('$', ''), 10);
    return sum + price;
  },0)
  console.log(user)
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col relative h-screen text-red-600 overflow-hidden">
      <div className="absolute top-10 left-[42%] font-poppins text-[50px]  opacity-45 text-gradient">
        Your Cart
      </div>
      <div className="flex">
        <Button
          size={{ w: "75px", h: "100px" }}
          name="<- back"
          onHandleButtonClick={handleButtonClick}
        />
      </div>
      <img src={cartCover} alt="cover_image" className="opacity-20 absolute" />
      <div className="flex flex-row mt-16 ">
        <div className="w-[50%]">
          <ProductList products={cartItems} />
        </div>
        <section className="flex flex-col font-poppins text-white text-[36px] mt-16 ml-10 leading-15">
          <h2 className="text-gradient">Welcome To Your Cart</h2>
          <h2>Total: ${totalCost}</h2>
          <div className="flex mt-10">
          <Button
          size={{ w: "75px", h: "100px" }}
          name="Finsih ->"
          onHandleButtonClick={handleButtonClick}
        />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
