import { useAppSelector } from "../../app/store/ConfigureStore";
import fav2 from "../../assets/fav2.webp";
import ProductList from "../shop/ProductList";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.account);
  return (
    <div className="relative h-[700px] text-red-600 overflow-hidden">
      <div className="absolute top-10 left-[39%] font-poppins text-[50px] opacity-45 text-gradient">
        Your Favorite
      </div>
      <img src={fav2} alt="cover_image" className="opacity-20 absolute" />
      <div>
        <ProductList products={favorites}/>
      </div>
    </div>
  );
};

export default FavoritesPage;
