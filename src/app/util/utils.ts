
import { Product } from "../models/product";

export const filterIt = (
  category: string,
  searchTerm: string,
  products: Product[],
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  let filteredArray = [];
  setCurrentPage(1);
  if (category === "all" && searchTerm !== "")
    return (filteredArray = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  if (category === "all" && searchTerm === "")
    return (filteredArray = products);
  filteredArray = products.filter((product) => product.category === category);
  return filteredArray;
};
