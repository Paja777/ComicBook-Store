import percentIcon from "../../assets/percent-icon.svg";
import "../../index.css";

const HeroHeadline = () => (
  <div className="z-[4] absolute left-4  sm:left-16 md:left-28 top-4 md:top-24">
    <div className="discount-badge">
      <img src={percentIcon} alt="icon" />
      <p>
        20% <span className="text-#A4A4A7">DISCOUNT</span> ON ALL{' '}
        <span>PRODUCTS</span>
      </p>
    </div>
    <p className="headline-hero font-poppins mt-2 md:mt-0 text-3xl sm:text-[60px] md:text-[90px] lg:text-[90px] xl:text-[90px]">
      Find your <br />{' '}
      <span className="text-gradient">
        Favorite <br />
      </span>
      ComicBook.
    </p>
    <p className="text-hero text-[14px] w-[75%] ss:w-[60%] sm:text-[16px]  md:text-[22px] md:w-[40%] mt-5">
      An online comic book store offers a diverse collection of graphic novels,
      rare editions, and the latest superhero adventures, creating a digital
      haven for enthusiasts and collectors alike.
    </p>
  </div>
);

export default HeroHeadline;
