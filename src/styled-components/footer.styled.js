import styled from "styled-components";

const FooterStyled = styled.footer`
    background-color: var(--blackbrown);
    display: flex;
    flex-direction: column;

    .footer-logo {
        padding: 1rem;

        h1 {
            color: white;
        }
    }

    .footer-options {
        margin: 1rem;
        display: flex;
        flex-direction: column;

        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 1rem;

            h2 {
                color: var(--lighter-light);
                text-transform: uppercase;
                font-size: 1rem;
                margin-bottom: 0.1rem;
            }

            a {
                margin-top: 0.2rem;
                color: white;
                font-weight: 300;

                &:hover, 
                &:active {
                    color: var(--yellow);
                }
            }
        }

        > div:nth-of-type(2) {
            padding: 0.5rem 0;
        }
    }
`

export default FooterStyled;