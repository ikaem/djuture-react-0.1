import React from "react";
import styled from "styled-components";

import ProfileHeader from "../components/profile-header.component";
import ProfileCards from "../components/profile-cards.component";

const Profile = () => {
    return (
    <ProfileStyled>
        <div className="profile-header__wrapper">
            <ProfileHeader />
        </div>
        <div className="profile-cards__wrapper">
            <ProfileCards />
        </div>
    </ProfileStyled>
    )
}

const ProfileStyled = styled.main`
    display: flex;
    flex-direction: column;
`;

export default Profile;