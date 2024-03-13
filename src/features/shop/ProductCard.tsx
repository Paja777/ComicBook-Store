import agent from "../../app/api/agent";
import Button from "../../app/components/Button";
import { useAuthContext } from "../../app/context/AuthContext";
import { Product } from "../../app/models/product";
import image from "../../assets/onepiece.svg";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, price, img, _id, description }: Product) => {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();
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

  const handleButtonClick = async () => {
    // unregistered user cannot put something in cart
    if (!user) {
      navigate("/signup");
      return;
    }
    // add product to productCart array (user property)
    try {
      const response = await agent.requests.patch(
        `/user/addToCart`,
        { productId: "65ec7a7e0ea358c76ac958e7", amount: 1 },
        {
          headers: { authorization: `Bearer ${user!.token}` },
        }
      );
      // update local storage user
      const userData = JSON.parse(localStorage.getItem("user")!);
      if (userData) {
        const index = userData.productCart.findIndex(
          (u: any) => u.productId === "65ec7a7e0ea358c76ac958e7"
          );
          console.log(index)
          if (index !== -1) {
            userData.productCart[index].amount++;
            console.log("update local storage", userData.productCart[index])
          } else {
            userData.productCart.push({
              productId: "65ec7a7e0ea358c76ac958e7",
              amount: 1,
            });
            console.log("update local storage");
        }
        localStorage.setItem("user", JSON.stringify(userData));
        // update context user
        dispatch({ type: "LOGIN", payload: userData });
      }
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data);
    }
    setTimeout(
      () =>
        setButtonText((prev) =>
          prev === "Cart ->" ? "Remove" : "Add To Cart"
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

    setCurrentColor((prev) => (prev === "red" ? "gray" : "red"));
    try {
      const response = await agent.requests.patch(
        `/user/update/favorites`,
        { productId: "3ed64501-5585-7269-c14c-b9808f89c24d" },
        {
          headers: { authorization: `Bearer ${user!.token}` },
        }
      );
      // update local storage user
      const userData = JSON.parse(localStorage.getItem("user")!);
      if (userData && userData.productCart) {
        userData.productFavorites.push({
          productId: "3ed64501-5585-7269-c14c-b9808f89c24d",
        });
        localStorage.setItem("user", JSON.stringify(userData));
        // update context user
        dispatch({ type: "LOGIN", payload: userData });
      }
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data);
    }
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
        onClick={() => navigate(`/${_id}`)}
      />
      <div className="text-white font-poppins mt-1 text-[6px] ss:text-[8px] sm:text-[10px] md:text-[16px]">
        {title}
      </div>
      <div className="text-secondary text-[6px] ss:text-[8px] sm:text-[10px] md:text-[16px] font-light font-poppins">
        {price}
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
