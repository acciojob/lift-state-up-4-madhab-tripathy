import React, { useState } from "react";
import Child from "./Child"

const Parent = ()=>{
    const [cartItems,setCartItems] = useState([]);
    const [itemId,setItemId] = useState(1);

    function addItem(){
        const item = document.getElementById('itemName').value;
        const price = document.getElementById('itemPrice').value;
        setItemId(itemId+1);
        let cart = [...cartItems,{id:itemId,itemName:item,itemPrice:price}];
        setCartItems(cart);
    }
    // console.log(cartItems);
    // console.log(itemId);
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <div className="parent-elements">
                <label>Item Name:</label>
                <input type="text" id="itemName" />
                <label>Item Price:</label>
                <input type="number" id="itemPrice" />
                <button onClick={addItem}>Add Item</button>
            </div>
            <Child getCartItems={cartItems}
                   setCartItemsFn = {setCartItems} 
            />
        </div>

    )
}
export default Parent;