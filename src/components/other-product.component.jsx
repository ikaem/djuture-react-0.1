import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// temp product image only
import productImage from "../assets/static/images/ps3.jpg"
import CreateEnquiryButton from "../elements/create-enquiry.button";

const OtherProduct = ({ otherProduct, cartItems, addRemoveFromCart, createQuickEnquiry }) => {
    const {
        condition, 
        description, 
        id, 
        title, 
        photos
    } = otherProduct;

    return (
    <OtherProductStyled className="other-product__actual-product">
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
        </div>
        {/* <button 
            onClick={() => createQuickEnquiry(id)}
            className="actual-product__send-enquiry-button button">Pošalji upit</button> */}

        <div 
            className="actual-product__send-enquiry-button-wrapper">
            <CreateEnquiryButton 
                createQuickEnquiry={createQuickEnquiry}
                id={id}
            />
        </div>

        <button 
            onClick={() => addRemoveFromCart(id)}
            className="actual-product__add-to-cart-button button">
                {cartItems.includes(id)? `Makni iz košarice`: `Dodaj u košaricu`}
            </button>
    </OtherProductStyled>
    );
}

const OtherProductStyled = styled.article`
    background-color: var(--lighter-light);
    box-shadow: var(--light-shadow);
    border-radius: 3px;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    .actual-product__image-container {
        img {
            width: 100%;
        }
    }

    .actual-product__info-container {
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > a {
            align-self: flex-start;

            .actual-product__title {
                font-size: 1.3rem;
                margin-bottom: 0.5rem;
                display: inline-block;
                color: black;
            }
        }

        ul {
            margin-bottom: 1rem;
            display: flex;
        }

        p {
            margin-bottom: 1rem;
        }
    }

    .actual-product__send-enquiry-button {
            font-size: 0.75rem;
            background-color: var(--blackbrown);
            border-color: var(--blackbrown);
            border-width: 2px;
            color: white;
            margin: auto 0.5rem 0.5rem;
        }

    .actual-product__send-enquiry-button-wrapper {
        margin: auto 0.5rem 0.5rem;
    }
    .actual-product__add-to-cart-button {
        font-size: 0.75rem;
        background-color: transparent;
        border-color: var(--blackbrown-border);
        color: var(--blackbrown);
        margin: 0 0.5rem 0.5rem;

    }
`;

export default OtherProduct;