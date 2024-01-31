import percentIcon from '../../assets/percent-icon.svg'


const HeroHeadline = () => (
  <div className="w-[300px] h-[30px] bg-gray-500 rounded-full justify-center items-center">
    <img src={percentIcon} alt='icon' />
    <p>
      20% <span>DISCOUNT</span> ON ALL <span>PRODUCTS</span>
    </p>
  </div>
);

export default HeroHeadline;
