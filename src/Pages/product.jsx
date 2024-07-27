import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';

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
      {/* Render other product details here */}
    </div>
  );
};

export default Product;
