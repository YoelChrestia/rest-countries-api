// import React from "react";
import styled from 'styled-components'; 
import { Link } from "react-router-dom";

const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6em;
    height: 2em;
    background-color: ${({theme}) => theme.background };
    margin-top: 40px;
    margin-left: 7.5%;
    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: ${({theme}) => theme.color };

    @media (min-width: 800px) {
        margin-bottom: 80px;
        width: 8em;
        height: 2.5em;
        margin-top: 80px;
    }
`

const InfoContain = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width:800px) {
        position: relative;
        flex-direction:row;
        min-width: 400px;
        width: 48%;
        margin-top: 40px;
        margin-left: 20px;
        justify-content: space-between;
    }
`

const BackImg = styled.img`
    width: 1.2em;
    margin-right:10px;
    filter: ${({theme}) => theme.filter };
    @media (min-width:800px) {
        margin-right: 20px;
    }
`

const BackText = styled.p`
    font-size: 14px;
    font-weight: 600;
`

const DetailDescription = styled.h3`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${({theme}) => theme.color };
    span {
        font-weight: 800;
    }

    @media (min-width: 1061px) {
        font-size: 16px;
    }

`

const DetailContain = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    @media (min-width: 800px) {
        flex-direction: row;
        margin: 0;
        width: 85%;
        margin-left: 7.5%;
        justify-content:space-between;
    }
`

const DetailImg = styled.img`
    height: 240px;
    width: 100%;
    margin:auto;
    margin-bottom: 40px;

    @media (min-width: 800px) {
        height: 400px;
        margin: 0;
        width: 42%;
        min-width: 400px;
    }
`

const DetailName = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.color };
    @media (min-width: 800px) {
        margin-bottom: 10px;
    }

    @media (min-width: 1030px) {
        font-size: 28px;
        margin-bottom: 30px;
    }
`

const FirstInfo = styled.div`
    @media (min-width: 800px) {
        height: 80%;
        width: 100%;
    }
`

const SecondInfo = styled.div`
    margin-top: 30px;
    @media (min-width:800px) {
        margin-right: 140px;
        margin-left: 60px;
        margin-top: 70px;
    }
`



const Details = (props) => {
    const { flag, name, nativeName, population, region, subRegion, capital, topLevelDomain } = props;
    return(
        <>
        <BackButton to="/">
            <BackImg src="/./images/leftarrow.png"></BackImg>
            <BackText>Back</BackText>
        </BackButton>
        <DetailContain>
            <DetailImg src={flag}></DetailImg>
            <InfoContain>
                <FirstInfo>
                    <DetailName>{name}</DetailName>
                    <DetailDescription><span>Native Name: </span>{nativeName}</DetailDescription>
                    <DetailDescription><span>Population: </span>{population}</DetailDescription>
                    <DetailDescription><span>Region: </span>{region}</DetailDescription>
                    <DetailDescription><span>Sub Region: </span>{subRegion}</DetailDescription>
                    <DetailDescription><span>Capital: </span>{capital}</DetailDescription>
                </FirstInfo>
                <SecondInfo>
                    <DetailDescription><span>Top Level Domain: </span>{topLevelDomain}</DetailDescription>
                </SecondInfo>
            </InfoContain>
        </DetailContain>
        </>
    )
}

export default Details;