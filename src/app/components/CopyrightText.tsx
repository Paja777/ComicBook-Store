import instagram from "../../assets/insta.svg";
import copyright from "../../assets/copyright.svg";

const CopyrightText = () => {
  return (
    <div className="flex justify-between items-center ss:h-[50px] sm:h-[90px] md:h-[120px]">
      <div className="flex flex-row gap-2 text-[8px] ml-12 ss:text-[10px] ss:ml-16 sm:ml-24 md:ml-44 sm:text-[12px] md:text-[16px]"> 
        <p className="text-hero ">Copyright</p>
        <img src={copyright} alt="icon" className="ss:w-[10px] sm:w-[13px] md:w-[20px]"/>
        <p className="text-hero">2024. Paja All Rights Reserved.</p>
      </div>
      <img src={instagram} alt="icons" className="w-[60px] mr-12  ss:w-[100px] ss:mr-20 sm:w-[150px] md:w-[210px] sm:mr-28 md:mr-48" />
    </div>
  );
};

export default CopyrightText;
