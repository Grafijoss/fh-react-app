import { FC, useState } from 'react'
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components'
import '../styles/custom-styles.css'
import { onChangeArgs, Product } from '../interfaces/interfaces'

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}
const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage: FC = () => {
  const [shopingCart, setShopingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    // console.log({ count, product })
    setShopingCart((oldShopingCard) => {
      if (count === 0) {
        // delete { ...oldShopingCard }[product.id]
        const { [product.id]: toDelete, ...rest } = oldShopingCard
        return rest
      }

      return {
        ...oldShopingCard,
        [product.id]: {
          ...product,
          count
        }
      }
    })
  }

  return (
    <div>
      <h1>Shopping Store</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={(evento) => onProductCountChange(evento)}
            value={shopingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-card">
        {Object.entries(shopingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            onChange={(evento) => onProductCountChange(evento)}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
              className="custom-buttons"
            />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>{JSON.stringify(shopingCart, null, 5)}</code>
      </div>
    </div>
  )
}
