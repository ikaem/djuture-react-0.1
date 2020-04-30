import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { CartContext } from "../context/cart.context";

import CartActual from "../components/cart-actual.component";
import CartSummary from "../components/cart-summary.component";
import PageTitle from "../components/page-title.component";

// temp db

import { products as fakeProducts } from "../assets/fakeDB";

const Cart = () => {

    const { cartItems, setCartItems } = useContext(CartContext);
    const [ fullCartItems, setFullCartItems ] = useState([]);

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item !== id));
    }

    useEffect(() => {
        const items = fakeProducts.filter(product => {
            return cartItems.includes(product.id);
        // }).map(({photos, title}) => ({photo: photos[0], title}))
        }).map(({ id, photos, title, condition }) => ({
            id, photo: photos[0], title, condition
        }))

        console.log("items", items)
        setFullCartItems(items);

    }, [cartItems, setFullCartItems]);

    console.log(fullCartItems);

    return (
    <CartStyled>
        <div className="cart__page-title-wrapper">
            <PageTitle title={"Košarica"}/>
        </div>
        <div className="cart__cart-actual-wrapper">
            <CartActual 
                fullCartItems={fullCartItems}
                removeitem={removeItem}
            />
        </div>
        <div className="cart__cart-summary-wrapper">
            <CartSummary />
        </div>
    </CartStyled>
    );
}

const CartStyled = styled.main`
    margin: 1rem 1rem 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    .cart__page-title-wrapper {
        margin-bottom: 1rem;
    }

`;

export default Cart;