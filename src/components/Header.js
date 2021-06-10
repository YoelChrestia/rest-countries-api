import React from 'react';
import styled from 'styled-components'; 

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    height: 5em;
    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.1);
    padding-left: 1em;
    color: ${({theme}) => theme.color };
    background-color: ${({theme}) => theme.background };
`
const StyledHone = styled.h1`
    font-size: 14px;
    font-weight: 800;
    @media (min-width: 768px) {
        font-size: 25px;
        margin-left: 100px;
      }
`

const LogoContain = styled.div`
    display: flex;
    width: 5.2em;
    align-items: center;
    margin-right: 1em;
    justify-content: space-between;
    @media (min-width: 768px) {
        margin-right: 100px;
        width: 6.4em;
      }
`

const StyledImg = styled.img`
    width: 16px;
    filter: ${({theme}) => theme.filter };
`

const StyledParagraph = styled.p`
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    @media (min-width: 768px) {
        font-size: 16px;
      }
`

function Header({toggleTheme}) {
    return (
    <StyledHeader >
      <StyledHone>Where in the world?</StyledHone>  
      <LogoContain>
          <StyledImg className="" src="./images/moon.png"></StyledImg>
          <StyledImg className="display__none" src="./images/moon-white.png"></StyledImg>
          <StyledParagraph onClick={toggleTheme}>Dark Mode</StyledParagraph>
      </LogoContain>
    </StyledHeader>
    );
}

export default Header; 