import logoipsum from "../../assets/logoipsum-329.svg";
import { navLinks as links } from "../lib/data";
import { NavLink as Link } from "../models/navlink";
import "../../index.css";
import { useState } from "react";
import HeaderLink from "../components/HeaderLink";
import SearchInput from "../components/SearchInput";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <div className="flex flex-col relative">
      <nav className="flex h-[100px] justify-between items-center mb-2 ">
        <img
          src={logoipsum}
          alt="logo"
          className="logo_gradient w-[100px] h-[100px] ml-20 mt-10"
        />
        <div className="flex flex-1 justify-end">
          {links.map((link: Link) => (
            <HeaderLink key={link.id} setSearchBar={setSearchBar} {...link}/>
          ))}
        </div>
      </nav>
      {searchBar && (
        <SearchInput />
      )}
    </div>
  );
};

export default Header;
