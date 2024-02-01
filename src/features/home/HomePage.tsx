import Categories from "../../app/layout/Categories";
import Hero from "../../app/layout/Hero";
import ProductList from "../shop/ProductList";

export default function HomePage() {
  return (
    <div className="relative h-[2300px] ">
    <Hero />
    <Categories />
    <ProductList />
    </div>
  )
} 
