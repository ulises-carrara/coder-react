import './ItemDetail.scss'
import ItemCounter from '../Item/ItemCounter'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function ItemDetail({ data }) {
    const { img, title, price } = data

 const [cantidad, setCantidad]=useState(0)

    return (
        <div className="detailContainer">

            <div className="detailimg">
                <img src={img} alt="producto" />
            </div>
            <div className="detailbody">
            <fieldset>
                <h2>{title}</h2>
                <span>$ {price}</span>
                <div className="detailtalla">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
                

                {cantidad > 0 ?  <button><Link to={'/Cart'}>Finalizar compra</Link></button> : <ItemCounter productData={data} setCantidad={setCantidad}/>}

                    
                    
                </fieldset>
            </div>
        </div>
    )
}
export default ItemDetail