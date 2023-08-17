import React from 'react';

const Child = ({getCartItems,setCartItemsFn})=>{
    function removeItem(id){
        let filterItem = getCartItems.filter(ele => ele.id !== id);
        setCartItemsFn([...filterItem]);
    }
    return(
        <div className="child">
            <h2>Child Component</h2>
            <ul>
                {
                    getCartItems.map((ele,idx)=>
                        <li key={idx}>
                            {ele.itemName} - ${ele.itemPrice} 
                            <button onClick={()=>{removeItem(ele.id)}}>Remove</button>
                        </li>
                    )
                }
            </ul>
            
            
        </div>
    )
}
export default Child;
