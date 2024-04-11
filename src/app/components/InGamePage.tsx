"use client"
import React, { useState, useEffect,  Suspense  } from 'react';
import Image from 'next/image'
import HealthBar from './HealthBar';
import { useSearchParams, useRouter } from 'next/navigation';
import styled, { keyframes } from 'styled-components';
import data from '../../../public/data.json';
import Popup from './PopUpScreen';
import PopupMenu from '/public/assets/images/icon-menu.svg'
import Heart from '/public/assets/images/icon-heart.svg'

interface Word {
  name: string;
  selected: boolean;
}

interface Categories {
  [key: string]: Word[];
  Movies: { name: string; selected: boolean; }[];
  "TV Shows": { name: string; selected: boolean; }[];
  Countries: { name: string; selected: boolean; }[];
  "Capital Cities": { name: string; selected: boolean; }[];
  Animals: { name: string; selected: boolean; }[];
  Sports: { name: string; selected: boolean; }[];
}

const InGameContainer = styled.div`
background: linear-gradient(
  180deg, 
  rgba(26, 4, 58, 0.75) 0%,   /* 75% opacity */
  rgba(21, 18, 120, 0.75) 70.31%,  /* 75% opacity */
  rgba(43, 22, 119, 0.75) 100% /* 75% opacity */
);
padding: 2.5625rem 1.5625rem 10.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media only screen and (min-width: 768px) {
    padding: 3.8125rem 2.5rem 6.5rem; 
 }
`;

const InGameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const PopUpMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media only screen and (min-width: 768px) {
  gap: 2rem;
 }
 @media only screen and (min-width: 1024px) {
  gap: 3.5625rem;
 }
 
`

const HealthBarContainer = styled.div`
  display: flex;
align-items: center;
gap: 1rem;
img {
  width: 26.16px;
  height: 100%;
}
@media only screen and (min-width: 768px) {
  gap: 2.5rem;
  img {
  width: 53.33px;
}
}
`

const PopUpMenuButton = styled.button`
background: linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
box-shadow: inset 0px -5px 0px -1px rgba(157, 45, 245, 0.25);
border-radius: 999px;
height: 2.5rem;
width: 2.5rem;
display: flex;
border: none;
cursor: pointer;
img {
  width: 17.45px;
  height: 16.17px;
  margin: auto;

}
@media only screen and (min-width: 768px) {
  height: 4rem;
width: 4rem;
margin: auto 0;
img {
  width: 27.91px;
  height: 25.87px;
  
 }
}
@media only screen and (min-width: 1024px) {
  height: 5.875rem;
width: 5.875rem;
margin-top: 0;
img {
  width: 41px;
  height: 38px;
 }
}
`
const CurrentCategory = styled.div`
  color: var(--white);
  font-size: 2.5rem;
letter-spacing: -0.005em;
@media only screen and (min-width: 768px) {
  font-size: 3rem;
 }
 @media only screen and (min-width: 1024px) {
  font-size: 5.5rem;
 }
`

const GameGrid = styled.div`
display: flex;
flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4.875rem -2rem 7.375rem;
  font-size: 2.5rem;
  text-transform: uppercase;
  gap: 0.75rem 0px;
  @media only screen and (min-width: 768px) {
  margin: 6.9375rem -2rem 8.375rem;
  font-size: 4rem;
 }
 @media only screen and (min-width: 1024px) {
  margin: 5.5rem -2rem 7.5rem;
  font-size: 5.5rem;
 }
`;

const LetterBox = styled.div<{ $guessed: boolean }>`
  width: 2.5rem;
  height: 4.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  opacity: ${props => (props.$guessed ? '100%' : '25%')};
  color: var(--white);  
  box-shadow: 0px -2px 0px 3px #140E66 inset, 0px 1px 0px 6px #3C74FF inset;
  border-radius: 0.75rem;
  transition: all 1s ease-in-out;

  @media only screen and (min-width: 768px) {
    width: 5.42875rem;
  height: 7rem;
  border-radius: 2rem;
 }
 @media only screen and (min-width: 1024px) {
  width: 7rem;
  height: 8rem;
  border-radius: 2.5rem;
 }
