"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styled from 'styled-components';
import IconBack from '/public/assets/images/icon-back.svg'
import Header from './Header';
import SharedButton from './SharedButton';

const HowToPlayContainer = styled.div`
background: linear-gradient(
  180deg, 
  rgba(26, 4, 58, 0.75) 0%,   /* 75% opacity */
  rgba(21, 18, 120, 0.75) 70.31%,  /* 75% opacity */
  rgba(43, 22, 119, 0.75) 100% /* 75% opacity */
);
padding: 2rem 1.5625rem 3.6875rem;

@media only screen and (min-width: 768px) {
  padding: 3.8125rem 2.5rem 6.125rem;  
 }

 @media only screen and (min-width: 1024px) {
  padding: 5rem 7rem 10.4375rem;  
 }

`

const HowToPlayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 3rem;
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto auto;
    h1 {
    font-size: 6.5rem;
  }
  @media only screen and (min-width: 1024px) {
    h1 {
    font-size: 8.5rem;
  }
 }
 }
`

const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4.9375rem;
  @media only screen and (min-width: 768px) {
    margin-top: 6.25rem;
    gap: 2rem;
    }
    @media only screen and (min-width: 1024px) {
  margin-top: 4rem;
    flex-direction: row;
    }
`;

const InfoBox = styled.div`
background-color: var(--white);
padding: 2rem;
border-radius: 1.25rem;
display: flex;

display: grid; 
  grid-template-columns: 20px 1fr; 
  gap: 1rem 1rem; 
  grid-template-areas: 
    "number title"
    "content content";
    @media only screen and (min-width: 768px) {
      padding: 2rem 2.5rem;
      border-radius: 2.5rem;
      grid-template-columns: 60px 1fr; 
  grid-template-rows: 40px 1fr; 
  gap: 1rem 40px; 
  grid-template-areas: 
    "number title"
    "number content"; 
    }
    @media only screen and (min-width: 1024px) {
      padding: 3.75rem 3rem;
      grid-template-columns: 1fr; 
  grid-template-rows: 106px 58px  1fr; 
  gap: 2.5rem; 
  grid-template-areas: 
    "number"
    "title" 
     "content"; 
     text-align: center;
} 

`;

const InfoBoxNumber = styled.div`
grid-area: number;
margin: auto;
 span{
    color:var(--blue);
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    padding: 0;
    @media only screen and (min-width: 768px) {
   font-size: 5.5rem;
    }
  } 
 
`

const InfoBoxTitle = styled.div`
grid-area: title;

  h2 {
  font-size: 1.5rem;
  font-weight: 400;
line-height: 120%;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--dark-navy);
padding: 0;
margin: 0;
justify-content: flex-start;

@media only screen and (min-width: 768px) {
   font-size: 2.5rem;
   
    }

}
`

const InfoBoxContent = styled.div`
grid-area:content;
  p {
  font-size: 1rem;
line-height: 120%;
letter-spacing: 0.05em;
color: #887DC0;
padding:0;
margin: 0;
@media only screen and (min-width: 768px) {
   font-size: 1.25rem;
    }
}
`

const HowToPlayPage: React.FC = () => {
  return (
    <HowToPlayContainer>
     <HowToPlayHeader>
    
        <SharedButton href="/">
        <Image src={IconBack} alt="Play button" width="0"
    height="0" /> 
        </SharedButton>
        <Header before="How to Play" >How to Play</Header>      
     </HowToPlayHeader>
   
      <InfoBoxContainer>
        <InfoBox>
          <InfoBoxNumber>
          <span>01</span> 
          </InfoBoxNumber>
        <InfoBoxTitle>   <h2>Choose a Category</h2>  </InfoBoxTitle>
         <InfoBoxContent>
         <p>
            First, choose a word category, like animals or movies. The computer then randomly selects a secret word
            from that topic and shows you blanks for each letter of the word.
          </p>
         </InfoBoxContent>  
        </InfoBox>
        
        <InfoBox>
        <InfoBoxNumber><span>02</span></InfoBoxNumber>
         <InfoBoxTitle><h2> Guess Letters</h2></InfoBoxTitle> 
        <InfoBoxContent><p>
            Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If
            it&#96;s wrong, you lose some health, which empties after eight incorrect guesses.
          </p></InfoBoxContent>  
        </InfoBox>
        <InfoBox>
        <InfoBoxNumber><span>03</span></InfoBoxNumber>
         <InfoBoxTitle><h2> Win or Lose</h2></InfoBoxTitle> 
         <InfoBoxContent>   <p>
            You win by guessing all the letters in the word before your health runs out. If the health bar empties
            before you guess the word, you lose.
          </p></InfoBoxContent>
       
        </InfoBox>
      </InfoBoxContainer>
    </HowToPlayContainer>
  );
};

export default HowToPlayPage;
