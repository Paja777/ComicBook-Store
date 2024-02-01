import { Category, categories } from "../api/constants";
import arrow from "../../assets/arrow.svg";

const Categories = () => (
  <div className="flex flex-row gap-24 relative h-[680px] justify-center">
    {categories.map((category: Category) => (
      <div
        key={category.id}
        className="relative h-[600px] group hover:scale-110 cursor-pointer transition"
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
  </div>
);

export default Categories;
