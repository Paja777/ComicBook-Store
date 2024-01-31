import ProductCard from "./ProductCard"
import { products } from "../../app/api/constants"
import { Product } from "../../app/models/product"


const ProductList = () => (
    <div className="flex flex-row flex-wrap gap-3 ml-5 ">
        {products.map((product : Product) => (
            <ProductCard key={product.id} {...product}/>
        ))}
    </div>
  )


export default ProductList