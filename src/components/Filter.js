import React from 'react';
import styled from 'styled-components';

const StyledFilter = styled.select`
    margin-left: 5%;
    margin-top: 40px;
    height: 45px;
    width: 170px;
    padding-left: 12px;
    font-size: 12px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    cursor: pointer;
    background-color: ${({theme}) => theme.background };
    color: ${({theme}) => theme.color };
    @media (min-width: 768px) {
        position: absolute;
        margin: 0;
        margin-left: calc(100% - 100px - 190px);
        height: 56px;
        margin-top: -55px;
        width: 190px;
        font-size: 13px;
    }

    option{
        padding-left: 12px;
        cursor: pointer;
    }
`

function Filter({ handleSelect }) {
    return (
        <StyledFilter onChange= { handleSelect }>
            <option value="All Regions">All Regions</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </StyledFilter>
    );
}

export default Filter;