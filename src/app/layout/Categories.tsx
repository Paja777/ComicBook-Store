import { categories } from "../lib/data";
import { Category } from "../models/category";
import arrow from "../../assets/arrow.svg";

const Categories = () => (
  <div className="flex flex-row gap-24 relative h-[640px] justify-center">
    {categories.map((category: Category) => (
      <div
        key={category.id}
        className="relative h-[600px] group hover:scale-110 cursor-pointer  z-[2] transition"
      >
        <img src={category.image} alt="category" />
        <div className="flex flex-row gap-4 justify-center items-center mt-4">
          <p className=" text-white font-poppins text-[20px]  group-hover:-translate-x-1">
            {category.name}
          </p>
          <img
            src={arrow}
            alt="arrow"
            className="w-[40px] h-[40px] brightness-150 group-hover:translate-x-2 transition"
          />
        </div>
      </div>
    ))}
    <div className="radial-hero1 absolute z-[0] left-0 bottom-0 translate-y-[40%] translate-x-[-50%] opacity-6  opacity-80 " />
  </div>
);

export default Categories;
