import React from "react";
import styled from "styled-components";

const Search = () => {
    return (
    <SearchStyled className="search__form">
        <label htmlFor="search" aria-label="Pretraži proizvode" hidden>Pretraži</label>
        <input type="search" id="search" className="search__form__input"/>
        <button type="submit" className="search__form__button button" >Pretraži</button>
    </SearchStyled>
    );
}

const SearchStyled = styled.form`
    display: flex;
    justify-content: space-between;

    .search__form__input {
        width: 100%;
        /* border: 1px solid var(--darker-light); */
        border: 1px solid white;
        border-radius: 3px 0 0 3px;
        padding: 0.3rem 0.5rem 0.2rem;
        border-right: none;
    }
    .search__form__button {
        border-color: var(--red-border);
        border-radius: 0 3px 3px 0;
        background-color: var(--red);
        color: white;
        border-left: none;
    }
    .search__form__button:hover,
    .search__form__button:active {
        border-color: grey;
        color: var(--yellow);
    }

`;

export default Search;