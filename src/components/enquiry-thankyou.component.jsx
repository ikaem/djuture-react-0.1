import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const EnquiryThankYou = ({enquiryId}) => {

    // if(!enquiryId) return <Redirect to="/" />
    return (
    <section>
        <h2>Zahvaljujemo na Vašem upitu</h2>
        <p>Potvrdu upita <span className="enquiry-id">{enquiryId}</span> smo poslali na Vašu email adresu. </p>
        <p>Upit ćemo pregledati i javiti Vam se s povratnom informacijom.</p>

        <p>Lijep pozdrav</p>
        <p>Ekipa Đuture</p>
    </section>
    );
}

const EnquiryThankYouStyled = styled.section`
    h2 {
        color: var(--red);
    }
`;

export default EnquiryThankYou;