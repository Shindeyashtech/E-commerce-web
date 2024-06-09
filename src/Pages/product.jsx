import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productID} = useParams();
  const Product = all_product.find((e)=> e.id === Number(productID));
   
  return (
    <div>
      
    </div>
  )
}

export default Product
