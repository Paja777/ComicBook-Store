import image from "../../assets/mostPopular.png";

const MostPopular = () => (
  <div className="flex h-[500px] flex-row justify-center items-center mt-10">
    <div className="">
      <p className="headline-hero font-poppins ">
        <span className="text-gradient">#2024</span> <br />{" "}
        <span className="text-white">
          Most <br />
        </span>
        <span className="text-gradient">Popular.</span>
      </p>
      <p className="text-hero w-[33%] mt-5">
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


      <img src={image} alt="section_popular" className="w-[500px] h-full"/>
    
  </div>
);

export default MostPopular;
