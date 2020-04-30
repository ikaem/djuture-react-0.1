import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const CreateEnquiryButton = ({id, createQuickEnquiry}) => {
    return (
    <ButtonStyled onClick={() => createQuickEnquiry(id)}>
        <Link to="/enquiry">
            Pošalji upit
        </Link>
    </ButtonStyled>
    );
}

const ButtonStyled = styled.div`

    a {
        display: block;
        color: black;
        font-size: 0.9rem;
        width: 100%;
        background-color: var(--yellow);
        border: 1px solid var(--yellow-border);
        border-radius: 3px;
        padding: 0.3rem 1rem 0.2rem;
        font-weight: 700;
        cursor: pointer;
        text-align: center;
    }
`;

export default CreateEnquiryButton;