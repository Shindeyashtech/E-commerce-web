import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
<<<<<<< HEAD
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
=======

>>>>>>> a0ef8fb7afad6cfd6ff6cac16d9e9fa1c8e8f313
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_product.find((e) => e.id === Number(productID));

  if (!product) {
    console.error(`Product with ID ${productID} not found`);
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumb product={product} />
<<<<<<< HEAD
      <ProductDisplay product={product}/>
=======
      {/* Render other product details here */}
>>>>>>> a0ef8fb7afad6cfd6ff6cac16d9e9fa1c8e8f313
    </div>
  );
};

export default Product;
