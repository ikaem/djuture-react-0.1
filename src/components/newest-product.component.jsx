import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CreateEnquiryButton from "../elements/create-enquiry.button";

// temp product image only
import productImage from "../assets/static/images/ps3.jpg"

const NewestProduct = ({ newestProduct, cartItems, addRemoveFromCart, createQuickEnquiry }) => {

    const {
        condition, 
        description, 
        id, 
        title, 
        photos
    } = newestProduct;

    return (
    <NewestProductStyled className="newest-product__actual-product">
        <div className="actual-product__image-container">
            <img src={photos[0]} alt="dummy product"/>
        </div>
        <div className="actual-product__info-container">
            <Link to={`/product/${id}`}>
                <h2 className="actual-product__title">{title}</h2>
            </Link>
            <ul>
                {
                    new Array(Number(condition)).fill().map((val, i) => {
                        return <li key={i}>*</li>
                    })
                }
            </ul>
            <p>{description.slice(0, 100)} ...</p>

            {/* <button className="actual-product__send-enquiry-button button">Pošalji upit</button> */}

            <div className="actual-product__send-enquiry-button-wrapper">
                <CreateEnquiryButton 
                    id={id} 
                    createQuickEnquiry={createQuickEnquiry}
                />
            </div>


            <button 
                onClick={() => addRemoveFromCart(id)}
                className="actual-product__add-to-cart-button button">
                    {cartItems.includes(id)? `Makni iz košarice`: `Dodaj u košaricu`}
                </button>
        </div>
    </NewestProductStyled>
    );
}

const NewestProductStyled = styled.article`
    height: 30rem;
    position: relative;

    .actual-product__image-container {
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .actual-product__info-container {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(to bottom, transparent 30%, black);
        color: var(--lighter-light);
        justify-content: flex-end;

        > a {
            align-self: flex-start;

            .actual-product__title {
                color: white;
                font-size: 1.6rem;
                margin-bottom: 0.5rem;
                text-shadow: var(--light-shadow);
                display: inline-block;
            }
        }

        ul {
            display: flex;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 1rem;
            text-shadow: var(--light-shadow);
        }

        .actual-product__send-enquiry-button {
            font-size: 0.9rem;
            background-color: var(--yellow);
            border-color: var(--yellow-border);
            margin-bottom: 1rem;
        }

        .actual-product__send-enquiry-button-wrapper {
            margin-bottom: 1rem;
        }

        .actual-product__add-to-cart-button {
            font-size: 0.9rem;
            background-color: transparent;
            border-color: var(--yellow-border);
            color: var(--yellow);
        }
    }
`;

export default NewestProduct;