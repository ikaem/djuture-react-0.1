import React from "react";
import styled from "styled-components";
import OtherProduct from "./other-product.component";

const OtherProductsActual = ({ otherProducts, cartItems, addRemoveFromCart, createQuickEnquiry }) => {

    return (
    <OtherProductsActualStyled>
        {otherProducts.map(otherProduct => <li
        key={otherProduct.id} 
        className="other-products__item">
            <OtherProduct 
                otherProduct={otherProduct}
                cartItems={cartItems}
                addRemoveFromCart={addRemoveFromCart}
                createQuickEnquiry={createQuickEnquiry}
            />
        </li>)}
    </OtherProductsActualStyled>
    );
}

const OtherProductsActualStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    gap: 1rem;

    li {
        height: 100%;
    }

`;

export default OtherProductsActual;