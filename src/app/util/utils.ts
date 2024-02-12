
import { Product } from "../models/product";
import { useEffect, useMemo } from 'react';

export const filterIt = (
  category: string,
  searchTerm: string,
  products: Product[],
  setCurrentNumber: React.Dispatch<React.SetStateAction<number>>
) => {
  const filteredArray = useMemo(() => {
    if (category === 'all' && searchTerm !== '') {
      return products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (category === 'all' && searchTerm === '') {
      return products;
    } else {
      return products.filter((product) => product.category === category);
    }
  }, [category, searchTerm, products]);

  useEffect(() => {
    setCurrentNumber(1);
  }, [category, searchTerm, products, setCurrentNumber]);

  return filteredArray;
};