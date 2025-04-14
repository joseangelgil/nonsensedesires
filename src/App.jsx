import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {

  const [cartDisplay, setCartDisplay] = useState('hidden')
  const [cartItems, setCartItems] = useState([])

  const showCart = () => {
    setCartDisplay('block')
  }

  const closeCart = () => {
    setCartDisplay('hidden')
  }

  const addItemToCart = (item) => {
    
    const newCartItems = [...cartItems]  
    let cartIncludesItem = newCartItems.find(cartItem => cartItem.name === item.name)

    if(!cartIncludesItem) {  
      setCartItems([...newCartItems, item])
    } else {
      newCartItems.forEach(cartItem => {
        if(cartItem.name === item.name) cartItem.count += 1
      })
      setCartItems(newCartItems)
    }    
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div>
      <Header onClick={showCart}/>
      <Main cartDisplay={cartDisplay} closeCart={closeCart} addItemToCart={addItemToCart} cartItems={cartItems} clearCart={clearCart}/>
      <Footer />
    </div>
  )
}

export default App
