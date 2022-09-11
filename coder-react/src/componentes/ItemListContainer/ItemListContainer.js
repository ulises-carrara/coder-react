import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.scss"
import { collection, getDocs } from "firebase/firestore"
import db from '../../FirebaseConfig';


function ItemListContainer({ seccion }) {

    const [listProducts, setListProduct] = useState([])
    

    const getProduct = async()=>{
        const productCollection = collection(db, "1")
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) =>{
        let product = doc.data()
        product.id = doc.id
        return product

        })
       return productList
    }

    useEffect(() => {
        getProduct()
            .then((res) => {
                setListProduct(res);

            })
    }, [])



    return (
    <div>
         <h1 className="title">{seccion}</h1>
         <div className='ItemListContainer'> 
            <ItemList dataProducts={listProducts} />
            </div>
        </div>
    )
}

export default ItemListContainer