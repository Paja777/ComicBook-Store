

interface FooterIconProps {
    title: string;
    description: string;
    image: string;
}

const FooterIcon = ({ image, title, description } : FooterIconProps) => { 
  return (
    <div className=" flex flex-col  w-[95px] ss:w-[170px] sm:w-[250px] md:w-[350px] justify-center items-center sm:mt-10 z-[99]">
        <img src={image} alt="icon" className="w-[14px] h-[14px] ss:w-[20px] ss:h-[20px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]"/>
        <h5 className="font-semibold text-white text-[8px] ss:text-[9px] sm:text-[12px] md:text-[18px] text-center">
            {title}
        </h5>
        <p className="text-hero w-[64%] text-[8px] ss:text-[9px] sm:text-[12px] md:text-[18px] text-center">
            {description}
        </p>
    </div>
  )
}

export default FooterIcon