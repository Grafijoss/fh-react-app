import { useState } from 'react'
import { onChangeArgs, ProductInCart } from '../interfaces/interfaces'

export const useShopingCart = () => {
  const [shopingCart, setShopingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShopingCart((oldShopingCard) => {
      // const productIncart: ProductInCart = oldShopingCard[product.id] || {
      //   ...product,
      //   count: 0
      // }
      //* Si es mayor a 0
      //   if (Math.max(productIncart.count + count, 0) > 0) {
      //     productIncart.count += count

      //     return {
      //       ...oldShopingCard,
      //       [product.id]: productIncart
      //     }
      //   }

      //! Borrar producto usando desestructuración
      //   const { [product.id]: toDelete, ...rest } = oldShopingCard
      //   return rest

      if (count === 0) {
        // delete { ...oldShopingCard }[product.id]
        const { [product.id]: toDelete, ...rest } = oldShopingCard
        return rest
      }

      //* Si es mayor a 0
      return {
        ...oldShopingCard,
        [product.id]: {
          ...product,
          count
        }
      }
    })
  }

  return {
    shopingCart,
    onProductCountChange
  }
}
