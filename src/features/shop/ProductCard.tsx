import { Product } from "../../app/models/product"

const ProductCard = ({ id, name, description, price} : Product) =>  (
    <div className="w-[35px] h-[50px] border border-gray-400 justify-center">{name}</div>
  )


export default ProductCard