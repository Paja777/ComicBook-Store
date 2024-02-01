import Pagination from "../../app/components/Pagination";
import Categories from "../../app/layout/Categories";
import Hero from "../../app/layout/Hero";
import MostPopular from "../../app/layout/MostPopular";
import ProductList from "../shop/ProductList";

export default function HomePage() {
  return (
    <div className="relative h-[3600px] ">
    <Hero />
    <Categories />
    <ProductList />
    <Pagination/>
    <MostPopular />
    </div>
  )
} 
