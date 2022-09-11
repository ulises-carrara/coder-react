import Cart from "../componentes/Cart/Cart"
import CartVacio from "../componentes/Cart/CartVacio";
import { useContext } from 'react';
import {CartContext} from '../context/CartContext';


function Checkout (){
    const { cartProduct } = useContext(CartContext)
return(
    <>
    {cartProduct.length===0 ? <CartVacio/> : <Cart/> }


    
    </>
)

}

export default Checkout