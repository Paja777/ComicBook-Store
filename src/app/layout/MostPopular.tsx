import image from "../../assets/mostPopular.png";
import SeeDetails from "../components/SeeDetails";


const MostPopular = () => (
  <div className="flex h-[860px] flex-row gap-1 justify-center items-center mt-0 my-0 relative">
    <div className="w-[50%] z-[99] ">
      <h1 className="headline-hero font-poppins ">
        <span className="text-gradient">#2024</span> <br />{" "}
        <span className="text-white">
          Most <br />
        </span>
        <span className="text-gradient">Popular.</span>
      </h1>
      <p className="text-hero w-[54%] mt-5">
        "One Piece," a globally acclaimed manga, embarks on the epic journey of
        Monkey D. Luffy and his diverse crew of pirates as they navigate
        treacherous seas, seek the legendary One Piece treasure, and confront
        formidable foes in a richly imaginative world filled with adventure,
        camaraderie, and the pursuit of dreams. Eiichiro Oda's masterpiece
        combines intricate storytelling, vibrant characters, and intricate
        world-building, captivating readers with its enduring charm and
        suspenseful narratives.
      </p>   
    </div>
    <div className="absolute top-26 left-96 ml-28 translate-x-22 -translate-y-28">
    <SeeDetails />
    </div>
    <div className="z-[99]">
      <img
        src={image}
        alt="section_popular"
        className="w-[500px] h-full mt-0 mr-8 "
      />
    </div>
    <div className="radial-hero1 absolute z-[0] left-0 bottom-0 translate-y-[60%] translate-x-[-50%] opacity-6  opacity-80 " />
    <div className="radial-hero1 absolute z-[0] left-0 bottom-0 translate-y-[60%] translate-x-[50%] opacity-6  opacity-80 " />
    <div className="radial-hero1 absolute z-[0] left-0 bottom-0 translate-y-[60%] translate-x-[150%] opacity-6  opacity-80 " />
  </div>
);

export default MostPopular;
