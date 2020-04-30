import React from "react";
import styled from "styled-components";

import productImage from "../assets/static/images/ps3.jpg";

const CartActual = ({ fullCartItems, removeitem }) => {
    return (
    <CartActualStyled>
        {/* <h2 className="cart__actual__label">
            <span>>></span>
            Košarica
        </h2> */}
        <div className="cart-actual__container">
            <div className="container__labels">
                <span>Proizvod</span>
                <span>Stanje</span>
            </div>
            <ul className="container__cart-items">

                {
                    fullCartItems.map(item => {
                        return (
                        <li key={item.id}>
                            <article className="container__cart-item">
                                <div className="cart-item__product">
                                    <div className="product__image-container">
                                        <img src={item.photo} alt="product"/>
                                    </div>
                                    <h3 className="product__name">
                                        {item.title}
                                    </h3>
                                </div>
                                <ul className="cart-item__condition">
                                    <li>*</li>
                                    <li>*</li>
                                    <li>*</li>
                                    <li>*</li>
                                </ul>
                                <button 
                                    onClick={() => removeitem(item.id)}
                                    className="cart-item__remove">
                                        <span>>></span>
                                        Ukloni
                                </button>
                            </article>
                        </li>
                        );
                    })
                }



                {/* <li>
                    <article className="container__cart-item">
                        <div className="cart-item__product">
                            <div className="product__image-container">
                                <img src={productImage} alt="product"/>
                            </div>
                            <h3 className="product__name">
                                PlayStation 3 30GB
                            </h3>
                        </div>
                        <ul className="cart-item__condition">
                            <li>*</li>
                            <li>*</li>
                            <li>*</li>
                            <li>*</li>
                        </ul>
                        <button className="cart-item__remove">
                            <span>>></span>
                            Ukloni
                        </button>
                    </article>
                </li> */}
            </ul>
        </div>
    </CartActualStyled>
    );
}

const CartActualStyled = styled.section`
    margin-bottom: 1rem;

    /* > h2 {
        font-size: 1.5rem;
    } */

    .cart-actual__container {
        /* padding: 1rem; */
        /* margin-top: 1rem; */
        /* background-color: var(--lighter-light); */
        /* box-shadow: 0 2px 5px var(--dark-light); */

        .container__labels {
            display: flex;
            padding-bottom: 0.2rem;
            border-bottom: 1px solid var(--red);
            margin-bottom: 1rem;
            font-size: 0.9rem;
            text-transform: uppercase;
            color: rgb(101, 101, 101);


            > span:first-child {
                width: 70%;
            }
            > span:last-child {
                width: 30%;
                padding-left: 1rem;
                text-align: right;
            }
        }
    }

    .container__cart-items {

        > li:last-of-type > .container__cart-item {
            margin-bottom: 0;
        }

        .container__cart-item {
            display: grid;
            grid-template-columns: 70% 30%;
            align-items: center;
            padding-bottom: 0.0rem;
            border-bottom: 1px solid var(--dark-light);
            margin-bottom: 1rem;

            .cart-item__product {
                display: flex;
                align-items: center;

                .product__image-container {
                    width: 5rem;
                    margin-right: 1rem;
                    /* align-self: flex-start; */

                    img {
                        display: block;
                        width: 100%;
                    }
                }

                > h3 {
                    /* flex-grow: 2; */
                    color: var(--blackbrown);
                }
            }

            .cart-item__condition {
                display: flex;
                justify-self: end;
                padding-left: 1rem;
            }

            .cart-item__remove {
                display: block;
                grid-column: 2;
                justify-self: end;
                text-align: left;
                padding: 0 0 0.1rem;
                /* margin-left: 1rem; */
                /* width: 5rem; */
                border: none;
                background-color: transparent;
                font-size: 0.75rem;
                text-transform: uppercase;
                color: var(--darker-light);
                cursor: pointer;
            }
        }
    }
`;



export default CartActual;