

interface ButtonProps {
    name: string,
    size: {w: string, h: string},
}

const Button = ({ name, size : { w, h } } : ButtonProps) => (
    <button className={`w-${w} h-${h} absolute bottom-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded`}>
    {name}
  </button>
  )


export default Button