import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartStateButton = ({numberOfItems}) => {
    return (
        <Link to="/cart">
            <CartStateButtonStyled className="button">
                <span>>></span>
                <span>{numberOfItems || ""}</span>
            </CartStateButtonStyled>
        </Link>

    );
}

const CartStateButtonStyled = styled.button`
    background-color: var(--yellow);
    border-color: var(--yellow-border);

`;

export default CartStateButton;