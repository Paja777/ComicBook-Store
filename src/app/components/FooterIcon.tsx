

interface FooterIconProps {
    title: string;
    description: string;
    image: string;
}

const FooterIcon = ({ image, title, description } : FooterIconProps) => {
  return (
    <div className=" flex flex-col  w-[500px] justify-center items-center mt-10 z-[99]">
        <img src={image} alt="icon" className="w-[50px] h-[50px]"/>
        <h5 className="font-semibold text-white text-[18px] text-center">
            {title}
        </h5>
        <p className="text-hero w-[64%] text-center">
            {description}
        </p>
    </div>
  )
}

export default FooterIcon