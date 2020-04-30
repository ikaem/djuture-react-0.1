import React from "react";
import styled from "styled-components";

const ContactUs = () => {
    return (
    <ContactUsStyled>
        <h2>Javi nam se</h2>
        <form className="contact-us__form">
            <label htmlFor="name">Ime</label>
            <input type="text" id="name"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
            <label htmlFor="message">Poruka</label>
            <textarea id="message" cols="30" rows="10"/>
            <button className="contact-us__form-submit-button button" type="submit">Pošalji poruku</button>
        </form>
    </ContactUsStyled>
    );
};

const ContactUsStyled = styled.section`
    background-color: #C4C4C4;
    padding: 1rem;
    color: var(--blackbrown);

    h2 {
        text-transform: uppercase;
        font-size: 1.05rem;
        margin-bottom: 0.5rem;
    }

    .contact-us__form {
        display: flex;
        flex-direction: column;

        label {
            font-size: 0.95rem;
        }

        input, 
        textarea {
            margin: 0.1rem 0 1rem;  
            background-color: #AAAAAA;
            border: none;
            padding: 0.4rem;
            color: black;
        }

        button {
            color: white;
            background-color: var(--blackbrown);
            border-color: var(--blackbrown-border);
            font-size: 0.9rem;

            &:hover, 
            &:active {
                color: white;
                background-color: var(--red);
                border-color: var(--red-border);
            }
        }
    }
`;

export default ContactUs;