`;

const LetterBoxContent = styled.div`
 display: flex;
 flex-wrap: wrap; 
 justify-content: center;
 gap: 0.75rem 0.5rem;
 margin: 0 1.25rem;
 @media only screen and (min-width: 768px) {
  gap: 1rem 0.75rem;
  margin: 0 2.75rem;
 }
 @media only screen and (min-width: 1024px) {
 gap: 1rem;
 margin: 0 3.5rem;
 }
`

const EmptyLetterBox = styled.div`
   width: 2.5rem;
  height: 4.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;


const LetterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  gap: 1.5rem 0.5rem;
  width: 100%;
  @media only screen and (min-width: 768px) {
  gap: 1.5rem 1rem;
 }
 @media only screen and (min-width: 1024px) {
  gap: 1.5rem 1.5rem;
 }
  /* margin-bottom: 24px; */
`;

const LetterButton = styled.button`
  width: 100%;
  height: 3.5rem; /* Adjust height as needed */
  /* font-size: 2.5rem; */
  background-color: var(--white);
  color: var(--dark-navy);
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? 0.25 : 1)};
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--blue);
      color: var(--white);
  } 
  }
  @media only screen and (min-width: 768px) {
  height: 5.25rem;
  font-size: 3rem;
  border-radius: 1.5rem;
 }
