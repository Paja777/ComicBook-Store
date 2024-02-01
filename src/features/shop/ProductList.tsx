import ProductCard from "./ProductCard";
import { products } from "../../app/lib/data";
import { Product } from "../../app/models/product";

const ProductList = () => (
  <>
    <div className="flex flex-row flex-wrap gap-6 justify-center items-center mt-10">
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    
  </>
);

export default ProductList;
