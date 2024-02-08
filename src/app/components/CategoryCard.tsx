import { Category } from "../models/category"
import arrow from "../../assets/arrow.svg";
import { useAppDispatch } from "../store/ConfigureStore";
import { changeCategory } from "../../features/shop/FilterSlice";


const CategoryCard = ({ id, image, name } : Category) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(changeCategory(name))
  }
  return (
    <div
    onClick={clickHandler}
    key={id}
    className="relative h-[600px] group hover:scale-110 cursor-pointer  z-[2] transition"
  >
    <img src={image} alt="category" />
    <div className="flex flex-row gap-4 justify-center items-center mt-4">
      <p className=" text-white font-poppins text-[20px]  group-hover:-translate-x-1">
        {name}
      </p>
      <img
        src={arrow}
        alt="arrow"
        className="w-[40px] h-[40px] brightness-150 group-hover:translate-x-2 transition"
      />
    </div>
  </div>
  )
}

export default CategoryCard