import SalesBanner from '@/app/component/layout/SalesBanner'
import ProductGrid from '@/app/component/product/ProductGrid'
import { getCategoryBySlug, getProductByCategorySlug } from '@/sanity/lib/client'
import React from 'react'
type Props = {
  params: Promise<{slug: string}>
}

const page = async({params}:Props) => {
    const {slug} = await params
    const [category,products] = await Promise.all([
        getCategoryBySlug(slug),
        getProductByCategorySlug(slug)
    ])
  return (
    <div>
    <SalesBanner/>

    <div className='bg-red-50 p-4'>
        <div className='container mx-auto'>
            <h1 className='text-2xl md:text-3xl font-bold text-center text-red-600 mb-2'>{category.title} - UP TO 90% OFF! 🔥</h1>
            <p className='text-center text-red-500 text-sm md:text-base animate-pulse'>⚡️ Flash Sale Ending Soon! ⏰ Limited Time Only</p>
            <p className='text-center text-gray-600 text-xs mt-2'>{category.description}</p>
        </div>
    </div>

    <div className='bg-yellow-50 py-3'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-center gap-4 text-sm'>
                <div className='flex items-center gap-2'>
                    <span className='text-yellow-600'>🚚</span>
                    <span>Free Shipping</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-yellow-600'>⭐️</span>
                    <span>Top Rated</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-yellow-600'>💰</span>
                    <span>Best Prices</span>
                </div>
            </div>
        </div>
    </div>

    <section className='container mx-auto py-8'>
        <div className='text-center mb-8'>
            <p className='text-sm text-gray-500'>🎉 {products.length} Amazing Deals Available Now!</p>
        </div>

        <ProductGrid products={products} />
    </section>
</div>
  )
}

export default page
