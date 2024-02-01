import logoipsum from "../../assets/logoipsum-329.svg";
import { Link, navLinks as links } from "../api/constants";
import { NavLink } from "react-router-dom";
import '../../index.css';

const Header = () => (
  <nav className="flex h-[100px] justify-between items-center mb-12 ">
    <img src={logoipsum} alt="logo" className='logo_gradient w-[100px] h-[100px] ml-20 mt-10' />
    <div className="flex flex-1 justify-end">
      {links.map((link: Link) => (
        <NavLink to={""} key={link.id} className={`mr-10 z-[6]`}>
          {link.image === "" ? (
            <div className="font-poppins font-light text-[18px] text-white ">{link.name}</div>
          ) : (
            <img
              src={link.image}
              alt={link.name}
              className=" w-[30px] h-[30px] brightness-full-white"
            />
          )}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default Header;
