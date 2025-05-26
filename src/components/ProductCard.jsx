function ProductCard({ image, name, price, addItemToCart }) {
  return (
    <div className='bg-gradient-to-b from-green-500 to-black w-60 h-90 rounded-xl text-center text-lg/15 text-white overflow-hidden shadow-lg/50 font-bold'>
      <img src={image} alt="product image" className="bg-white w-full h-1/2 border-b-green-900 border-b" loading="lazy"/>
      <p className="uppercase">{name}</p>
      <p>${price}</p>
      <button className='text-white hover:text-yellow-500 cursor-pointer' onClick={() => addItemToCart({'name': name, 'price': price, 'count': 1})}>Add to Cart</button>
    </div>    
  )
}

export default ProductCard