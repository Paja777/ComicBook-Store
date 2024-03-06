import image from "../../assets/mostPopular.png";
import SeeDetails from "../components/SeeDetails";


const MostPopular = () => (
  <div className="flex ml-2 h-[340px] ss:h-[500px] sm:h-[660px] md:h-[860px] flex-row gap-1 ss:ml-4 justify-center 
  items-center mt-0 my-0 ">
    <div className="w-[50%] z-[99] relative">
      <h1 className="headline-hero text-[20px] ss:text-[40px] sm:text-[60px] md:text-[80px] font-poppins ">
        <span className="text-gradient">#2024</span> <br />{" "}
        <span className="text-white">
          Most <br />
        </span>
        <span className="text-gradient">Popular.</span>
      </h1>
      <p className="text-hero text-[8px] mt-2 ss:text-[12px] sm:text-[14px] md:text-[18px] w-[80%] ss:w-[64%] sm:mt-5">
        "One Piece," a globally acclaimed manga, embarks on the epic journey of
        Monkey D. Luffy and his diverse crew of pirates as they navigate
        treacherous seas, seek the legendary One Piece treasure, and confront
        formidable foes in a richly imaginative world filled with adventure,
        camaraderie, and the pursuit of dreams. Eiichiro Oda's masterpiece
        combines intricate storytelling, vibrant characters, and intricate
        world-building, captivating readers with its enduring charm and
        suspenseful narratives.
      </p>   
    <div className="absolute top-32 right-1 ss:top-36 ss:left-16 sm:top-36 sm:left-36 md:top-36 md:left-60 ml-28 translate-x-22 -translate-y-28">
    <SeeDetails />
    </div>
    </div>
    <div className="z-[99]">
      <img
        src={image}
        alt="section_popular"
        className="w-[150px] ss:w-[240px] ss:h-full sm:w-[340px] sm:h-full md:w-[500px] md:h-full mt-0 mr-8 "
      />
    </div>
    <div className="radial-hero1 absolute z-[0] left-0 bottom-0 translate-y-[60%] translate-x-[-50%] opacity-6  opacity-80 " />
    <div className="radial-hero1 absolute z-[0] left-0 bottom-0 translate-y-[60%] translate-x-[50%] opacity-6  opacity-80 " />
    <div className="radial-hero1 absolute z-[0] left-0 bottom-0 translate-y-[60%] translate-x-[150%] opacity-6  opacity-80 " />
  </div>
);

export default MostPopular;
