import { categories } from "../lib/data";
import { Category } from "../models/category";
import CategoryCard from "../components/CategoryCard";

const Categories = () => (
  <div className="flex flex-row gap-4 h-[200px] ss:gap-8 ss:h-[270px] sm:gap-12 sm:h-[330px]  md:gap-20 md:h-[400px] lg:h-[550px] lg:mt-0 relative justify-center">
    {categories.map((category: Category) => (
      <CategoryCard key={category.id} {...category} />
    ))}
    <div className="radial-hero1 absolute z-0 left-0 bottom-0 translate-y-2/4 -translate-x-1/2 opacity-6 opacity-80 " />
  </div>
);

export default Categories;
