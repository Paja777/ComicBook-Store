import { useEffect, useState } from "react";
import Pagination from "../../app/layout/Pagination";
import { products } from "../../app/lib/data";
import ProductList from "./ProductList";
import { Product } from "../../app/models/product";

interface ShopProps {
  pageScale: number;
}

const Shop = ({ pageScale } : ShopProps) => {
  const [displayedProducts, setDisplayedProducts] = useState<Product[] | undefined>()
  const [currentPage, setCurrentPage] = useState(1)
  console.log(products.length);
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / pageScale);

  const handlePagination = (num : number) => {
    let newArr = [];
    if (num === 1) {
      newArr = products.slice(0, pageScale);
      setDisplayedProducts(newArr)
      return;
    }
    if (num <= totalPages) {
      newArr = products.slice((pageScale * (num-1)), num * pageScale)
      setDisplayedProducts(newArr)
    }
  }
  useEffect(() => {
    handlePagination(currentPage)
  }, [currentPage])


  return (
    <div className="">
      <ProductList products={displayedProducts} />
      <Pagination metaData={{currentPage, totalProducts, totalPages}} onSetCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default Shop;
