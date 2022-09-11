import './Item.scss'
import {Link} from 'react-router-dom'

function Item({ data }) {
    const { img, title, price, id } = data

    return (
        
            <div className="card">
                <Link to={`/Productos/${id}`}>
                <img src={img} alt="producto" />
                <h2>{title}</h2>
                <span>$ {price}</span>
                </Link>
                
            </div>
        
    );
}

export default Item