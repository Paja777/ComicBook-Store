import { useEffect, useRef, useState } from "react";
import Pagination from "../../app/layout/Pagination";
import { products } from "../../app/lib/data";
import ProductList from "./ProductList";
import { Product } from "../../app/models/product";
import { useAppSelector } from "../../app/store/ConfigureStore";
import { filterIt } from "../../app/util/utils";
import { useScrollContext } from "../../app/context/ScrollContext";

interface ShopProps {
  pageScale: number;
}

const Shop = ({ pageScale }: ShopProps) => {
  const { category, searchTerm } = useAppSelector((state) => state.filter);
  const [displayedProducts, setDisplayedProducts] = useState<
    Product[] | undefined
  >();
  const [currentPage, setCurrentPage] = useState(1);
  const { scrollToShop } = useScrollContext();
  const shopRef = useRef<HTMLDivElement>(null);

  const filteredArray = filterIt(category, searchTerm, products, setCurrentPage);
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
    if (scrollToShop && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage, category, searchTerm, scrollToShop]);

  return (
    <div ref={shopRef} className="">
      <ProductList products={displayedProducts} />
      <Pagination
        metaData={{ currentPage, totalProducts, totalPages }}
        onSetCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Shop;
