import { Product } from "../models/product";

export const filterIt = (
  category: string,
  searchTerm: string,
  products: Product[]
) => {
  let filteredArray = [];
  if (category === "all" && searchTerm !== "")
    return (filteredArray = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  if (category === "all" && searchTerm === "")
    return (filteredArray = products);
  filteredArray = products.filter((product) => product.category === category);
  return filteredArray;
};
