import { useAuthContext } from "../context/AuthContext";
import { useScrollContext } from "../context/ScrollContext";

const SearchInput = () => {
  const {dispatch} = useAuthContext();
  const { setScrollToShop } = useScrollContext();

  const handleInputChange = (event: any) => {
    if (event.key === "Enter") {
      console.log(event.target.value)
      dispatch({ type: "SEARCH", payload: event.target.value });
      // localStorage.setItem("searchTerm", JSON.stringify(event.target.value));
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
