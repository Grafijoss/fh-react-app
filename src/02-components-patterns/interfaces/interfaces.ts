import { Props as ProducCardProps } from '../components/ProductCard'
import { Props as ProducCardButtons } from '../components/ProductButtons'
import { Props as ProducCardImage } from '../components/ProductImage'
import { Props as ProducCardTitle } from '../components/ProductTitle'

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductContextHOCProps {
  ({ children, product }: ProducCardProps): JSX.Element
  Title: (Props: ProducCardTitle) => JSX.Element
  Image: (Props: ProducCardImage) => JSX.Element
  Buttons: (Props: ProducCardButtons) => JSX.Element
}

export interface onChangeArgs {
  product: Product
  count: number
}
