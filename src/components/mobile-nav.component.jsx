import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MobileNav = ({openCloseMobileNav}) => {
    return (
    <MobileNavStyled className="mobile-nav">
        <div onClick={openCloseMobileNav}
            className="mobile-nav__close">
            <span>>></span>
            Zatvori
        </div>
        <ul className="mobile-nav__links">
            <li>
                <Link className="mobile-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
            <li>
                <Link className="mobile-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
            <li>
                <Link className="mobile-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
            <li>
                <Link className="mobile-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
            <li>
                <Link className="mobile-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
        </ul>
    </MobileNavStyled>
    );
}

const MobileNavStyled = styled.nav`
    background-color: #4A4A4A;
    padding: 1rem;
    position: relative;
    height: 100%;

    .mobile-nav__close {
        position: absolute;
        right: 1rem;
        top: 0;
        background-color: white;
        /* background-color: var(--light-light); */
        /* background-color: #898989; */
        /* opacity: 0.3; */
        border-radius: 0 0 3px 3px;
        display: inline-block;
        padding: 0.5rem 1rem;
        color: var(--red);
        cursor: pointer;
        box-shadow: var(--light-shadow);
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    .mobile-nav__close:hover,
    .mobile-nav__close:active {
        background-color: var(--red);
        color: white;
        box-shadow: -1px 1px 2px 0px rgb(50,50,50);
    }
    .mobile-nav__links {
        margin-top: 1.2rem;
        display: flex;
        flex-direction: column;       
    }
    .mobile-nav__links > li {
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--darker-light);
        /* align-self: flex-start; */
    }
    .mobile-nav__link {
        color: white;
    }
`;

export default MobileNav;