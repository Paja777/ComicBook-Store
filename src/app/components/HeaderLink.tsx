import { NavLink } from "react-router-dom";
import { NavLink as Link } from "../models/navlink";
import { useAppSelector } from "../store/ConfigureStore";

interface HeaderLinkProps extends Link {
  setSearchBar: (value: boolean) => void;
}

const HeaderLink = ({ path, image, name, setSearchBar }: HeaderLinkProps) => {
  const {cartItems, favorites} = useAppSelector(state => state.account);
  const itemCount = name === "favorite" ? favorites.length : cartItems.length ;
  const clickHandler = () => {
    if (name === "search") setSearchBar(true);
  };

  return (
    <NavLink to={path} onClick={clickHandler} className={`mr-10 z-[6]`}>
      {image === "" ? (
        <div className="font-poppins font-light text-[18px] text-white ">
          {name}
        </div>
      ) : (
        <div className="relative">
          <img
            src={image}
            alt={name}
            className=" w-[30px] h-[30px] brightness-full-white"
          />
          {name !== "search" && (
            <div className="flex justify-center items-center font-poppins text-[10px] absolute top-0 right-0 w-[15px] h-[15px] bg-red-500 rounded-full text-white">
              {itemCount}
            </div>
          )}
        </div>
      )}
    </NavLink>
  );
};

export default HeaderLink;