`;



const InGamePage: React.FC = () => {
  const [health, setHealth] = useState(8);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [word, setWord] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams[1];
  const router = useRouter();
  const [wrongSteps, setWrongSteps] = useState(0);
  

  // Select a random word from the chosen category
  useEffect(() => {
    if (currentCategory) {
      const categoryWords = (data.categories as Categories)[currentCategory];

      // Check if there are unplayed words
      const unplayedWords = categoryWords.filter(word => !word.selected);
      
      
      if (unplayedWords.length === 0) {
        // Reset all words to unplayed if all words have been played
        categoryWords.forEach(word => (word.selected = false));
      }

      // Filter out unplayed words again after reset
      const availableWords = categoryWords.filter(word => !word.selected);

      // Select a random word from the available unplayed words
      const randomIndex = Math.floor(Math.random() * availableWords.length);
      const selectedWord = availableWords[randomIndex];
      setWord(selectedWord.name.toUpperCase());
      selectedWord.selected = true; // Mark the selected word as played
     
      
    }
  }, [currentCategory]);

  const getPopupText = (): string => {
    if (isWordGuessed()) {
      return 'You Win';
    } else if (health === 0) {
      return 'You Lose';
    } else {
      return 'Paused';
    }
  };


  const getPopupTextButton = (): string => {
    if (isWordGuessed() ) {
      return 'Play Again';
    } else if (health === 0) {
      return 'Play Again';
    } else {
      return 'Continue';
    }
  };


  // Handler function for letter selection
  const handleLetterSelect = (letter: string) => {
    if (!selectedLetters.includes(letter)) {
      setSelectedLetters([...selectedLetters, letter]);

      if (!word.includes(letter)) {
        setHealth(health - 1);
        setWrongSteps(wrongSteps + 1);
      } else {
        setWord(word.replace(new RegExp(letter, 'g'), letter.toLowerCase()));
      }
    }
  };

  // Render letter buttons
  const renderLetters = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return letters.map((letter, index) => (
      <LetterButton
        key={index}
        onClick={() => handleLetterSelect(letter)}
        disabled={selectedLetters.includes(letter)}
      >
        {letter}
      </LetterButton>
    ));
  };



  const isWordGuessed = (): boolean => {
    const wordWithoutSpecialChars = word.replace(/[^A-Za-z]/g, ''); // Remove special characters
    const guessedWord = wordWithoutSpecialChars
      .split('')
      .map(letter => (selectedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : '_'))
      .join('');
    return guessedWord === wordWithoutSpecialChars.toUpperCase();
  };


  

  useEffect(() => {
    if (initialRender) {
      // Skip showing popup on initial render
      setInitialRender(false);
    } else if (isWordGuessed() || health === 0) {
      setShowPopup(true);
    } 
  }, [selectedLetters, health, initialRender]);


  const handleContinue = () => {
    if (!isWordGuessed() && health !== 0) {
      setShowPopup(false);
    } else {
      setShowPopup(false);
      setSelectedLetters([]);
      setHealth(8);
      setWrongSteps(0);
  
      const fetchNewWord = () => {
        if (currentCategory) {
          const categoryWords = (data.categories as Categories)[currentCategory];
  
          // Filter out the unplayed words
          const unplayedWords = categoryWords.filter(word => !word.selected);
       
          // Select a random word from the available unplayed words
          if (unplayedWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * unplayedWords.length);
            const selectedWord = unplayedWords[randomIndex];
            setWord(selectedWord.name.toUpperCase());
            selectedWord.selected = true; // Mark the selected word as played
          } else {
            // Reset all words to unplayed if all words have been played
            categoryWords.forEach(word => (word.selected = false));
  
            // Select a random word after reset
            const randomIndex = Math.floor(Math.random() * categoryWords.length);
            const selectedWord = categoryWords[randomIndex];
            setWord(selectedWord.name.toUpperCase());
            selectedWord.selected = true; // Mark the selected word as played
          }
        }
      };
  
      fetchNewWord();
    }
  };

  const handleNewCategory = () => {
    router.push('/category-pick');
    setShowPopup(false);
  };

  const handleQuit = () => {
    router.push('/')
    setShowPopup(false);

  };


  const renderWord = () => {
    if (!word) return null; // Return null if word is not defined

  const renderCharacter = (char: string, index: number) => {
    const isLetter = /[A-Za-z]/.test(char);
    const isSpace = char === ' ';

    if (isLetter) {
      const isGuessed = selectedLetters.includes(char.toUpperCase());
      return (
        <LetterBox key={index} $guessed={isGuessed}>
          {isGuessed ? char : ''}
        </LetterBox>
      );
    } else if (isSpace) {
      // return <EmptyLetterBox key={index} />;
      return <React.Fragment key={index} />;
    } else {
      // Special characters are already "guessed" and displayed in LetterBox
      return (
        <LetterBox key={index} $guessed={true}>
          {char}
        </LetterBox>
      );
    }
  };
    // Split the sentence into words
    const words = word.split(/\s+/);
  
    // Render each word in a separate container
    const renderWordElements = words.map((segment, index) => (
      <LetterBoxContent key={index} >
       
        {segment.split('').map((char, charIndex) => renderCharacter(char, charIndex))}
        {/* Render space if it's not the last word */}
        {index < words.length - 1 && renderCharacter(' ', index)}
       
       
      </LetterBoxContent>
    ));
  
    return renderWordElements;
  };


  return (
    <Suspense fallback={<div>Loading...</div>}>
    <InGameContainer>
      <InGameHeader>
        <PopUpMenuContainer>
        <PopUpMenuButton onClick={() => setShowPopup(true)}>
          <Image src={PopupMenu} alt="Go to popup Menu" /> 
        </PopUpMenuButton>
      <CurrentCategory>{currentCategory}</CurrentCategory>
        </PopUpMenuContainer>
      <HealthBarContainer>
      <HealthBar wrongSteps={wrongSteps} />
      <Image src={Heart} alt="Hearth" /> 
      </HealthBarContainer>
      </InGameHeader>
    
      <GameGrid>{renderWord()}</GameGrid>

      <LetterGrid>{renderLetters()}</LetterGrid>
   
      {showPopup && (
      <Popup 
        onContinue={handleContinue} 
        onNewCategory={handleNewCategory} 
        onQuit={handleQuit} 
        popupText={getPopupText()} 
        popupTextButton={getPopupTextButton()}
      />
    )}
    </InGameContainer>
    </Suspense>
  );
};

export default InGamePage;
