import './Cart.scss'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../Modal/Modal';
import db from "../../FirebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import { async } from '@firebase/util';


function Cart() {
    const { cartProduct, deleteProduct, deleteAll, precioTotal } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [succes, setSucces] = useState()

    const submitData = (e) => {
        e.preventDefault()
        pushData({ ...order, buyer: dataForm })
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, "ordenes")
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSucces(orderDoc.id)
        console.log("era un cero?", orderDoc);
    }

    const [order, setOrder] = useState({
        items: cartProduct.map((product) => {
            return {

                id: product.id,
                title: product.title,
                price: product.price

            }
        }),
        buyer: {},
        total: precioTotal
    })

    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const handleChange = (e) => {

        setDataForm({ ...dataForm, [e.target.name]: e.target.value })

    }

    return (
        <div className='cart-container'>
            <h1>Tu carrito</h1>
            {cartProduct.map((product) => {
                return (
                    <div className='item-cart-product' key={product.id}>

                        <img src={product.img} alt="" />

                        <div className='cart-detail'>
                            <h2>{product.title}</h2>
                            <p>Tamaño : XS</p>
                            <p>$ {product.price}</p>
                            <DeleteIcon onClick={() => deleteProduct(product)} />
                        </div>
                    </div>
                )
            })}
            <div className='btn_delete-all'>
                <button onClick={() => deleteAll()} className={"btn_delete_all"}>Eliminar todo</button>
                <button onClick={() => setShowModal(true)} className={"btn_delete_all"}>Pagar</button>
                <p>Total a pagar $ {precioTotal}</p>
            </div>


            {showModal &&
                <Modal title="Datos de de compra" close={() => setShowModal()} >
                    {succes ? (
                        <>
                        <h2>ID de su compra</h2>
                        <h3>{succes}</h3>
                        </>
                        ) : (
                            <form onSubmit={submitData}>
                                <h3>Ingrese su nombre</h3>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    value={dataForm.name}
                                    onChange={handleChange}
                                />
                                <h3>Ingrese su telefono</h3>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Telefono"
                                    value={dataForm.phone}
                                    onChange={handleChange}
                                />
                                <h3>Ingrese su E-mail</h3>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    value={dataForm.email}
                                    onChange={handleChange}
                                />
                                <button type='onSubmit'>Enviar</button>
                            </form>
                        )

                    }

                </Modal>
            }

        </div>

    )

}
export default Cart