import React from "react";
import styled from "styled-components";

import LoginRegisterView from "../components/login-register-view.component";
import PageTitle from "../components/page-title.component";

const LoginRegister = () => {
    return (
    <LoginRegisterStyled>
        <div className="login-register__page-title-wrapper">
            <PageTitle title={"Prijava"}/>
        </div>
        <div classNamne="login-register__view-wrapper">
            <LoginRegisterView />
        </div>
    </LoginRegisterStyled>
    );
}

const LoginRegisterStyled = styled.main`
    .login-register__page-title-wrapper {
        padding: 1rem 1rem 0;
    }

`;

export default LoginRegister;