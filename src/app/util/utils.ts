import { Product } from "../models/product";



export const filteredByCategory = (category : string, products: Product[]) => {
    let filteredArray = [];
    if (category === "all") return filteredArray = products;
    filteredArray = products.filter( product => product.category === category);
    return filteredArray;
}