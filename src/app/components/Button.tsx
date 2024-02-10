

interface ButtonProps {
  name: string;
  size: { w: string; h: string };
  onHandleButtonClick: () => void;
}

const Button = ({ name, size: { w, h }, onHandleButtonClick }: ButtonProps) => {
  
  return (
    <button
    onClick={onHandleButtonClick}
      className={`w-[${w}] h-${h}  gradient-bg  hover:scale-[1.05] text-primary font-normal  py-1 px-2 rounded transition`}
    >
      {name}
    </button>
  );
};

export default Button;
