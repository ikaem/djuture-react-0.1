import React from "react";
import styled from "styled-components";

const EnquiryMake = ({exchangeState}) => {
    return (
    <EnquiryMakeStyled className="enquiry__offer-make">
        <h2>Što nudite u zamjenu?</h2>
        <form className="offer-make__form">
            {/* {
                exchangeState.map((_, index) => {
                    return ( */}
                    <div className="form__exchange-container">
                        <label htmlFor="money-check">Novac:</label>
                        <input type="checkbox" id="money-check" className="input-check"/>
                        <label htmlFor="money-amount">Kn:</label>
                        <input type="number" id="money-amount" className=""/>
                        <hr className="grid-span"/>
                        <label htmlFor="exchange-name" className="grid-span">Naziv:</label>
                        <input type="text" id="exchange-name" className="grid-span exchange-container__exchange-data-input"/>
                        <label htmlFor="exchange-description" className="grid-span">Opis:</label>
                        <textarea id="exchange-description" className="grid-span exchange-container__exchange-data-input"/>
                        <label htmlFor="exchange-image1" className="grid-span">Učitaj sliku 1:</label>
                        <input type="text" id="exchange-image1" className="grid-span exchange-container__exchange-data-input"/>
                        <label htmlFor="exchange-image2" className="grid-span">Učitaj sliku 2:</label>
                        <input type="text" id="exchange-image2" className="grid-span exchange-container__exchange-data-input"/>
                    </div>
                    {/* );
                })
            } */}
            <label className="form__add-exchange-label"><button type="button" className="form__add-exchange-button">+</button> Dodaj razmjenu</label>

            <label className="form__product-delivery-label">
                <input type="checkbox" className="input-check"/>
                Želim dostavu
            </label>
            <p className="form__product-delivery-disclaimer">*Adresu žemo zatražiti nakon što prihvatimo Vašu ponudu. Trošak dostave plaćate sami.
            </p>
            <button type="submit" className="button form__to-enquiry-overview-button">Pregledaj upit</button>
        </form>
    </EnquiryMakeStyled>
    );
}

const EnquiryMakeStyled = styled.section`
    > h2 {
        font-size: 1.1rem;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid var(--red);
        margin-bottom: 1rem;
    }

    .offer-make__form {
        display: flex;
        flex-direction: column;

        label { 
            color: var(--blackbrown);
        }

        .input-check {

            margin: 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: 1px solid #dadada;
            width: 0.85rem;
            height: 0.85rem;
            border-radius: 2px;
            vertical-align: top;
            cursor: pointer;

            &:checked {
                background-color: var(--red);
            }
        }

        .form__exchange-container {
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: center;
            gap: 0.2rem 2rem;
            /* padding-bottom: 1rem; */
            border-bottom: 1px solid var(--light-light);
            margin-bottom: 1rem;

            input[type=number] {
                justify-self: start;
                padding: 0.2rem;
                background-color: var(--lighter-light);
                border: 1px solid #dadada;
                border-radius: 2px;
                color: black;
            }

            .exchange-container__exchange-data-input {
                padding: 0.2rem;
                background-color: var(--lighter-light);
                border: 1px solid #dadada;
                border-radius: 2px;
                color: black;
                margin-bottom: 1rem;
            }

            .grid-span {
                grid-column: span 2;
            }

            hr.grid-span {
                width: 100%;
                height: 1px;
                border: none;
                margin: 0.8rem 0;
                background-color: var(--light-light);
            }

            input[type=file] {
                margin-bottom: 1rem;
            }


        }

        .form__add-exchange-label {
            cursor: pointer;
            align-self: flex-start;

            &:hover,
            &:active {
                color: var(--red);
            }

            .form__add-exchange-button {
                display: inline-block;
                height: 1.5rem;
                width: 1.5rem;
                border: none;
                border-radius: 0.75rem;
                background-color: var(--red);
                color: white;
                padding: 0.1rem;
                font-size: 1.2rem;
                cursor: pointer;
                transform: scale(0.85);

                &:hover,
                &:active {
                    box-shadow: 0 1px 5px var(--dark-light);
                    color: var(--red);
                    background-color: var(--yellow);
                }
            }
        }

        .form__product-delivery-label {
            padding-top: 1rem;
            margin-top: 1rem;
            border-top: 1px solid var(--light-light);
            margin-bottom: 0.15rem;
            
            > input {
                vertical-align: baseline;
                margin-right: 5px;
            }
        } 


        .form__product-delivery-disclaimer {
            color: rgb(165, 165, 165);
            font-size: 0.85rem;
            margin-bottom: 1rem;
        }

        .form__to-enquiry-overview-button {
            background-color: var(--yellow);
            border-color: var(--yellow-border);
            color: var(--blackbrown);
            margin-bottom: 1rem;
        }

    }


`;

export default EnquiryMake;

