import { Category } from "../models/category";
import arrow from "../../assets/arrow.svg";
import { useAuthContext } from "../context/AuthContext";

const CategoryCard = ({ id, image, name }: Category) => {
  const { dispatch } = useAuthContext();
  const clickHandler = () => {
    console.log("category name:",name)
    dispatch({type: "CATEGORY", payload: name});
  };
  return (
    <div
      onClick={clickHandler}
      key={id}
      className="relative h-[160px] w-[100px] ss:h-[230px] ss:w-[140px]  sm:h-[300px] sm:w-[200px] md:h-[330px] md:w-[230px] lg:h-[460px] lg:w-[290px] group hover:scale-110 cursor-pointer z-[99] transition"
    >
      <img src={image} alt="category" className="w-full h-full object-cover" />
      <div className="flex flex-row gap-2 md:gap-4 justify-center items-center mt-2 md:mt-4">
        <p className="text-white font-poppins text-xs md:text-lg group-hover:-translate-x-1">
          {name}
        </p>
        <img
          src={arrow}
          alt="arrow"
          className="w-4 h-8 sm:w-10 sm:h-10  brightness-150 group-hover:translate-x-2 transition"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
