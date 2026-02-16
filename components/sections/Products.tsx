'use client'

import React, { useState } from 'react'
import Catalog, { ProductType } from './Catalog'
import Preview from './Preview'

const Products = () => {

  const [selectedProduct, setSelectedProduct] = useState<ProductType>(
    {
      id: '1',
      imgSrc: '/assets/hero.png',
      title: 'Magic Keyboard',
      price: 69.99,
      modelSrc: 'assets/keyboard.glb'
    }
  )

  function handleProductClick(product: ProductType) {
    setSelectedProduct(product)
  }

  return (
    <div
      id='preview'
      className='max-w-[1536px] flex flex-col mx-auto pt-9 justify-center items-center'
    >
      <Catalog
        selectedProduct={selectedProduct}
        onProductClick={handleProductClick}
      />
      <Preview
        selectedProduct={selectedProduct}
      />
    </div>
  )
}

export default Products