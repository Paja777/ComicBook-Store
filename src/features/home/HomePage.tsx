import Pagination from "../../app/layout/Pagination";
import Categories from "../../app/layout/Categories";
import Hero from "../../app/layout/Hero";
import MostPopular from "../../app/layout/MostPopular";
import ProductList from "../shop/ProductList";
import Footer from "../../app/layout/Footer";
import { products } from "../../app/lib/data";

export default function HomePage() {
  return (
    <div className="relative h-[3850px] ">
      <Hero />
      <Categories />
      <ProductList products={products}/>
      <Pagination />
      <MostPopular />
      <Footer />
    </div>
  );
}
