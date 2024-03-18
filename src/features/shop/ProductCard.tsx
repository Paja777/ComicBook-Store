import Button from "../../app/components/Button";
import { useAuthContext } from "../../app/context/AuthContext";
import { useUpdateUser } from "../../app/hooks/useUpdateUser";
import { Product } from "../../app/models/product";
import image from '../../assets/pacman.jpg'
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, price, img, _id, description }: Product) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  // if product is in user's favorites it will be red color
  const defaultColor = user?.productFavorites.find((p) => p.productId === _id)
    ? "red"
    : "gray";
    const [currentColor, setCurrentColor] = useState(defaultColor);
    // if product is in cart button text will be 'remove'
    const defaultButtonText = user?.productCart.find((p) => p.productId === _id)
    ? "Remove"
    : "Add To Cart";

  const [buttonText, setButtonText] = useState(defaultButtonText);
  // custom hook for handling cart and favorite products
  const { addToCart, removeFrom, addToFavorites, error } =
    useUpdateUser();

  const handleButtonClick = async () => {
    // unregistered user cannot put something in cart
    if (!user) {
      navigate("/signup");
      return;
    }
    // check if action is add or remove
    if (buttonText !== "Remove") {
      // add product to cart
      addToCart({ id: _id , price, title});
      console.log("ovde sam", buttonText);
    } else {
      // remove product from cart
      removeFrom({ place: "cart", id: _id });
    }
    if(error) alert(error);
    // changing text with delay, loader
    setTimeout(
      () =>
        setButtonText((prev) =>
          prev === "Add To Cart" ? "Remove" : "Add To Cart"
        ),
      2000
    );
  };

  const handleIconClick = async () => {
    // unregistered user cannot add something to favorites
    if (!user) {
      navigate("/signup");
      return;
    }
    console.log(price, title);
    if (currentColor === "gray") {
      addToFavorites({ id: _id, price, title });
    } else {
      removeFrom({ place: "favorites", id: _id });
    }
    if(error) alert(error);
    setCurrentColor((prev) => (prev === "red" ? "gray" : "red"));
  };

  return (
    <div
      className="flex flex-col gap-1 card-product w-[100px] h-[180px]  sm:w-[180px] 
    sm:h-[290px] md:w-[270px] md:h-[390px]  justify-center items-center relative"
    >
      <img
        src={image}
        alt="cover"
        className="w-[88%] h-[50%] rounded-[10px] mt-2 cursor-pointer"
        onClick={() => navigate(`/${_id}`)}
      />
      <div className="text-white font-poppins mt-1 text-[6px] ss:text-[8px] sm:text-[10px] md:text-[16px]">
        {title}
      </div>
      <div className="text-secondary text-[6px] ss:text-[8px] sm:text-[10px] md:text-[16px] font-light font-poppins">
        ${price}
      </div>
      <div className="absolute bottom-0 left-2 ss:left-4 sm:bottom-1 sm:left-7 ">
        <FavoriteOutlinedIcon
          onClick={handleIconClick}
          sx={{
            color: currentColor,
            fontSize: {
              xs: "10px",
              sm: "16px",
              md: "20px",
              lg: "32px",
              xl: "36px",
            },
          }}
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
