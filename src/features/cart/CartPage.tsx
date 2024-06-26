import Button from "../../app/components/Button";
import cartCover from "../../assets/cart cover.jpg";
import ProductList from "../shop/ProductList";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../app/context/AuthContext";
import CartForm from "./CartForm";
import { Suspense } from "react";
import Footer from "../../app/layout/Footer";

const CartPage = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const items = user?.productCart.map((p: any) => {
    return { ...p, _id: p.productId };
  });


  return (
    <div className="flex flex-col relative h-auto lg:h-full w-full text-red-600 overflow-hidden">
      <div className="absolute top-10 left-[30%] font-poppins text-[36px]  opacity-45 text-gradient">
        {user?.username} Welcome To Your Cart
      </div>
      <div className="absolute z-[99] top-28 left-10">
        <Button
          size={{ w: "75px", h: "100px" }}
          name="<- Back"
          onHandleButtonClick={() => navigate("/")}
        />
      </div>
      <img src={cartCover} alt="cover_image" className="opacity-20 absolute" />
      <div className="flex flex-col sm:flex-row mt-16 ">
        <div className="w-[60%] mt-20">
          <ProductList products={items} />
        </div>
        <section className="flex flex-col font-poppins text-white mb-0 text-[24px] mt-10 ml-10 leading-15">
          <div className="mt-10 z-[99]">
            <Suspense fallback={<p>...Loading</p>}>
            <CartForm  items={items}/>
            </Suspense>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
