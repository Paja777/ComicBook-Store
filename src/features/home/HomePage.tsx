import Categories from "../../app/layout/Categories";
import Hero from "../../app/layout/Hero";
import MostPopular from "../../app/layout/MostPopular";
import Footer from "../../app/layout/Footer";
import Shop from "../shop/Shop";
import { Suspense } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";


export default function HomePage() {
  return (
    <div className="relative h-[1890px] xs:h-[1670px] ss:h-[1950px] sm:h-[2650px] md:h-[4100px] lg:h-[3800px] ">
      
      
      <Suspense fallback={<LoadingComponent />}>
        <Shop />
      </Suspense>
      
      <Footer />
    </div>
  );
}
