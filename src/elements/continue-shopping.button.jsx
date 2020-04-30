import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContinueShoppingButton = () => {
    return (
    <ButtonStyled>
        <Link to="/">
            Nastavi s kupovinom
        </Link>
    </ButtonStyled>
    );
}

const ButtonStyled = styled.div`

    background-color: transparent;
    border: 1px solid;
    border-radius: 3px;
    padding: 0.3rem 1rem 0.2rem;
    font-weight: 700;
    cursor: pointer;
    border-color: var(--darker-light);
    text-align: center;

    > a {
        color: var(--darker-light);
        font-size: 0.9rem;
    }
`;

export default ContinueShoppingButton;