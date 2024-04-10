import React from 'react';
import styled, {css} from 'styled-components';
import PopUpHeader from './PopUpHeader';


interface PopupProps {
  onContinue: () => void;
  onNewCategory: () => void;
  onQuit: () => void;
  popupText: string; 
  popupTextButton: string;
}

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg, 
    rgba(26, 4, 58, 0.75) 0%,   /* 75% opacity */
    rgba(21, 18, 120, 0.75) 70.31%,  /* 75% opacity */
    rgba(43, 22, 119, 0.75) 100% /* 75% opacity */
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUpScreen = styled.div`
max-width: 592px;
margin: 0 1.625rem;
padding: 0 1.625rem;
background: linear-gradient(
  180deg,
  rgba(52, 74, 186, 1.0) 0%, 
  rgba(0, 20, 121, 0.75) 100% 
);
box-shadow: inset 0px -8px 0px 4px #140E66, inset 0px 6px 0px 8px #2463FF;
border-radius: 72px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1 {
  font-size: 5.875rem;
  margin-top: -50px;
}
@media only screen and (min-width: 768px) {
margin: 0 5.5rem;
padding: 0 9.9375rem;
h1 {
font-size: 8.375rem;
margin-top: -80px;
}
}

 @media only screen and (min-width: 1024px) {

 }
`

const sharedButtonStyles = css`
  background: #2463FF;
  box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #3C74FF;
  border-radius: 40px;
  height: 62px;
  color: white;
  border: none;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0.05em;
  margin: 0 auto;
  cursor: pointer;
`;

const PopUpButtonContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 2.125rem;
  margin: 2.6875rem 0 3.75rem;
  @media only screen and (min-width: 768px) {
    margin: 3rem 0 4.4375rem;
}
  
`

const PopupButton = styled.button`
${sharedButtonStyles}
width: 226px;

`;

const PopupButtonCategory = styled.button`
 ${sharedButtonStyles}
  width: 275px;
  
`;

const PopupButtonQuit = styled.button`
${sharedButtonStyles}
background: linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
box-shadow: inset 0px -2px 0px 3px #140E66, inset 0px 1px 0px 6px #C642FB;
width: 235px;

`;

const Popup: React.FC<PopupProps> = ({ onContinue, onNewCategory, onQuit, popupText, popupTextButton }) => {

  return (
    <BackgroundContainer>
      <PopUpScreen>
      <PopUpHeader before={popupText} >{popupText}</PopUpHeader>  
      <PopUpButtonContainer>
      <PopupButton onClick={onContinue}>{popupTextButton}</PopupButton>
      <PopupButtonCategory onClick={onNewCategory}>New Category</PopupButtonCategory>
      <PopupButtonQuit onClick={onQuit}>Quit Game</PopupButtonQuit>
      </PopUpButtonContainer>
      </PopUpScreen>
    </BackgroundContainer>
  );
};

export default Popup;
