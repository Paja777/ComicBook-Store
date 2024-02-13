import Button from "../../app/components/Button";
import { Product } from "../../app/models/product";
import { useAppDispatch } from "../../app/store/ConfigureStore";
import image from "../../assets/onepiece.svg";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { addToCart, addToFavorite } from "../account/accountSlice";
import { useState } from "react";

const ProductCard = ({
  title,
  price,
  img,
  id,
  description,
  favorite,
  inCart,
}: Product) => {
  const dispatch = useAppDispatch();
  const defaultColor = favorite ? 'red' : 'gray';
  const defaultButtonText = inCart ? 'Remove' : 'Add To Cart';
  const [currentColor, setCurrentColor] = useState(defaultColor);
  const [buttonText, setButtonText] = useState(defaultButtonText);

  const handleButtonClick = () => {
    dispatch(addToCart({ title, price, img, id, description, inCart }));
    setTimeout(() => setButtonText((prev) => (prev === 'Add To Cart' ? 'Remove' : 'Add To Cart')), 2000);
  };

  const handleIconClick = () => {
    setCurrentColor((prev) => (prev === 'red' ? 'gray' : 'red'));
    dispatch(addToFavorite({ title, price, img, id, description, favorite }));
  };

  return (
    <div className="flex flex-col gap-1 card-product w-[200px] md:w-[300px] lg:w-[400px] h-[300px] md:h-[400px] justify-center items-center cursor-pointer">
      <img
        src={img === '' ? image : img}
        alt="cover"
        className="w-[75%] h-[75%] rounded-[10px] mt-2"
      />
      <div className="text-white font-poppins mt-2">{title}</div>
      <div className="flex items-center mt-1">
        <FavoriteOutlinedIcon
          onClick={handleIconClick}
          sx={{ color: currentColor, fontSize: '28px' }}
          className="mr-2"
        />
        <div className="text-secondary text-[16px] font-light font-poppins">{price}</div>
      </div>
      <div className="mt-2">
        <Button
          size={{ w: '100px', h: '30px' }}
          name={buttonText}
          onHandleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default ProductCard;
