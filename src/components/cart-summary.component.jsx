import React from "react";
import styled from "styled-components";

import ContinueShoppingButton from "../elements/continue-shopping.button";

const CartSummary = () => {
    return (
    <CartSummaryStyled>
        <h3>Sažetak</h3>
        <div className="cart-summary__details">
            <span>Ukupno proizvoda:</span>
            <span>3</span>
            <span>Ukupno stanje:</span>
            <span>10/10</span>
        </div>
        <button className="cart-summary__enquiry-prepare-button button">Pripremi upit</button>
        <hr/>


        {/* <button className="cart-summary__continue-shop-button button">Nastavi s kupovinom</button> */}

        <div className="cart-summary__continue-shop-button-wrapper">
            <ContinueShoppingButton />
        </div>


    </CartSummaryStyled>
    );
}

const CartSummaryStyled = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--lighter-light);
    box-shadow: 0 2px 5px var(--dark-light);

    > h3 {
        font-size: 1.1rem;
        color: var(--blackbrown);
        padding-bottom: 0.2rem;
        border-bottom: 1px solid var(--red);
        margin-bottom: 1rem;
    }

    .cart-summary__details {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.5rem 0;
        color: var(--blackbrown);
        margin-bottom: 1rem;

        > :nth-child(even) {
            justify-self: end;
        }
    }

    .cart-summary__enquiry-prepare-button {
        background-color: var(--yellow);
        border-color: var(--yellow-border);
        font-size: 0.9rem;
    }

    hr {
        width: 100%;
        height: 1px;
        border: none;
        margin: 1rem 0;
        background-color: white;
    }

    .cart-summary__continue-shop-button {
        background-color: transparent;
        border-color: var(--darker-light);
        font-size: 0.9rem;
        color: var(--darker-light);
    }
`;

export default CartSummary;