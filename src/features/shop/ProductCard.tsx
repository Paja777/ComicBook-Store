import Button from "../../app/components/Button";
import { Product } from "../../app/models/product";

const ProductCard = ({ title, price }: Product) => (
  <div className="flex flex-wrap card-product relative w-[300px] h-[400px] rounded-[10px] bg-gray-600 justify-center">
    <div>{title}</div>
    <div>{price}</div>
    <Button size={{ w: "full", h: "20%" }} name="cart" />
  </div>
);

export default ProductCard;
