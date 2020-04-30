import React from "react";
import { Link } from "react-router-dom";

import FooterStyled from "../styled-components/footer.styled";
import ContactUs from "../containers/contact-us.container/contact-us.container";

const Footer = () => {
    return (
    <FooterStyled>
        <div className="footer-logo">
            <h1 className="footer-logo__temp">Đuture</h1>
        </div>
        <section className="footer-options">
            <div className="footer-options__djuture-links">
                <h2>Đuture</h2>
                <Link to="/">O nama</Link>
                <Link to="/">Uvjeti korištenja</Link>
                <Link to="/">Način plaćanja</Link>
                <Link to="/">Pitanja i odgovori</Link>
            </div>
            <div className="footer-options__products-links">
                <h2>Proizvodi</h2>
                <Link to="/">Stanje proizvoda</Link>
                <Link to="/">Dostava</Link>
                <Link to="/">Reklamacije</Link>
            </div>
            <div className="footer-options__contact-links">
                <h2>Kontakt</h2>
                <a href="mailto:info@djuture.org" target="_blank" rel="noopener noreferrer">info@djuture.org</a>
                <a href="tel:+38591123456" target="_blank" rel="noopener noreferrer">+38591123456</a>
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </section>
        <section className="footer__contact-us-wrapper">
            <ContactUs />
        </section>
    </FooterStyled>
    );
}

export default Footer;