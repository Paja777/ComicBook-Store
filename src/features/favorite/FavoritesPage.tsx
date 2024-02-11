import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/store/ConfigureStore";
import fav2 from "../../assets/fav2.webp";
import ProductList from "../shop/ProductList";
import Button from "../../app/components/Button";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.account);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="relative h-[700px] text-red-600 overflow-hidden">
      <div className="absolute top-10 left-[40%] font-poppins text-[50px] opacity-45 text-gradient">
        Your Favorite
      </div>
      <div className="">
        <Button
          size={{ w: "75px", h: "100px" }}
          name="<- back"
          onHandleButtonClick={handleButtonClick}
        />
      </div>
      <img src={fav2} alt="cover_image" className="opacity-20 absolute" />
      <div className="mt-36">
        <ProductList products={favorites} />
      </div>
    </div>
  );
};

export default FavoritesPage;
