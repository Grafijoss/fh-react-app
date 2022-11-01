import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces'

interface UseProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const useProduct = ({
  onChange,
  product,
  value = 0
}: UseProductArgs) => {
  const [counter, setCounter] = useState(0)

  // ? no reenderiza nuevamente
  const isControlled: MutableRefObject<boolean> = useRef(!!onChange)

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)

    // console.log('%calgo ', 'background: red')

    if (isControlled.current) {
      //! el signo ! le dice a typescript que no puede ser null
      // onChange!({ count: value, product })
      onChange!({ count: newValue, product })
    }

    setCounter(newValue)
    // onChange && onChange({ count: newValue, product })
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy
  }
}
