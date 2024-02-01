import Button from "../../app/components/Button";
import { Product } from "../../app/models/product";
import image from "../../assets/onepiece.svg";

const ProductCard = ({ title, price, img }: Product) => (
  <div className="flex flex-col gap-1 card-product  w-[300px] h-[400px] rounded-[10px] justify-center items-center cursor-pointer">
    <img
      src={img === "" ? image : img}
      alt="cover"
      className="w-[75%] h-[75%] rounded-[10px] mt-2"
    />
    <div className="text-white font-poppins mt-2">{title}</div>
    <div className=" flex ml-[40%]">
      <div className="text-secondary text-[16px] font-light font-poppins mt-1 mr-4 ">{price}</div>
      <div className=" ml-3">
        <Button size={{ w: '196px', h: "30px" }} name="Add To Cart" />
      </div>
    </div>
  </div>
);

export default ProductCard;
