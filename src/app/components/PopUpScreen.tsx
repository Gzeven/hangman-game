import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import PopUpHeader from "./PopUpHeader";
import { easeInOut, motion } from "framer-motion";
import { text } from "stream/consumers";

interface PopupProps {
  onContinue: () => void;
  onNewCategory: () => void;
  onQuit: () => void;
  getPopupContent: () => { text: string; buttonText: string };
}

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(26, 4, 58, 0.75) 0%,
    /* 75% opacity */ rgba(21, 18, 120, 0.75) 70.31%,
    /* 75% opacity */ rgba(43, 22, 119, 0.75) 100% /* 75% opacity */
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUpScreen = styled(motion.div)`
  max-width: 592px;
  margin: 0 1.625rem;
  padding: 0 1.625rem;
  background: linear-gradient(
    180deg,
    rgba(52, 74, 186, 1) 0%,
    rgba(0, 20, 121, 0.75) 100%
  );
  box-shadow: inset 0px -8px 0px 4px #140e66, inset 0px 6px 0px 8px #2463ff;
  border-radius: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 5.875rem;
    margin-top: -3.125rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 0 9.9375rem;
    h1 {
      font-size: 8.375rem;
      margin-top: -5rem;
    }
  }

  @media only screen and (min-width: 1024px) {
  }
`;

const sharedButtonStyles = css`
  background: #2463ff;
  box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #3c74ff;
  border-radius: 2.5rem;
  height: 3.875rem;
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
`;

const PopupButton = styled.button`
  ${sharedButtonStyles}
  width: 14.125rem;
`;

const PopupButtonCategory = styled.button`
  ${sharedButtonStyles}
  width: 17.1875rem;
`;

const PopupButtonQuit = styled.button`
  ${sharedButtonStyles}
  background: linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
  box-shadow: inset 0px -2px 0px 3px #140e66, inset 0px 1px 0px 6px #c642fb;
  width: 14.6875rem;
`;

const Popup: React.FC<PopupProps> = ({
  onContinue,
  onNewCategory,
  onQuit,
  getPopupContent,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set focus to the pop-up when it mounts
    if (popupRef.current) {
      popupRef.current.focus();
    }
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "Enter":
        // Trigger action based on focused element
        switch (document.activeElement) {
          case popupRef.current:
            // Handle pressing Enter on the pop-up to prevent accidental dismissals
            break;
          case document.querySelector("#continueButton"):
            onContinue();
            break;
          case document.querySelector("#newCategoryButton"):
            onNewCategory();
            break;
          case document.querySelector("#quitButton"):
            onQuit();
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const { text, buttonText } = getPopupContent();

  return (
    <BackgroundContainer>
      <PopUpScreen
        ref={popupRef}
        tabIndex={0} // Make the pop-up focusable
        onKeyDown={handleKeyDown} // Listen for keyboard events
        initial={{ opacity: 0, y: 50 }} // Initial animation values
        animate={{ opacity: 1, y: 0 }} // Animation when the component mounts
        transition={{ ease: easeInOut, duration: 0.4 }}
      >
        <PopUpHeader before={text}>{text}</PopUpHeader>
        <PopUpButtonContainer>
          <PopupButton id="continueButton" onClick={onContinue}>
            {buttonText}
          </PopupButton>
          <PopupButtonCategory id="newCategoryButton" onClick={onNewCategory}>
            New Category
          </PopupButtonCategory>
          <PopupButtonQuit id="quitButton" onClick={onQuit}>
            Quit Game
          </PopupButtonQuit>
        </PopUpButtonContainer>
      </PopUpScreen>
    </BackgroundContainer>
  );
};

export default Popup;
