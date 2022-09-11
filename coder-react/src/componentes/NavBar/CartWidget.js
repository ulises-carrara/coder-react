import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './NavBar.scss'
import DeleteIcon from '@mui/icons-material/Delete';


export default function BasicMenu() {

  const { cartProduct, deleteProduct, deleteAll, totalProducts } = useContext(CartContext)



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='cart-button' style={{display:cartProduct.length === 0 ? "none" : ""}}>

      <p style={{display:cartProduct.length === 0 ? "none" : ""}}>{totalProducts}</p>

     <ShoppingCartOutlinedIcon
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       />
       
     
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {cartProduct.map((product) => {
          return (
            <div className='item-cart-product' key={product.id}>
              <img src={product.img} alt="" />
              <div className='cart-product__details'>
                <p>{product.title}</p>
                <p>Tamaño : XS</p>
               
              </div>
              <div className='cart-product__details'>
                <p>$ {product.price}</p>
              </div>
              <div className='cart-product__action' >
                <DeleteIcon onClick = {()=>deleteProduct(product)}/>
              </div>
            </div>
          )
        })}
        <button onClick={()=>deleteAll()} className={"btn_delete_all"}>Eliminar todo</button>
      </Menu>
    </div>
  );
}

