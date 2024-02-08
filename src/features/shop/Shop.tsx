import { useEffect, useState } from "react";
import Pagination from "../../app/layout/Pagination";
import { products } from "../../app/lib/data";
import ProductList from "./ProductList";
import { Product } from "../../app/models/product";
import { useAppSelector } from "../../app/store/ConfigureStore";
import { filterIt } from "../../app/util/utils";

interface ShopProps {
  pageScale: number;
}

const Shop = ({ pageScale }: ShopProps) => {
  const { category, searchTerm } = useAppSelector(state => state.filter);
  const [displayedProducts, setDisplayedProducts] = useState<
    Product[] | undefined
  >();
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredArray = filterIt(category, searchTerm, products);
  const totalProducts = filteredArray.length;
  const totalPages = Math.ceil(totalProducts / pageScale);

  const handlePagination = (num: number) => {
    let newArr = [];
    if (num === 1) {
      newArr = filteredArray.slice(0, pageScale);
      setDisplayedProducts(newArr);
      return;
    }
    if (num <= totalPages) {
      newArr = filteredArray.slice(pageScale * (num - 1), num * pageScale);
      setDisplayedProducts(newArr);
    }
  };
  useEffect(() => {
    handlePagination(currentPage);
  }, [currentPage, category, searchTerm]);

  return (
    <div className="">
      <ProductList products={displayedProducts} />
      <Pagination
        metaData={{ currentPage, totalProducts, totalPages }}
        onSetCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Shop;
