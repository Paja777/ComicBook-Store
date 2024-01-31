import Button from "../../app/components/Button";
import { Product } from "../../app/models/product";

const ProductCard = ({ id, name, description, price }: Product) => (
  <div className="flex flex-wrap relative w-[200px] h-[250px] border border-gray-400 justify-center">
    <div>{id}</div>
    <div>{name}</div>
    <div>{description}</div>
    <div>{price}</div>
    <Button size={{w: 'full', h: '20%'}} name="cart"/>
  </div>
);

export default ProductCard;
