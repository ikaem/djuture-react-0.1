import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import productImage from "../assets/static/images/ps3.jpg";

const ProfileCards = () => {
    return (
    <ProfileCardsStyled>
        <section className="profile-card__account-card">
            <h2>
                <span>>></span>
                Informacije o računu
            </h2>
            <div className="account-card__details">
                <span class="account-card__detail-label">Email:</span>
                <span class="account-card__detail-value">marinovic@gmail.com</span>
                <Link to="/profile/changeemail" class="account-card__detail-value-change">Promijeni email?</Link>
                <span class="account-card__detail-label">Lozinka:</span>
                <span class="account-card__detail-value">*****</span>
                <Link to="/profile/changepassword" class="account-card__detail-value-change">Promijeni lozinku?</Link>
                <Link to="profile/deleteaccount" class="account-card__delete-account">Izbriši račun?</Link>
            </div>
        </section>

        <section className="profile-card__purchases-card">
            <h2>
                <span>>></span>
                Završene kupovine
            </h2>
            <ul className="purchases-card__details">
                <li>
                    <article className="purchases-card__product">
                        <div className="product__image-container">
                            <img src={productImage} alt="product"/>
                        </div>
                        <div className="product__info">
                            <h3>PlayStation 3 30GB</h3>
                            <p className="product__status">
                                Kupljen
                                <span>>></span>
                            </p>
                            <p className="product__date">12.03.2020.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className="purchases-card__product">
                        <div className="product__image-container">
                            <img src={productImage} alt="product"/>
                        </div>
                        <div className="product__info">
                            <h3>PlayStation 3 30GB</h3>
                            <p className="product__status purchased">
                                Kupljen
                                <span>>></span>
                            </p>
                            <p className="product__date">12.03.2020.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className="purchases-card__product">
                        <div className="product__image-container">
                            <img src={productImage} alt="product"/>
                        </div>
                        <div className="product__info">
                            <h3>PlayStation 3 30GB</h3>
                            <p className="product__status">
                                Nije kupljen
                                <span>>></span>
                            </p>
                            <p className="product__date">12.03.2020.</p>
                        </div>
                    </article>
                </li>
            </ul>
            <p class="purchases-card__more">
                Više
                <span>></span>
            </p>
        </section>

        <section className="profile-card__purchases-card">
            <h2>
                <span>>></span>
                Otvorene kupovine
            </h2>
            <ul className="purchases-card__details">
                <li>
                    <article className="purchases-card__product">
                        <div className="product__image-container">
                            <img src={productImage} alt="product"/>
                        </div>
                        <div className="product__info">
                            <h3>PlayStation 3 30GB</h3>
                            <p className="product__date">12.03.2020.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className="purchases-card__product">
                        <div className="product__image-container">
                            <img src={productImage} alt="product"/>
                        </div>
                        <div className="product__info">
                            <h3>PlayStation 3 30GB</h3>
                            <p className="product__date">12.03.2020.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className="purchases-card__product">
                        <div className="product__image-container">
                            <img src={productImage} alt="product"/>
                        </div>
                        <div className="product__info">
                            <h3>PlayStation 3 30GB</h3>
                            <p className="product__date">12.03.2020.</p>
                        </div>
                    </article>
                </li>
            </ul>
            <p class="purchases-card__more">
                Više
                <span>></span>
            </p>
        </section>
    </ProfileCardsStyled>
    );
}

const ProfileCardsStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    > section {
        padding: 1rem;
        background-color: var(--lighter-light);
        margin-bottom: 1rem;
        box-shadow: 0 2px 5px var(--dark-light);

        > h2 {
            font-size: 0.9em;
            font-weight: 400;
            text-transform: uppercase;
            color: rgb(101, 101, 101);
            padding-bottom: 0.2rem;
            border-bottom: 1px solid var(--red);
            margin-bottom: 1rem;
        }

        .purchases-card__more {
            text-align: right;
            color: var(--darker-light);
            font-size: 0.9rem;
            cursor: pointer;

            span {
                display: inline-block;
                margin-left: 5px;
                transform: rotateZ(90deg);
                color: black;
            }

            &:hover,
            &:active {
                color: var(--red);
            }
        }
    }

    .account-card__details {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.1rem 1rem;
        font-size: 1.1rem;

        .account-card__detail-label {
            color: rgb(101, 101, 101);
            margin-bottom: 0.15rem;
        }
        .account-card__detail-value-change {
            color: var(--red);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        .account-card__delete-account {
            color: var(--red);
            margin-top: 1rem;
        }
    }

    .purchases-card__details {
        display: flex;
        flex-direction: column;

        .purchases-card__product {
            display: flex;
            align-items: flex-end;
            margin-bottom: 1rem;

            .product__image-container {
                width: 33%;

                img {
                    display: block;
                    width: 100%;
                    border-radius: 3px;
                }
            }

            .product__info {
                font-size: 0.9rem;
                font-weight: 700;
                color: rgb(101,101,101);
                margin-left: 1rem;
                padding-bottom: 0.15rem;
                border-bottom: 1px solid var(--dark-light);
                flex-grow: 2;

                h3 {
                    margin-bottom: 0.5rem;
                    font-size: 1.1rem;
                    color: var(--blackbrown);
                }

                .product__status {
                    text-transform: uppercase;

                    &.purchased {
                        color: #3eb110;
                    }
                }
            }
        }
    }
`;

export default ProfileCards;