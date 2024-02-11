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
    setTimeout(() => setShowLoader(false), 2000)
  };
  return (
    <button
      onClick={() => {
        onHandleButtonClick();
        handleClick();
      }}
      className={`w-[${w}] h-${h} z-[100] gradient-bg  hover:scale-[1.05] text-primary font-normal  py-1 px-2 rounded transition`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
