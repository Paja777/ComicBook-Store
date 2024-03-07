import Button from "../../app/components/Button";
import { Product } from "../../app/models/product";
import { useAppDispatch } from "../../app/store/ConfigureStore";
import image from "../../assets/onepiece.svg";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { addToCart, addToFavorite } from "../account/accountSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const defaultColor = favorite ? "red" : "gray";
  const defaultButtonText = inCart ? "Remove" : "Add To Cart";
  const [currentColor, setCurrentColor] = useState(defaultColor);
  const [buttonText, setButtonText] = useState(defaultButtonText);

  const handleButtonClick = () => {
    dispatch(addToCart({ title, price, img, id, description, inCart }));
    setTimeout(
      () =>
        setButtonText((prev) =>
          prev === "Cart ->" ? "Remove" : "Add To Cart"
        ),
      2000
    );
  };

  const handleIconClick = () => {
    setCurrentColor((prev) => (prev === "red" ? "gray" : "red"));
    dispatch(addToFavorite({ title, price, img, id, description, favorite }));
  };

  return (
    <div
    
      className="flex flex-col gap-1 card-product w-[100px] h-[180px]  sm:w-[180px] 
    sm:h-[290px] md:w-[270px] md:h-[390px]  justify-center items-center relative"
    >
      <img
        src={img === "" ? image : img}
        alt="cover"
        className="w-[80%] h-[80%] rounded-[10px] mt-2 cursor-pointer"
        onClick={() => navigate(`/${id}`)}
      />
      <div className="text-white font-poppins mt-1 text-[6px] ss:text-[8px] sm:text-[10px] md:text-[16px]">{title}</div>
      <div className="text-secondary text-[6px] ss:text-[8px] sm:text-[10px] md:text-[16px] font-light font-poppins">
        {price}
      </div>
      <div className="absolute bottom-0 left-2 ss:left-4 sm:bottom-1 sm:left-7 ">
        <FavoriteOutlinedIcon
          onClick={handleIconClick}
          sx={{ color: currentColor, fontSize: { 
            xs: '10px', 
            sm: '16px', 
            md: '20px', 
            lg: '32px', 
            xl: '36px', 
          },}}
          className="mr-2 cursor-pointer hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 sm:bottom-1 right-2">
        <Button
          size={{ w: "90px", h: "30px" }}
          name={buttonText}
          onHandleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default ProductCard;
