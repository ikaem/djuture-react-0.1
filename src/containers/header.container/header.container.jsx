import React, { useState, useContext } from "react";

import HeaderStyled from "../../styled-components/header.styled";

import MobileNav from "../../components/mobile-nav.component";
import AccountNavigation from "../../components/account-navigation.component";
import Search from "../../components/search.component";
import CartStateButton from "../../components/cart-state-button.component";
import DesktopNav from "../../components/desktop-nav.component";

import { CartContext } from "../../context/cart.context";
import { Link } from "react-router-dom";

const Header = () => {

    const { cartItems } = useContext(CartContext);
    const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(false);

    const openCloseMobileNav = () => {
        setIsMobileNavOpen(prevIsOpen => !prevIsOpen);
    }

    return (
    <HeaderStyled>
        {isMobileNavOpen && 
            (<>
                <div onClick={openCloseMobileNav} className="backdrop">
                </div>
                <div className="header__mobile-nav-wrapper">
                    <MobileNav openCloseMobileNav={openCloseMobileNav}/>
                </div>
            </>)}
        <section className="header-permanent">
            <div onClick={openCloseMobileNav} 
                className="header-permanent__toggle-mobile-nav">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header-permanent__logo">
                <Link to="/">
                    <h1 className="logo__temp">Đuture</h1>
                </Link>
            </div>
            <div className="header-permanent__account-nav-wrapper">
                <AccountNavigation />
            </div>
            <div className="header-permanent__search-wrapper">
                <Search/>
            </div>
            <div className="header-permanent__cart-state-wrapper">
                <CartStateButton numberOfItems={cartItems.length} />
            </div>
        </section>
        <div className="header__desktop-nav-wrapper">
            <DesktopNav />
        </div>
    </HeaderStyled>
    );
}

export default Header;