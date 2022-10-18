import { ProductCard } from '../components/ProductCard';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    
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
            {/* <ProductCard product={product} >
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </ProductCard> */}
            
            {/* <ProductCard product={product} >
                <ProductCard.title />
                <ProductCard.image />
                <ProductCard.buttons />
            </ProductCard> */}

            <ProductCard product={product} >
                <ProductCard.title />
                <ProductCard.image />
                <ProductCard.buttons />
            </ProductCard>
        </div>
      </div>
   )
}