import styled from "styled-components";

const HeaderStyled = styled.header`
    position: relative;
    z-index: 1;
    background-color: var(--blackbrown);
    /* width: 100%; */

    .header__mobile-nav-wrapper {
        position: absolute;
        top: 0;
        width: 75%;
        height: 100vh;
    }

    .header-permanent {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 1rem;
        padding: 1rem;
    }
    .header-permanent__toggle-mobile-nav {
        width: 2rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
            display: block;
            height: 3px;
            background-color: white;
        }

    }
    .header-permanent__account-nav-wrapper {
        justify-self: end;
    }
    .header-permanent__search-wrapper {
        grid-column: span 2;
    }
    .header-permanent__cart-state-wrapper {
        justify-self: end;
        /* align-self: end; */
    }
    .header__desktop-nav-wrapper {
        display: none;
    }
`

export default HeaderStyled;