import { useState } from "react"

function Cart({ display, closeCart, cartItems, clearCart }) {

  const [count, setCount] = useState(0)

  const proceedToPayment = () => {
        
    const newCount = count+1
    if(count > 1) {
      setCount(0)
    } else {
      setCount(newCount)
    }
  }

  let total = 0

  for(const item of cartItems) {
    total+= item.price * item.count
  }

  return (
    <div className={`${display} w-full h-full bg-black/70 fixed top-0 right-0 left-0 bottom-0`}>
      <div className="w-[85%] h-[85%] max-w-[400px] max-h-[400px] bg-white rounded-xl opacity-100 absolute z-10 right-5 top-5 p-5">
        <h2 className="text-2xl">Shopping Cart</h2>
        <hr className="my-2"/>
        {cartItems.length > 0 && (
          <div className="mt-7 text-base max-h-[50%] overflow-auto">
            {cartItems.map(item => {
              return(        
                <div key={`${item.name}-${item.count}`} className="flex gap-1">   
                  <p>{item.count}<span className="text-sm">x</span></p>     
                  <div className="flex justify-between items-center flex-1">           
                    <p>{item.name}</p>
                    <p>${(item.price * item.count).toFixed(4).replace(/0+$/, '')}</p>
                  </div>
                </div>  
              )
            })}
            <hr className="my-3"/>
            <div className="flex justify-between items-center">                
                  <p>Total</p>
                  <p>${total.toFixed(4).replace(/0+$/, '')}</p>
                </div>
          </div>
        )}
        {cartItems.length > 0 && <h1 className='absolute bottom-17 left-[50%] translate-x-[-50%] text-4xl font-bold text-nowrap'>{count === 1 ? 'REALLY??? 😂' : count === 2 ? '🤣🤣🤣🤣🤣' : ''}</h1>}
        <div className="absolute bottom-5 flex justify-evenly w-full left-0 text-white text-base">
          <button className="rounded-3xl bg-black min-w-1/4 py-1 px-3 cursor-pointer" onClick={() => {clearCart(); setCount(0)}}>Clear Cart</button>
          <button className="rounded-3xl bg-green-900 min-w-1/4 py-1 px-3 cursor-pointer" onClick={proceedToPayment}>Proceed to Payment</button>
        </div>
        <p className="absolute top-1 right-4 text-xl cursor-pointer text-red-800 font-bold" onClick={() => {closeCart(); setCount(0)}}>x</p>
      </div>
    </div>
  )
}

export default Cart