import { search } from "../../features/shop/FilterSlice";
import { useScrollContext } from "../context/ScrollContext";
import { useAppDispatch } from "../store/ConfigureStore";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const { setScrollToShop } = useScrollContext();

 
  const handleInputChange = (event: any) => {
    if (event.key === "Enter") {
      dispatch(search(event.target.value));
      setScrollToShop(true);
    }
  };
  return (
    <div className="flex justify-end absolute w-[100%] right-10 top-24 z-[19]">
      <input
        type="text"
        className=" w-[20%] border rounded-full py-2 px-3"
        placeholder="Enter text..."
        onKeyDown={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
