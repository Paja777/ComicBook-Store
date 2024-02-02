import { categories } from "../lib/data";
import { Category } from "../models/category";
import CategoryCard from "../components/CategoryCard";

const Categories = () => (
  <div className="flex flex-row gap-24 relative h-[640px] justify-center">
    {categories.map((category: Category) => (
      <CategoryCard key={category.id} {...category}/>
    ))}
    <div className="radial-hero1 absolute z-[0] left-0 bottom-0 translate-y-[40%] translate-x-[-50%] opacity-6  opacity-80 " />
  </div>
);

export default Categories;
