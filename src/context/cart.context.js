import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [ cartItems, setCartItems ] = useState([]);

    const createQuickEnquiry = (id) => {
        if(cartItems.includes(id)) {
            return;
        }
        else {
            setCartItems(prevItems => [...prevItems, id]);
        }
    }

    return (
        <CartContext.Provider value={{cartItems, setCartItems, createQuickEnquiry}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;