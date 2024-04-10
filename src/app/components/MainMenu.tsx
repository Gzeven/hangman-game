"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import HangManLogo from '/public/assets/images/logo.svg';
import IconPlay from  '/public/assets/images/icon-play.svg';
import styled from 'styled-components';

const MainMenuContainer = styled.div`
background: linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%);
box-shadow: inset 0px -8px 0px 4px #140E66, inset 0px 6px 0px 8px #2463FF;
border-radius: 3rem;
margin: 12.875rem 1.5625rem 7.8125rem;
display: flex;
flex-direction: column;
align-items: center;

@media only screen and (min-width: 768px) {
max-width: 37rem;
margin: 12.9375rem auto;
  }

@media only screen and (min-width: 1024px) {
    margin: 19.5625rem auto 13.1875rem;
}

`

const LogoImageContainer = styled.div`
position: relative;
img {
 height: 130.2px;
 width: 263px;
 margin-top: -3rem;
}
@media only screen and (min-width: 768px) {
  img{
height: 185px;
width: 373.69px;
margin-top:  -7rem;
  }

    }
@media only screen and (min-width: 1024px) {

     }
`

const PlayButton = styled(Link)`
margin-top: 3.6125rem;
width: 10rem;
height: 10rem;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
box-shadow: inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9D2DF5;
border-radius: 999px;
/* transition: background 2s ease-in-out; */
img {
  width: 52.83px;
  height: 49.81px;
}
@media(hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
  } 
  }


 
  @media only screen and (min-width: 768px) {
width: 12.5rem;
height: 12.5rem;
margin-top: 3.375rem;

img {
  width: 66.04px;
  height: 62.26px;
}
    }
@media only screen and (min-width: 1024px) {

     }  
`;


const HowToPlayButton = styled(Link)`
margin: 3.5625rem 0 4rem;
background: #2463FF;
box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF;
border-radius: 2.5rem;
width: 16.25rem;
height: 3.875rem;
text-align: center;
text-decoration: none;
display: flex;
@media(hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), #2463FF;
      box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF;
  } 
}
p {
color: var(--white);
letter-spacing: 0.05em;
font-size: 32px;
margin: auto;
text-transform: uppercase;


}

@media only screen and (min-width: 768px) {
  margin: 3.625rem 0 3.1875rem;
    }
`;


const MainMenu: React.FC = () => {
  return (
    <MainMenuContainer>
      <LogoImageContainer>
        <Image src={HangManLogo}  alt="HangMan Gamelogo" />
      </LogoImageContainer>
        <PlayButton href="/category-pick">
          <Image src={IconPlay}  alt="Play the Hangman Game" /> 
        </PlayButton>
      
 
        <HowToPlayButton href="/how-to-play">
          <p>How to Play</p>
        </HowToPlayButton>
    
    </MainMenuContainer>
  );
};

export default MainMenu;
