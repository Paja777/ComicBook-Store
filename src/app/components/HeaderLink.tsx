import { NavLink } from "react-router-dom";
import { NavLink as Link } from "../models/navlink";
import { useAppSelector } from "../store/ConfigureStore";
import { useAuthContext } from "../context/AuthContext";

interface HeaderLinkProps extends Link {
  setSearchBar: (value: boolean) => void;
}

const HeaderLink = ({ path, image, name, setSearchBar }: HeaderLinkProps) => {
  const { cartItems, favorites } = useAppSelector((state) => state.account);
  const { user } = useAuthContext();
  const itemCount = name === "favorite" ? favorites.length : user?.productCart.length;
  const clickHandler = () => {
    if (name === "search") setSearchBar(true);
  };

  return (
    <NavLink
      to={path}
      onClick={clickHandler}
      className={`mr-1 sm:mr-3 md:mr-6 lg:mr-10 z-[6]`}
    >
      {image === "" ? (
        <div className="font-poppins font-light text-[18px] text-white ">
          {name}
        </div>
      ) : (
        <div className="relative">
          <img
            src={image}
            alt={name}
            className=" w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] brightness-full-white"
          />
          {name !== "search" && (
            <div className="flex justify-center items-center font-poppins text-[7px] md:text-[10px] absolute top-0 right-0 w-[10px] h-[10px] sm:w-[13px] sm:h-[13px] md:w-[15px] md:h-[15px] bg-red-500 rounded-full text-white">
              {itemCount}
            </div>
          )}
        </div>
      )}
    </NavLink>
  );
};

export default HeaderLink;
