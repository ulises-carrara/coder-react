import { createContext, useState } from "react";

const CartContext = createContext()
const CartProvider =({children})=>{
    const[cartProduct, setCartProduct ]=useState([])
    const[ totalProducts, setTotalProducts]=useState(0)
    const[ precioTotal, setPrecioTotal]=useState(0)
    

    const addProductToCart =(product)=>{
        let isInCart=cartProduct.find(cartitem => cartitem.id===product.id)
        if(!isInCart){
            setPrecioTotal(precioTotal + product.price)
            setTotalProducts(totalProducts+1)
            return setCartProduct(cartProduct=>[...cartProduct, product])
        }
    }
    const deleteProduct = (product) =>{
        setPrecioTotal(precioTotal - product.price)
        setTotalProducts(totalProducts-1)
        setCartProduct(cartProduct.filter((productCart)=>productCart.id !==product.id))
    }

    const deleteAll=()=>{
        setCartProduct([])
        setTotalProducts(0)
        setPrecioTotal(0)
    }
    
    const data ={
        cartProduct,
        setCartProduct,
        addProductToCart,
        totalProducts,
        deleteProduct,
        deleteAll,
        precioTotal
       
    }

 
    return(
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  
)

}
export default CartProvider
export {CartContext }