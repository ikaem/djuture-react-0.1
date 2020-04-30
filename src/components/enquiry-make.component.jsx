import React, { Fragment } from "react";
import styled from "styled-components";

const EnquiryMake = ({exchangeState, addForm, handleChange, setEnquiryStep, handleSubmit}) => {
    return (
    <EnquiryMakeStyled className="enquiry__offer-make">
        <h2>Što nudite u zamjenu?</h2>
        <form 
            onSubmit={handleSubmit}
            className="offer-make__form">
            <label htmlFor="money-check">Novac:</label>
            <input 
                onChange={handleChange}
                checked={exchangeState.cash}
                type="checkbox" 
                id="money-check" 
                name="cash"
                className="input-check"/>
            <label htmlFor="money-amount">Kn:</label>
            <input 
                onChange={handleChange}
                disabled={!exchangeState.cash}
                required={exchangeState.cash}
                value={exchangeState.cashAmount}
                type="number" 
                min="1"
                id="money-amount" 
                name="cashAmount"
                className=""/>
            <hr className="grid-span"/>

            {
                exchangeState.exchangeItems.map((_, index) => {
                    return (
                    <Fragment 
                        key={index}>
                        <h3 className="form__exchange-title">Razmjena {index + 1}</h3>
                        <label 
                            htmlFor={`name-${index}`} 
                            className="grid-span">Naziv:</label>
                        <input 
                            onChange={handleChange} 
                            value={exchangeState.exchangeItems[index].name}
                            type="text" 
                            id={`name-${index}`} 
                            name="name" 
                            className="grid-span form__exchange-data-input"/>
                        <label 
                            htmlFor={`description-${index}`}  
                            className="grid-span">Opis:</label>
                        <textarea 
                            onChange={handleChange}
                            value={exchangeState.exchangeItems[index].description}
                            id={`description-${index}`} 
                            name="description" 
                            className="grid-span form__exchange-data-input"/>
                        <label 
                            htmlFor={`image_1-${index}`}className="grid-span">Učitaj sliku 1:</label>
                        <input 
                            onChange={handleChange}
                            value={exchangeState.exchangeItems[index].photos.photo1}
                            name="photo1"
                            type="text" 
                            id={`image_1-${index}`}
                            className="grid-span form__exchange-data-input"/>
                        <label 
                            htmlFor={`image_2-${index}`}
                            className="grid-span">Učitaj sliku 2:</label>
                        <input 
                            onChange={handleChange}
                            value={exchangeState.exchangeItems[index].photos.photo2}
                            name="photo2"
                            type="text" 
                            id={`image_2-${index}`} 
                            className="grid-span form__exchange-data-input"/>
                        <hr className="grid-span"/>
                        
                    </Fragment>
                    );
                })
            }

            <button 
                onClick={addForm} 
                type="button"     
                className="form__add-exchange-button grid-span">
                <span>+</span>
                Dodaj razmjenu
            </button> 

            <label 
                className="form__product-delivery-label grid-span">
                <input 
                    name="delivery"
                    onChange={handleChange}
                    type="checkbox" 
                    className="input-check"/>
                    Želim dostavu
            </label>
            <p 
                className="form__product-delivery-disclaimer grid-span">*Adresu žemo zatražiti nakon što prihvatimo Vašu ponudu. Trošak dostave plaćate sami.
            </p>
            <button 
                type="submit"
                className="button form__to-enquiry-overview-button grid-span">
                Pregledaj upit</button>
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

        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 0.2rem 2rem;
        /* padding-bottom: 1rem; */
        border-bottom: 1px solid var(--light-light);
        margin-bottom: 1rem;

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

        input[type=number] {
            /* justify-self: start; */
            width: 30%;
            padding: 0.2rem;
            background-color: var(--lighter-light);
            border: 1px solid #dadada;
            border-radius: 2px;
            color: black;

            &:disabled {
                background-color: grey;
                color: var(--darker-light);
            }
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

        .form__exchange-title {
            text-transform: uppercase;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            color: var(--red);
            font-weight: normal;
        }

        .form__exchange-data-input {
            padding: 0.2rem;
            background-color: var(--lighter-light);
            border: 1px solid #dadada;
            border-radius: 2px;
            color: black;
            margin-bottom: 1rem;

            &[name=photo2] {
                margin-bottom: 0;
            }
        }

        .form__add-exchange-button {
            cursor: pointer;
            padding: 0;
            justify-self: start;
            width: auto;
            border: none;
            background-color: transparent;

            :hover,
            :active {
                color: var(--red);
            }

            :hover span {
                box-shadow: 0 1px 5px var(--dark-light);
                color: var(--red);
                background-color: var(--yellow);
            }

            span {
                display: inline-block;
                height: 1.1rem;
                width: 1.1rem;
                border-radius: 0.6rem;
                background-color: var(--red);
                color: white;
                padding-top: 0.01rem;
                font-size: 1rem;
                vertical-align: baseline;
                margin-right: 5px;
            }
        }

        .form__product-delivery-label {
            padding-top: 0.8rem;
            margin-top: 0.8rem;
            border-top: 1px solid var(--light-light);
            
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

