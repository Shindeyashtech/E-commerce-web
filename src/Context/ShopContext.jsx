import React, { createContext } from 'react'

 import all_product from "../Components/Assets/all_product"
export const ShopContext= createContext(null);
 const ShopContextProvider=(prop)=>{
    const  contextValue={all_product}
    return(
        <ShopContext.Provider value={contextValue}>
            {this.props.children}
        </ShopContext.Provider>
    )
 }
 export default ShopContextProvider