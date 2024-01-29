import ProductCard from "./ProductCard"
import { products } from "../../app/api/constants"
import { Product } from "../../app/models/product"


const ProductList = () => (
    <div>
        {products.map((product : Product) => (
            <ProductCard {...product}/>
        ))}
    </div>
  )


export default ProductList