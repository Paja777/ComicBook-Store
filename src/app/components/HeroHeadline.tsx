import percentIcon from "../../assets/percent-icon.svg";
import "../../index.css";

const HeroHeadline = () => (
  <div className="z-[4] absolute left-4 md:left-28 top-4 md:top-24">
    <div className="grey-gradient w-full md:w-[320px] h-[30px] bg-gray-500 rounded-full flex items-center justify-start text-white">
      <img src={percentIcon} alt="icon" />
      <p>
        20% <span className="text-#A4A4A7">DISCOUNT</span> ON ALL{' '}
        <span>PRODUCTS</span>
      </p>
    </div>
    <p className="headline-hero font-poppins mt-2 md:mt-0 text-4xl md:text-[90px] lg:text-[90px] xl:text-[90px]">
      Find your <br />{' '}
      <span className="text-gradient">
        Favorite <br />
      </span>
      ComicBook.
    </p>
    <p className="text-hero w-full md:w-[31%] mt-5">
      An online comic book store offers a diverse collection of graphic novels,
      rare editions, and the latest superhero adventures, creating a digital
      haven for enthusiasts and collectors alike.
    </p>
  </div>
);

export default HeroHeadline;
