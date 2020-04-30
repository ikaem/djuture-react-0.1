import React from "react";
import styled from "styled-components";

import Header from "../containers/header.container/header.container";
import Footer from "../components/footer.component";

import CartProvider from "../context/cart.context";
import UserProvider from "../context/user.context";

const Layout = ({children}) => {
    return (
    <>
        <UserProvider>
            <CartProvider>

                <HeaderWrapper className="layout__header-wrapper">
                    <Header />
                </HeaderWrapper>


                {children}
                <Footer />
            </CartProvider>
        </UserProvider>
    </>
    );
}

const HeaderWrapper = styled.div`
    /* position: fixed;
    z-index: 100; */
`;


export default Layout;