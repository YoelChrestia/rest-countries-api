import React from 'react';
import styled from 'styled-components'; 

const StyledForm = styled.form`
    display: flex;
    width: 90%;
    margin: auto;
    border: solid 1px gray;
    margin-top: 20px;
    height: 46px;
    border-radius: 6px;
    align-items: center;
    background-color: ${({theme}) => theme.background };
    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.1);
    @media (min-width: 768px) {
        height: 56px;
        width: 30%;
        margin: 45px 0 0 115px;
        border: none;
      }
`

const StyledInput = styled.input`
    font-size: 11px;
    border: none;
    margin-left: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.color };
    width: 100%;
    height: 100%;
    outline: none;
    background-color: ${({theme}) => theme.background };
    @media (min-width: 800px) {
        font-size: 13px;
    }
`

const StyledSearchImg = styled.img`
    margin-left: 25px;
    filter: ${({theme}) => theme.filter};
    @media (min-width: 800px) {
        margin-left: 30px;
    }
`

function Search({ handleInput, actualInput }) {
    return (
        <StyledForm onSubmit={ handleInput } >
            <StyledSearchImg src="./images/loupe.png"></StyledSearchImg>
            <StyledInput id="input" onChange={ actualInput } type="text" placeholder="Search for a country..."></StyledInput>
        </StyledForm>
    );
}

export default Search;