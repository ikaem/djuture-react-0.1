import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginRegisterView = () => {
    return (
    <LoginRegisterViewStyled>
        {/* <h2 className="login-register__view__label">
            <span>>></span>
            Prijava
        </h2> */}
        <form className="login-register__view__form">
            <label for="name">Ime</label>
            <input type="text" id="name"/>
            <label for="email">Email</label>
            <input type="email" id="email"/>
            <label for="password">Lozinka</label>
            <input type="password" id="password"/>
            <label for="repeat-password">Ponovi lozinku</label>
            <input type="password" id="repeat-password"/>
            <label for="remember">
                <input type="checkbox" id="remember"/>    
                Zapamti me
            </label>
            <button className="view__form__button button" type="submit">Prijavi se</button>
            <Link className="view__form__forgot-password" href="/forgotpassword" style={{textAlign: "right", display: "block"}}>Zaboravio sam svoje podatke...</Link>
        </form>
    </LoginRegisterViewStyled>
    );
}

const LoginRegisterViewStyled = styled.section`
    /* background-color: var(--lighter-light); */
    padding: 1rem;

    /* > h2 {
        font-size: 1.5rem;
    } */

    .login-register__view__form {
        display: grid;
        grid-template-columns: 1fr;
        padding: 1rem 0;

        label {
            color: var(--blackbrown);

            &[for=remember] {
                font-size: 0.95rem;
                color: black;
                margin-bottom: 1.5rem;
                cursor: pointer;
            }
        }

        input {
            margin: 0.1rem 0 1rem;  
            background-color: var(--lighter-light);
            border: 1px solid #dadada;
            border-radius: 2px;
            padding: 0.4rem;
            color: black;

            &[type=checkbox] {
                margin: 0 5px 0 0;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                border: 1px solid var(--blackbrown);
                width: 0.85rem;
                height: 0.85rem;
                border-radius: 2px;
                vertical-align: top;
                cursor: pointer;

                &:checked {
                    background-color: var(--red);
                }
            }
        }

        .view__form__button {
            background-color: var(--yellow);
            border-color: var(--yellow-border);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;

            &:hover, 
            &:active {
                background-color: var(--red);
                border-color: var(--red-border);
                color: white;
            }
        }

        .view__form__forgot-password {
            color: #888888;
            font-size: 0.9rem;

            &:hover,
            &:active {
                color: var(--red);
                text-decoration: underline;
            }
        }
    }
`;

export default LoginRegisterView;