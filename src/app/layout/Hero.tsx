import coverImg from "../../assets/hero cover.png";
import HeroHeadline from "../components/HeroHeadline";

const Hero = () => (
  <div className="relative top-11 h-[360px] sm:h-[450px] md:h-[740px]">
    <img
      src={coverImg}
      alt="spiderman"
      className="absolute top-20 right-0 md:top-32 md:right-0 z-[0]"
    />
    <a
      className="absolute z-[999] text-red-500 font-extrabold left-96 text-[2rem]"
      href="https://github.com/Paja777/ComicBook-Store"
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer"
    >
      {"-->"}Github repo for commic-store
    </a>
    <HeroHeadline />
    <div className="radial-hero absolute z-[3] left-100 top-0 translate-x-[135%] -translate-y-[40%]  opacity-60" />
    <div className="radial-hero1 absolute z-[4] left-100 top-0 translate-x-[100%] opacity-6 -translate-y-[30%] opacity-80 " />
  </div>
);

export default Hero;
