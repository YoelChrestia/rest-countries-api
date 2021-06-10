import React from 'react';
import styled from 'styled-components'; 
import { Link } from 'react-router-dom';

const CountrieContain = styled.div`
    background-color: ${({theme}) => theme.background};
    width: 70%;
    height: 350px;
    margin: auto;
    margin-top: 35px;
    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.1);
    @media (min-width: 800px) {
        display: inline-block;
        margin: 0;
        margin-left: 115px;
        margin-top: 45px;
        margin-bottom: 30px;
        margin-right: -33px;
        width: 16.5em;
    }
`

const CountrieImg = styled.img`
    object-fit: cover;
    height:50%;
    width: 100%;
`

const CountrieInfo = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    width: 100%;
    margin:auto;
    margin-top: 15px;
`

const CountrieName = styled(Link)`
    margin-left: 25px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 800;
    text-decoration: none;
    color: ${({theme}) => theme.color};
    @media (min-width: 800px) {
        font-size: 18px;
    }
`
const CountrieDescription = styled.h3`
    margin-left: 25px;
    margin-top: 4px;
    font-size: 16px;
    font-weight: 300;
    color: ${({theme}) => theme.color};
    span{
        font-weight: 600;
    }
    @media (min-width: 800px) {
        font-size: 14px;
    }
`

function Countrie(props) {
    const { flag, name, population, region, capital, shortName, clickCode } = props;
    return (
        <CountrieContain>
            <CountrieImg src={flag}></CountrieImg>
            <CountrieInfo>
                <CountrieName onClick={() => {clickCode(shortName)}} to={`/Countrie/${ shortName }`}>{ name }</CountrieName>
                <CountrieDescription><span>Population: </span>{ population } </CountrieDescription>
                <CountrieDescription><span>Region: </span>{ region }</CountrieDescription>
                <CountrieDescription><span>Capital: </span>{ capital }</CountrieDescription>
            </CountrieInfo>
        </CountrieContain>
    );
}

export default Countrie;