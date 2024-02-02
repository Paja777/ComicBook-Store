import instagram from "../../assets/insta.svg";
import copyright from "../../assets/copyright.svg";

const CopyrightText = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-row gap-2 ml-36">
        <p className="text-hero">Copyright</p>
        <img src={copyright} alt="icon" />
        <p className="text-hero">2024. Paja All Rights Reserved.</p>
      </div>
      <img src={instagram} alt="icons" className="w-[210px] mr-48" />
    </div>
  );
};

export default CopyrightText;
