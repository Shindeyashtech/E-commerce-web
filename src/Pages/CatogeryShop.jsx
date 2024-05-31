import React, { useContext } from "react";
import "./CSS/shop-category.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from '../Components/item/item'; 

const CatogeryShop = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={props.banner} alt="ok"   />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span>
          Out of 36 Product
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-product">
       
          {all_product.map((item,i)=>{
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
              old_price={item.old_price}  ></Item> 
            } else {
              return null;
            } 
       })}
        
      </div>
<div className="shop-category-load">
  Explore More
</div>
    </div>
  );
};

export default CatogeryShop;
