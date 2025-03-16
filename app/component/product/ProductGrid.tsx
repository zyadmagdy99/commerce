import { Product } from '@/sanity.types'
import React from 'react'
import ProductItem from './ProductItem'
type productGridProps = {
products:Product[]
}
const ProductGrid = ({products}:productGridProps) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-5'>
      {products.map((product)=>(
        <ProductItem product={product} key={product._id}/>
      ))}
    </div>
  )
}

export default ProductGrid
