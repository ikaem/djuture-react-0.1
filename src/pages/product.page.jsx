import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";

import { CartContext } from "../context/cart.context";
import { TestContext } from "../context/test.context";

import productImage from "../assets/static/images/ps3.jpg"

// just fake db for now

import { products as fakeProducts } from "../assets/fakeDB";


const Product = () => {

    const { productId } = useParams();
    // const { cartItems } = useContext(CartContext);
    const numby = useContext(TestContext);


    const [ productDetailed, setProductDetailed ] = useState({
        id: "",
        title: '',
        condition: "",
        description: '',
        age: "",
        category: '',
        link: '',
        ownerNr: "",
        photos: [],
        dateCreated: ''
    });

    const {
        id,
        title,
        condition,
        description,
        age,
        category,
        link,
        ownerNr,
        photos,
        dateCreated
    } = productDetailed;

    useEffect(() => {
        setProductDetailed(fakeProducts.find(product => product.id === Number(productId)));

    }, [setProductDetailed]);

    return (
    <ProductStyled>
        <article>
            <div className="product-imagery">
                <ul className="product-imagery__images">
                    {photos.map(photo => <li 
                    className="product-imagery__image-container"
                    key={photo}>
                        <img src={photo} alt="product"/>
                    </li>)}
                    
                </ul>
            </div>
            <div className="product-info">
                <h1>{title}</h1>
                <ul>
                    {
                        new Array(Number(condition)).fill().map((val, i) => {
                            return <li key={i}>*</li>
                        })
                    }
                </ul>
                <p>{description}</p>
                <div className="product-info__details">
                    <span>
                        Starost:
                        <span className="product-info__detail__value">{age} godine</span>
                    </span>
                    <span>
                        Kategorija:
                        <span className="product-info__detail__value">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    </span>
                    <span>
                        Opis:
                        <a  className="product-info__detail__value" href={link} style={{textDecoration: "underline"}}>{link.slice(8, link.indexOf("/", 8))}</a>
                    </span>
                    <span>
                        Vlasnik:
                        <span className="product-info__detail__value">{ownerNr}.</span>
                    </span>
                </div>
                <button className="product-info__send-enquiry-button button">Pošalji upit</button>
                <button className="product-info__add-to-cart-button button">Dodaj u košaricu</button>
            </div>
        </article>
    </ProductStyled>
    );
}

const ProductStyled = styled.main`
    article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > div {
            flex: 1 1 0;
        }

        .product-imagery {

            .product-imagery__images {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
            }

            .product-imagery__image-container {
                box-shadow: 0 2px 5px var(--light-light);
            }
            .product-imagery__image-container:first-of-type {
                grid-column: span 3;
            }

            .product-imagery__image-container > img {
                width: 100%;
                display: block;
            }
        }

        .product-info {
            display: flex;
            flex-direction: column;
            padding: 1rem 0;

            > h1 {
                font-size: 1.8rem;
                margin: 0 1rem 0.5rem;
            }

            > ul {
                display: flex;
                margin: 0 1rem 1rem;
            }

            > p {
                font-size: 1.3rem;
                margin: 0 1rem 1rem;
            }

            .product-info__details {
                background-color: var(--red);
                padding: 1rem;
                margin-bottom: 1rem;
                color: white;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.7rem;
                justify-content: space-around;
                justify-items: left;
                box-shadow: 0 2px 5px var(--light-light);

                > span:nth-child(even) {
                    justify-self: end;
                }

                .product-info__detail__value {
                    margin-left: 5px;
                }

                a {
                    color: white;

                    &:hover,
                    &:active {
                        color: var(--yellow);
                    }
                }
            }

            .product-info__send-enquiry-button {
                background-color: var(--yellow);
                border-color: var(--yellow-border);
                margin: 0 1rem 0.5rem;
            }

            .product-info__add-to-cart-button {
                background-color: transparent;
                border-color: var(--blackbrown-border);
                color: var(--blackbrown);
                margin: 0 1rem 1rem;
            }
        }
    }
`;

export default Product;