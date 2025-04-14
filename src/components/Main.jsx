import ProductCard from './ProductCard'
import CustomerReview from './CustomerReview'
import Cart from './Cart'
import Leaf from '../assets/images/leaf.jpg'
import Twig from '../assets/images/twig.jpg'
import Tissue from '../assets/images/tissue.jpg'
import Water from '../assets/images/water.jpg'
import Cloud from '../assets/images/cloud.jpg'
import Pebble from '../assets/images/pebbles.jpg'

function Main({ cartDisplay, closeCart, addItemToCart, cartItems, clearCart }) {
  return (
    <main>        
      <div
        className='
          w-full
          flex
          justify-center
          items-center
          flex-col
          text-center
          mt-[150px]'>
        <p className='text-xl mt-2 text-green-900 font-bold'>In NonSenseDesireS you will find a countless of useless things!</p>
        <p className='text-xl mt-2 text-green-900 font-bold'>Our products will add no value at all to your life!</p>
        <p className='text-xl mt-2 text-green-900 font-bold'>Wait no more and start wasting your time with us!</p>
        <br />
        <p>*Now Special Offer 1x2: Take 1, pay 2!!!</p>
        <p>**Offer valid only until February 30.</p>
      </div>
      <div className='mt-20'>
        <h1 className='text-2xl text-green-900 font-bold text-center'>Check out our featured products</h1>  
        <hr className='border-green-900 mt-5 w-1/7 mx-auto'/> 
        <div 
          className='
            w-3/5
            mx-auto
            min-h-screen
            py-15
            grid
            gap-20
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            3xl:grid-cols-4
            items-center
            justify-items-center'
        >      
          <ProductCard 
            image={Water}
            name='Puddle of water'
            price={39.6143}
            addItemToCart={addItemToCart}/>
          <ProductCard 
            image={Tissue}
            name='Used tissue'
            price={29.991}
            addItemToCart={addItemToCart}/>
          <ProductCard 
            image={Twig}
            name='Twig'
            price={67.012}
            addItemToCart={addItemToCart}/>
          <ProductCard 
            image={Leaf}
            name='Lemon leaf'
            price={75.11}
            addItemToCart={addItemToCart}/>
          <ProductCard 
            image={Cloud}
            name='Cloud'
            price={1037.09}
            addItemToCart={addItemToCart}/>
          <ProductCard 
            image={Pebble}
            name='Pebble'
            price={102.02}
            addItemToCart={addItemToCart}/>
        </div>    
      </div>      
      <div className='mt-20'>
        <h1 className='text-2xl text-green-900 font-bold text-center'>See what our customers say about us</h1>  
        <hr className='border-green-900 mt-5 w-1/7 mx-auto'/> 
        <div 
          className='
            w-3/5
            mx-auto
            min-h-screen
            py-15
            flex
            flex-col
            items-start
            justify-start'
        > 
          <CustomerReview 
            name='user0215'
            rating={5}
            description="I bought 1 puddle of water and pay for 2!!! 
            The puddle arrived almost evaporated, and it ended up evaporating completely 2 minutes after the delivery! Best buy ever!"/>            
          <CustomerReview 
            name='user0651'
            rating={5}
            description="I'm in love with my twig! it broke during the delivery! 
            But fortunately, you still can not do anything with it! I'll buy it again without hesitation!"/>
          <CustomerReview 
            name='user3512'
            rating={4}
            description="I received my lemon leaf yesterday and I must say I'm a bit disapointed. 
            The add promise that you cannot do anything with it, but you can smell it. This is why I only give it 4 stars.
            Apart from that you can't do much with it, so it's fine. If you don't care about being able to smell it, I recommend it!"/>
          <CustomerReview 
            name='user0999'
            rating={2}
            description='My tissue does not look like the add at all. Mine was not dirty enough. 
            You should take more care of these details. 2 stars.'/>
        </div>    
      </div>      
      <Cart display={cartDisplay} closeCart={closeCart} cartItems={cartItems} clearCart={clearCart}/>
    </main>
  )
}

export default Main