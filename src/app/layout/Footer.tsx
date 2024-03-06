import Devider from "../components/Devider";
import logo from "../../assets/logoipsum-329.svg";
import { footerData } from "../lib/data";
import FooterIcon from "../components/FooterIcon";
import CopyrightText from "../components/CopyrightText";

const Footer = () => (
  <div className="flex flex-col gap-8 z-[8] sm:mt-4 h-[200px]  lg:h-[400px]"> 
    <div className="flex justify-center">
      <Devider />
    </div>
    <div className="flex flex-row">
      <div className="flex flex-col justify-start items-start ml-12 sm:items-center sm:ml-0 gap-5 mt-5  w-[60%]">
        <img src={logo} alt="logo" className="w-[40px] ss:w-[60px] sm:w-[80px] md:w-[130px] "/>
        <p className="text-hero w-[60%] text-[7px] ss:text-[9px] sm:text-[12px] leading-7 sm:ml-5 md:ml-10">
          "Comic books weave tales of heroes and villains through a dynamic
          fusion of art and narrative, offering readers immersive journeys into
          fantastical realms."
        </p>
      </div>
      <div className="flex flex-row flex-wrap ">
        {footerData.map((icon: any) => (
          <FooterIcon
            key={icon.title}
            image={icon.image}
            title={icon.title}
            description={icon.description}
          />
        ))}
      </div>
    </div>
    <div className="flex justify-center mt-10">
      <Devider />
    </div>
    <CopyrightText />
  </div>
);

export default Footer;
