import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AccountNavigation = () => {
    return (
    <AccountNavigationStyled className="account-nav">
        <ul className="account-nav__options">
            <li>
                <Link  
                className="account-nav__option" 
                to="/profile">Opcija</Link>
            </li>
            <li>
                <Link  
                className="account-nav__option" 
                to="/profile">Opcija</Link>
            </li>
            <li>
                <Link  
                className="account-nav__option" 
                to="/profile">Opcija</Link>
            </li>
            <li>
                <Link  
                className="account-nav__option" 
                to="/profile">Opcija</Link>
            </li>
        </ul>
    </AccountNavigationStyled>
    );
}

const AccountNavigationStyled = styled.nav`
    .account-nav__options {
        display: flex;

        li:first-of-type > .account-nav__option {
        margin-left: 0;
    }
    }
    .account-nav__option {
        color: white;
        margin-left: 0.3rem;
    }
`;

export default AccountNavigation;