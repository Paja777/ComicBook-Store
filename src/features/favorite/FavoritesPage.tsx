import { useNavigate } from "react-router-dom";
import fav2 from "../../assets/fav2.webp";
import ProductList from "../shop/ProductList";
import Button from "../../app/components/Button";
import { useAuthContext } from "../../app/context/AuthContext";
import Footer from "../../app/layout/Footer";

const FavoritesPage = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const items = user?.productFavorites.map((p: any) => {
    return { ...p, _id: p.productId };
  });
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="relative h-auto text-red-600 overflow-hidden">
      <div className="absolute top-10 left-[40%] font-poppins text-[50px] opacity-45 text-gradient">
        Your Favorite
      </div>
      <div className="absolute z-[99] top-28 left-10">
        <Button
          size={{ w: "75px", h: "100px" }}
          name="<- back"
          onHandleButtonClick={handleButtonClick}
        />
      </div>
      <img src={fav2} alt="cover_image" className="opacity-20 absolute" />
      <div className="mt-36">
        <ProductList products={items} />
      </div>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
