import Item from '../Item/Item';

function ItemList ({dataProducts}){
    return(
        <>
         {dataProducts.map(product=> <Item key={product.id} data={product} />
       
         )}
     </>
    )
}
export default ItemList