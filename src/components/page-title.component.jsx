import React from "react";
import styled from "styled-components";

const PageTitle = ({title}) => {
    return (
    <PageTitleStyled>
        <span>>></span>
        {title}
    </PageTitleStyled>
    );
}

const PageTitleStyled = styled.h1`
    font-size: 1.5rem;
    color: var(--blackbrown);
    /* margin-bottom: 1rem; */
`;

export default PageTitle;