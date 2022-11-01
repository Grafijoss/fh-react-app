import { FC } from 'react'
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components'
import '../styles/custom-styles.css'

import { useShopingCart } from '../hooks/useShopingCart'
import { products } from '../data/products'

export const ShoppingPage: FC = () => {
  const { onProductCountChange, shopingCart } = useShopingCart()

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
