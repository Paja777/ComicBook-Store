import Devider from "../components/Devider";
import logo from "../../assets/logoipsum-329.svg";
import { footerData } from "../lib/data";
import FooterIcon from "../components/FooterIcon";
import CopyrightText from "../components/CopyrightText";

const Footer = () => (
  <div className="flex flex-col gap-8 z-[8] h-[400px]">
    <div className="flex justify-center">
      <Devider />
    </div>
    <div className="flex flex-row">
      <div className="flex justify-center items-center gap-5 mt-5 flex-col w-[50%]">
        <img src={logo} alt="logo" className="w-[150px] "/>
        <p className="text-hero w-[60%] leading-7 ml-20">
          "Comic books weave tales of heroes and villains through a dynamic
          fusion of art and narrative, offering readers immersive journeys into
          fantastical realms."
        </p>
      </div>
      <div className="flex flex-row flex-wrap ">
        {footerData.map((icon: any) => (
          <FooterIcon
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
