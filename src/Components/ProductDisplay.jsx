import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const {product}= props;
    return (
    <div className='product_display'>
      <div className="left">
        <div className="img_list">
        <img src={product.image}  />
        <img src={product.image}  />
        <img src={product.image}  />
        <img src={product.image}  />
        </div>
        <div className="img">
            <img className='main_img' src={product.image}  />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="right_star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="right_prices">
          <div className="right_price_old">  ${product.old_price}</div>
          <div className="right-price-new">${product.new_price} </div>
        </div>
        <div className="right_desc">A lightweight, usually knitted, pullover shirt, close-fitting and will a round neckline and short sleeves, worn as an undershirt or outer garment </div>
      </div>
      <div className="right_size">
        <h1>Select Size</h1>
        <div className="right_size">
          <div>XS</div>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
      </div>   
      <button>ADD TO CART
      </button>
      <p className="right_category"><span>Category :</span> Women , T-Shirt, Crop Top </p>
      <p className="right_category"><span>Tag :</span> Modern, Latest</p>
     </div>
  )
}

export default ProductDisplay
