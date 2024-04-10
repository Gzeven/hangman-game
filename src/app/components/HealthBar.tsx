import styled from 'styled-components';

const HealthBarContainer = styled.div`
  width: 49px;
  height: 0.5rem;
  background-color: white;
  border-radius: 96px;
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

const HealthProgressBar = styled.div<{ width: number }>`
  width: ${(props) => props.width}% ;
  background-color: var(--dark-navy);
  height: 100%;
  border-radius: 96px;
  transition: width 0.5s ease;
`;

const HealthBar: React.FC<{ wrongSteps: number }> = ({ wrongSteps }) => {
  const progressBarWidth = 100 - (wrongSteps * 12.5);
   
  return (
    <HealthBarContainer>
      <HealthProgressBar width={progressBarWidth} />
    </HealthBarContainer>
  );
};

export default HealthBar;
