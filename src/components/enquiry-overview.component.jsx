import React, { Fragment } from "react";
import styled from "styled-components";

const EnquiryOverview = ({cash, cashAmount, delivery, exchangeItems, sendOffer, enquiryId
}) => {
    return (
    <EnquiryOverviewStyled>
        <h2>Pregled Vaše ponude</h2>
        <div className="offer-overview__details">
                <span className="offer-overview__cash-detail">Plaćanje novcem:</span>
                
                <span className="offer-overview__cash-detail">
                    {cash? "Da": "Ne"}
                </span>

                {cash && <>
                    <span className="offer-overview__cash-detail">Iznos:</span>
                    <span className="offer-overview__cash-detail">{Number(cashAmount).toFixed(2)} kn</span>
                </>}
                
                <hr className="grid-span"/>

                {
                exchangeItems.map((_, index) => {
                    return (
                    <Fragment 
                        key={index}>
                        <h3 className="offer-overview__exchange-title">Razmjena {index + 1}</h3>
                        <span className="grid-span">Naziv:</span>
                        <p className="grid-span offer-overview__value">
                            {exchangeItems[index].name}
                        </p>
                        <span className="grid-span">Opis:</span>
                        <p className="grid-span offer-overview__value">{exchangeItems[index].description}</p>
                        <span className="grid-span">Slike:</span>
                        <ul className="grid-span offer-overview__value">
                            <li>{exchangeItems[index].photos.photo1}</li>
                            <li>{exchangeItems[index].photos.photo2}</li>
                        </ul>
                        <hr className="grid-span"/>
                    </Fragment>);
                    })
                }
                <span>Dostava:</span>
                <span className="offer-overview__value">{delivery? "Zatražena": "Ne"}</span>
        </div>
        <button 
            onClick={sendOffer}
            disabled={enquiryId}
            type="button" 
            className="button offer-overview__button">Pošalji upit</button>
    </EnquiryOverviewStyled>
    );
}

const EnquiryOverviewStyled = styled.section`
    display: flex;
    flex-direction: column;

    > h2 {
        font-size: 1.1rem;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid var(--red);
        margin-bottom: 1rem;
    }

    .offer-overview__details {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 0.2rem 2rem;
        /* padding-bottom: 1rem;
        border-bottom: 1px solid var(--dark-light); */

        span { 
            color: rgb(101, 101, 101);
        }

        .offer-overview__cash-detail:nth-child(even){
            color: black;
        }


        .grid-span {
            grid-column: span 2;
        }

        hr.grid-span {
            width: 100%;
            height: 1px;
            border: none;
            margin: 0.8rem 0 0.8rem 0;
            background-color: var(--light-light);

            &:last-of-type {
                margin-top: 0;
            }
        }

        .offer-overview__exchange-title {
            text-transform: uppercase;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            color: var(--red);
            font-weight: normal;
        }

        .offer-overview__value {
            color: black;
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .offer-overview__button {
        background-color: var(--yellow);
        border-color: var(--yellow-border);
        color: var(--blackbrown);
        margin-bottom: 1rem;
        margin-top: 1rem;

        :disabled {
            cursor: not-allowed;
            background-color: grey;
            color: lightsteelblue;
            border-color: white;
        }
    }

`;

export default EnquiryOverview;

