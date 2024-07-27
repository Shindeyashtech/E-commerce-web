import React from 'react';
import './Breadcrumb.css';
import arrow_icon from './breadcrum_arrow.png';

const Breadcrumb = ({ product }) => {
  if (!product) {
    console.error('Product prop is undefined or null');
    return <div className="breadCrumb">Product not found</div>;
  }

  return (
    <div className="breadCrumb">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  );
};

export default Breadcrumb;
