import React from "react";
import styled from "styled-components";

import ContinueShoppingButton from "../elements/continue-shopping.button";

const EnquirySupport = ({ cartSummaryItems, user }) => {
    return (
    <EnquirySupportStyled className="enquiry__support-info">
        <section className="support-info__cart-overview">
            <h2>
                <span>>></span>
                Košarica
            </h2>
            <ul className="cart-overview__items">

                {cartSummaryItems.map(item => {
                    return (
                    <li 
                        key={item.id}
                        className="cart-overview__item">
                        <span>{item.title}</span>
                        <ul>
                        {Array(item.condition).fill().map((_, index) => {
                            return <li key={index} style={{display: "inline-block"}}>*</li>
                        })}
                        </ul>
                    </li>
                    );
                })}
            </ul>
        </section>

        <section className="support-info__buyer-overview">
            <h2>
                <span>>></span>
                Podaci o kupcu
            </h2>
            <div className="buyer-overview__details">
                <span>Ime:</span>
                <span>{user.name}</span>
                <span>Email:</span>
                <span>{user.email}</span>
            </div>
        </section>

        <div className="support-info__continue-shop-button-wrapper">
            <ContinueShoppingButton />
        </div>

    </EnquirySupportStyled>
    );
}

const EnquirySupportStyled = styled.div`
    display: flex;
    flex-direction: column;

    > section {
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: var(--lighter-light);
        box-shadow: 0 2px 5px var(--dark-light);
        color: rgb(101, 101, 101);


        h2 {
            font-size: 0.9rem;
            font-weight: 400;
            text-transform: uppercase;
            padding-bottom: 0.2rem;
            border-bottom: 1px solid var(--red);
            margin-bottom: 1rem;
        }
    }

    .support-info__cart-overview .cart-overview__item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgb(221, 221, 221);
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }

        > span:last-child {
            justify-self: end;
        }

    }

    .support-info__buyer-overview > .buyer-overview__details {
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        gap: 0.5rem 2rem;
    }

    .support-info__continue-shop-button {
        border-color: var(--darker-light);
        color: var(--darker-light);
        /* display: block; */
        width: 100%;
        margin-top: 1rem;
    }

`;

export default EnquirySupport;