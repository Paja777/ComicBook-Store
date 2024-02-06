import Pagination from "../../app/layout/Pagination";
import Categories from "../../app/layout/Categories";
import Hero from "../../app/layout/Hero";
import MostPopular from "../../app/layout/MostPopular";
import ProductList from "../shop/ProductList";
import Footer from "../../app/layout/Footer";
import LoginButton from "../account/LoginBtn";

export default function HomePage() {
  return (
    <div className="relative h-[3850px] ">
      <Hero />
      <LoginButton />
      <Categories />
      <ProductList />
      <Pagination />
      <MostPopular />
      <Footer />
    </div>
  );
}
