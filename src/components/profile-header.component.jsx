import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import profileImage from "../assets/static/images/profile_image.jpg";

const ProfileHeader = () => {
    return (
    <ProfileHeaderStyled className="profile-header">
        <div class="profile-header__name-ribbon">
            <div class="name-ribbon__image-container">
                <img src={profileImage} alt="profile"/>
            </div>
            <span>>></span>
            <h1>Karlo Marinović</h1>
        </div>
        <div class="profile-header__options-ribbon">
            <Link className="options-ribbon__cart-link" to="/cart">
                <span>>></span>
                Košarica (3)
            </Link>
            <Link className="options-ribbon__sell-link" to="/sellproduct">
                <span>>></span>
                Prodaj proizvod
            </Link>
        </div>
    </ProfileHeaderStyled>
    );
}

const ProfileHeaderStyled = styled.header`
    .profile-header__name-ribbon {
        display: flex;
        background-color: var(--yellow);
        height: 100px;
        position: relative;
        padding: 0 1rem;

        .name-ribbon__image-container {
            position: relative;
            top: 1.5rem;
            box-shadow: 0 2px 5px var(--dark-light);

            img {
                display: block;
                object-fit: cover;
                height: 100px;
                width: 67px;
            }
        }
        span {
            position: absolute;
            top: 1.5rem;
            left: 67px;
            margin-left: 2rem;
        }
        h1 {
            align-self: flex-end;
            margin-left: 1rem;
        }
    }

    .profile-header__options-ribbon {
        padding: 0.5rem 1rem;

        .options-ribbon__cart-link {
            margin-left: 67px;
            padding-left: 1rem;
            margin-right: 1rem;
        }
    }
`;

export default ProfileHeader;