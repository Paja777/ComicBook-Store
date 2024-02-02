import { NavLink } from "react-router-dom"
import { NavLink as Link } from "../models/navlink"


interface HeaderLinkProps extends Link {
 setSearchBar: (value: boolean) => void;
}


const HeaderLink = ({ path, image, name, setSearchBar} : HeaderLinkProps) => {
  return (
    <NavLink
              to={path}
              onClick={() => setSearchBar(true)}
              className={`mr-10 z-[6]`}
            >
              {image === "" ? (
                <div className="font-poppins font-light text-[18px] text-white ">
                  {name}
                </div>
              ) : (
                <img
                  src={image}
                  alt={name}
                  className=" w-[30px] h-[30px] brightness-full-white"
                />
              )}
            </NavLink>
  )
}

export default HeaderLink