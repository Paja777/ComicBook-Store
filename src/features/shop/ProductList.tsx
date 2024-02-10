import ProductCard from "./ProductCard";
import { Product } from "../../app/models/product";
import LoadingComponent from "../../app/layout/LoadingComponent";

interface ProductListProps {
  products: Product[] | undefined;
}

const ProductList = ({ products }: ProductListProps) => {

  if (products === undefined) return <LoadingComponent/>;

  return (
    <div className="relative">
      <div className="flex flex-row flex-wrap gap-6 justify-center items-center mt-10 relative z-[99]">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="radial-hero1 absolute left-0 bottom-48 translate-y-[80%] translate-x-[140%] opacity-6  opacity-80 " />
    </div>
  );
};

export default ProductList;
