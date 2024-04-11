import React, { ReactNode } from 'react';
import styled from 'styled-components';

// Define the styled component for the H1 element
const StyledContainer = styled.div`
  z-index: 999;
`
const StyledHeader = styled.h1<{ $before: string }>`
    background: linear-gradient(180deg, #67B6FF 16.42%, #FFF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    position: relative; 
    font-weight: 400;
    padding: 0;
    margin: 0;
   
    &::before {
        content: '${props => props.$before}'; 
        -webkit-text-stroke-width: 8px;
        -webkit-text-stroke-color: hsl(215, 29%, 20%);
        position: absolute;
        z-index: -1;     
    }
    @media only screen and (min-width: 768px) {
        &::before { 
        -webkit-text-stroke-width: 16px;
     }  
    }

`;


interface HeaderProps {
    children: ReactNode; 
    before: string;
}

// Define the H1 component
const Header: React.FC<HeaderProps> = ({ children, before }) => {
    return <StyledContainer>
          <StyledHeader $before={before}>
        {children}
        </StyledHeader>
    </StyledContainer>  
};

export default Header;



