import logoipsum from "../../assets/logoipsum-329.svg";
import { navLinks as links } from "../lib/data";
import { NavLink as Link } from "../models/navlink";
import "../../index.css";
import { useState } from "react";
import HeaderLink from "../components/HeaderLink";
import SearchInput from "../components/SearchInput";
import DropDown from "../components/DropDown";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <div className="flex flex-col fixed bg-primary w-full pb-1 z-[999]">
      <nav className="flex h-[60px]  gap-64 sm:h-[80px] md:h-[100px] justify-center items-center mb-2 ">
        <NavLink to={""}>
          <img
            src={logoipsum}
            alt="logo"
            className="logo_gradient h-[24px] ml-3 sm:ml-10 sm:h-[40px] md:w-[100px] md:h-[100px] md:mt-6"
          />
        </NavLink>
        <div className="flex flex-1 justify-end">
          {links.map((link: Link) => {
            return link.name === "My account" ? (
              <DropDown items={["Login", "Register"]} key={link.id} />
            ) : (
              <HeaderLink key={link.id} setSearchBar={setSearchBar} {...link} />
            );
          })}
        </div>
      </nav>
      {searchBar && <SearchInput />}
    </div>
  );
};

export default Header;
