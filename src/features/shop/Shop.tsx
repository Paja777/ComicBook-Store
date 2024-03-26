import { useEffect, useState } from "react";
import Pagination from "../../app/layout/Pagination";
import ProductList from "./ProductList";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";

import { useErrorBoundary } from "react-error-boundary";
import { useAuthContext } from "../../app/context/AuthContext";

const Shop = () => {
  const [displayedProducts, setDisplayedProducts] = useState<
    Product[] | undefined
  >();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 8;

  const { showBoundary } = useErrorBoundary();
  const { searchTerm, category } = useAuthContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await agent.requests.get(
          `/product?p=${currentPage - 1}&limit=${limit}&searchTerm=${
            searchTerm ?? ""
          }&category=${category ?? ""}`
        );
        console.log(response);
        setDisplayedProducts(response.products);
        setTotalProducts(response.totalProducts);
        setTotalPages(response.totalPages);
      } catch (error: any) {
        console.log(error);
        showBoundary(error);
      }
    };
    fetchProducts();
  }, [currentPage, searchTerm, category]);

  return (
    <div className="">
      <ProductList products={displayedProducts} />
      {totalProducts === 0 && (
        <div className="text-white flex justify-center items-center text-[36px]">
          No resuts for "{searchTerm}"
        </div>
      )}
      <Pagination
        metaData={{ currentPage, totalProducts, totalPages }}
        onSetCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Shop;
