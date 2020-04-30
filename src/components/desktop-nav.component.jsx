import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DesktopNav = () => {
    return (
    <DesktopNavStyled className="desktop-nav">
        <ul className="desktop-nav__links">
            <li>
                <Link className="desktop-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
            <li>|</li>
            <li>
                <Link className="desktop-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
            <li>|</li>
            <li>
                <Link className="desktop-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
            <li>|</li>
            <li>
                <Link className="desktop-nav__link desktop-nav__link-active" to="/home/elektronika">Elektronika</Link>
            </li>
            <li>|</li>
            <li>
                <Link className="desktop-nav__link" to="/home/elektronika">Elektronika</Link>
            </li>
        </ul>
    </DesktopNavStyled>
    );
}

const DesktopNavStyled = styled.nav`
    background-color: #4A4A4A;
    padding: 0.5rem 1rem 0.5rem;

    .desktop-nav__links {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .desktop-nav__links > li {
        padding: 0;
    }
    .desktop-nav__links > li:nth-of-type(even) {
        font-size: 1rem;
        color: var(--blackbrown);
    }
    .desktop-nav__link {
        color: white;
        color: var(--dark-light);
        text-transform: uppercase;
        font-size: 0.85rem;
    }
    .desktop-nav__link:hover,
    .desktop-nav__link:active {
        color: var(--yellow);
    }
    .desktop-nav__link-active {
        color: var(--yellow);
        /* font-weight: 700; */
        border-bottom: 1px solid var(--yellow);
    }
`;

export default DesktopNav;