import coverImg from "../../assets/hero cover.png";
import HeroHeadline from "../components/HeroHeadline";

const Hero = () => (
  <div className="relative h-[740px]">
    <img
      src={coverImg}
      alt="spiderman"
      className="absolute top-32 right-0 z-[0]"
    />
    <HeroHeadline />
    <div className="radial-hero absolute z-[3] left-100 top-0 translate-x-[135%] -translate-y-[40%]  opacity-60" />
    <div className="radial-hero1 absolute z-[4] left-100 top-0 translate-x-[100%] opacity-6 -translate-y-[30%] opacity-80 " />
  </div>
);

export default Hero;
