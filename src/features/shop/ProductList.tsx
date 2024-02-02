import ProductCard from "./ProductCard";
import { products } from "../../app/lib/data";
import { Product } from "../../app/models/product";

const ProductList = () => (
  <div className="relative">
    <div className="flex flex-row flex-wrap gap-6 justify-center items-center mt-10 relative z-[99]">
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    <div className="radial-hero1 absolute z-[0] left-0 bottom-48 translate-y-[80%] translate-x-[140%] opacity-6  opacity-80 " />
    
  </div>
);

export default ProductList;
