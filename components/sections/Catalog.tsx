import ProductCard from "../ProductCard";
// import keyboard1 from '@/assets/keyboard1.png'
// import keyboard2 from '@/assets/keyboard2.png'
// import keyboard3 from '@/assets/keyboard3.png'

const products = [
  {
    id: '1',
    imgSrc: '/assets/keyboard1.png',
    title: 'Magic Keyboard',
    price: 69.99,
    modelSrc: '/assets/keyboard.glb'
  },
  {
    id: '2',
    imgSrc: '/assets/keyboard2.png',
    title: 'Dragon Keyboard',
    price: 63.99,
    modelSrc: '/assets/keyboard2.glb'
  },
  {
    id: '3',
    imgSrc: '/assets/keyboard3.png',
    title: 'Gold Keyboard',
    price: 81.99,
    modelSrc: '/assets/keyboard3.glb'
  },
]

export type ProductType = {
  id: string,
  imgSrc: string,
  title: string,
  price: number,
  modelSrc: string
}

interface CatalogProps {
  selectedProduct?: ProductType;
  onProductClick: (product: ProductType) => void;
}

const Catalog = ({ selectedProduct, onProductClick }: CatalogProps) => {
  return (
    <div id='catalog'
      className="max-w-[1024px] mx-auto"
    >
      <h2 className="text-2xl font-semibold pl-3 md:pl-15 pb-15 text-center">
        <span className="animate-pulse">/ </span>
        Catalog
      </h2>

      <div className="w-full flex flex-col lg:flex-row gap-6 mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            index={index}
            title={product.title}
            imgSrc={product.imgSrc}
            price={product.price}
            isActive={selectedProduct?.id === product.id}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default Catalog