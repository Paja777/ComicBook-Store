import Button from "../../app/components/Button";
import { Product } from "../../app/models/product";
import { useAppDispatch } from "../../app/store/ConfigureStore";
import image from "../../assets/onepiece.svg";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { addToFavorite } from "../account/accountSlice";
import { useState } from "react";

const ProductCard = ({ title, price, img, id, description, favorite }: Product) => {
  const dispatch = useAppDispatch();
  const [currentColor, setCurrentColor] = useState("gray")
  const handleClick = (event: any) => {
    setCurrentColor(prev => prev === "red" ? "gray" : "red");
    event.target.style.color = currentColor;
    dispatch(addToFavorite({ title, price, img, id, description, favorite }));
  };
  return (
    <div className="flex flex-col gap-1 card-product  w-[300px] h-[400px] rounded-[10px] justify-center items-center cursor-pointer">
      <img
        src={img === "" ? image : img}
        alt="cover"
        className="w-[75%] h-[75%] rounded-[10px] mt-2"
      />
      <div className="text-white font-poppins mt-2">{title}</div>
      <div className=" flex ml-[40%]">
        <FavoriteOutlinedIcon
          onClick={handleClick}
          sx={{ color:  `${favorite ? "red" : "gray"}`, fontSize: "28px" }}
          className="absolute left-10 "
        />
        <div className="text-secondary text-[16px] font-light font-poppins mt-1 mr-4 ">
          {price}
        </div>
        <div className=" ml-3">
          <Button size={{ w: "196px", h: "30px" }} name="Add To Cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
