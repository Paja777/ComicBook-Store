import ProductCard from "./ProductCard";
import { Product } from "../../app/models/product";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Suspense } from "react";

interface ProductListProps {
  products: Product[] | undefined;
}

const ProductList = ({ products }: ProductListProps) => { 
  // if (products === undefined) return <LoadingComponent />;

  return (
    <div className="relative">
      <div className="flex flex-row flex-wrap gap-6 xs:gap-4 ss:gap-4 sm:gap-1 md:gap-8 lg:gap-8 justify-center items-center mt-10 relative z-[99]">
        {products?.map((product: Product) => (
          <Suspense fallback={<LoadingComponent />}>
          <ProductCard key={product._id} {...product} />
          </Suspense>
        ))}
      </div>
      <div className="radial-hero1 absolute left-0 bottom-48 translate-y-[80%] translate-x-[140%] opacity-6  opacity-80 " />
    </div>
  );
};

export default ProductList;
