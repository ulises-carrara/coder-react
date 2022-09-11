import './Cart.scss' 
import {Link} from 'react-router-dom'

function CartVacio (){
return(
     <div className="empty_cart">
    <h1>El carrito esta vacio</h1>
    <Link to="/"><button>Inicio</button></Link>
    </div>
)
   
}
export default CartVacio