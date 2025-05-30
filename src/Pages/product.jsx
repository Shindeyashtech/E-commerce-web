import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
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
      <ProductDisplay product={product}/>
    </div>
  );
};

export default Product;
