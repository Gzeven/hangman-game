"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HangManLogo from "/public/assets/images/logo.svg";
import IconPlay from "/public/assets/images/icon-play.svg";
import styled from "styled-components";

const MainMenuContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
`

const MainMenuContent = styled.div`
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: inset 0px -8px 0px 4px #140e66, inset 0px 6px 0px 8px #2463ff;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86.4%;
  margin-top: 4rem;

  @media only screen and (min-width: 768px) {
    max-width: 37rem;
    margin-top: 6.875rem;
  }
`;

const LogoImageContainer = styled.div`
  img {
    height: 130.2px;
    width: 263px;
    margin-top: -3rem;
  }
  @media only screen and (min-width: 768px) {
    img {
      height: 185px;
      width: 373.69px;
      margin-top: -6.5rem;
    }
  }
`;

const PlayButton = styled(Link)`
  margin-top: 3.6125rem;
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: inset 0px -4px 0px 5px #243041, inset 0px -12px 0px 11px #9d2df5;
  border-radius: 999px;

  img {
    width: 52.83px;
    height: 49.81px;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.25),
          rgba(255, 255, 255, 0.25)
        ),
        linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
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
`;

const HowToPlayButton = styled(Link)`
  margin: 3.5625rem 0 4rem;
  background: #2463ff;
  box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #3c74ff;
  border-radius: 2.5rem;
  width: 16.25rem;
  height: 3.875rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  transition: background 2s;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.25),
          rgba(255, 255, 255, 0.25)
        ),
        #2463ff;
      box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #3c74ff;
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
      <MainMenuContent>
      <LogoImageContainer>
        <Image src={HangManLogo} alt="HangMan Gamelogo" priority={true} />
      </LogoImageContainer>
      <PlayButton href="/category-pick">
        <Image src={IconPlay} alt="Play the Hangman Game" />
      </PlayButton>

      <HowToPlayButton href="/how-to-play">
        <p>How to Play</p>
      </HowToPlayButton>
      </MainMenuContent>
    </MainMenuContainer>
  );
};

export default MainMenu;
