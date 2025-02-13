import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HealthBarContainer = styled.div`
  width: 3.0625rem;
  height: 0.5rem;
  background-color: white;
  border-radius: 6rem;
  padding: 0.25rem;
  overflow: hidden;
  
  @media only screen and (min-width: 768px) {
    width: 8.625rem;
    height: 0.8125rem;
    padding: 0.5625rem;
  }

  @media only screen and (min-width: 1024px) {
    width: 13.625rem;
  }
`;

const HealthProgressBar = styled.div<{ width: number, isDamage: boolean }>`
  width: ${(props) => props.width}% ;
  background-color: ${(props) => props.isDamage ? 'red' : 'var(--dark-navy)'}; 
  height: 100%;
  border-radius: 6rem;
  transition: width 0.5s ease, background-color 0.5s ease; 
`;

const HealthBar: React.FC<{ wrongSteps: number }> = ({ wrongSteps }) => {
  const [takingDamage, setTakingDamage] = useState(false);
  const progressBarWidth = 100 - (wrongSteps * 12.5);

  useEffect(() => {
    if (wrongSteps > 0) {
      setTakingDamage(true);
      const damageTimeout = setTimeout(() => {
        setTakingDamage(false);
      }, 1000); 

      return () => clearTimeout(damageTimeout); 
    }
  }, [wrongSteps]); 

  return (
    <HealthBarContainer>
      <HealthProgressBar width={progressBarWidth} isDamage={takingDamage} />
    </HealthBarContainer>
  );
};

export default HealthBar;

