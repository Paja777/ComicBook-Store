import Categories from "../../app/layout/Categories";
import Hero from "../../app/layout/Hero";
import MostPopular from "../../app/layout/MostPopular";
import Footer from "../../app/layout/Footer";
import Shop from "../shop/Shop";

export default function HomePage() {
  return (
    <div className="relative h-[3850px] ">
      <Hero />
      <Categories />
      <Shop pageScale={8}/>
      <MostPopular />
      <Footer />
    </div>
  );
}
