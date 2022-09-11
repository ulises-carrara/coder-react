import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Item.scss'

function ItemCounter({setCantidad, productData}){
    const{addProductToCart, setCantidadCart}= useContext(CartContext)

    const [contador, setcontador]=useState(1)
    const suma = () =>{
        setcontador(contador+1)
    }
    const resta = () =>{
        setcontador(contador-1)
    }

    const onAdd=()=>{
        setCantidad(contador)
        addProductToCart(productData)
        setCantidadCart(contador)
    }

    return(
       <div className='contador'>
        <button onClick={suma}>+</button>
        <p>{contador}</p>
        <button onClick={resta}>-</button>
        <button onClick={onAdd}>Añadir al carrito</button>
        </div>
    )
}
export default ItemCounter