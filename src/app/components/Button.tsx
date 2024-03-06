import { CircularProgress } from "@mui/material";
import { useState } from "react";

interface ButtonProps {
  name: string;
  size: { w: string; h: string };
  onHandleButtonClick: () => void;
}

const Button = ({ name, size: { w, h }, onHandleButtonClick }: ButtonProps) => {
  const [showLader, setShowLoader] = useState(false);
  const buttonText = showLader ? (
    <CircularProgress size={16} color="primary" />
  ) : (
    name
  );
  const handleClick = () => {
    setShowLoader((prev) => !prev);
    setTimeout(() => setShowLoader(false), 2000);
  };
  return (
    <button
      onClick={() => {
        onHandleButtonClick();
        handleClick();
      }}
      className={`  p-0.5 z-[100] text-[4px] gradient-bg  hover:scale-[1.05] text-primary font-normal 
      ss:p-1 ss:text-[6px] sm:py-0.5 sm:px-1.5 sm:text-[8px] md:text-[13px] md:w-[${w}] md:h-${h}  rounded transition`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
