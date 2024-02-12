import { Category } from "../models/category"
import arrow from "../../assets/arrow.svg";
import { useAppDispatch } from "../store/ConfigureStore";
import { changeCategory } from "../../features/shop/FilterSlice";


const CategoryCard = ({ id, image, name }: Category) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(changeCategory(name));
  };
  return (
    <div
      onClick={clickHandler}
      key={id}
      className="relative h-[200px] md:h-[300px] group hover:scale-110 cursor-pointer z-[99] transition"
    >
      <img src={image} alt="category" className="w-full h-full object-cover" />
      <div className="flex flex-row gap-2 md:gap-4 justify-center items-center mt-2 md:mt-4">
        <p className="text-white font-poppins text-xs md:text-lg group-hover:-translate-x-1">
          {name}
        </p>
        <img
          src={arrow}
          alt="arrow"
          className="w-8 h-8 md:w-10 md:h-10 brightness-150 group-hover:translate-x-2 transition"
        />
      </div>
    </div>
  );
};

export default CategoryCard;