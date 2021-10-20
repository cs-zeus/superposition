import Paragraph from '../ui/Paragraph';
import ToggleButton from '../ui/ToggleButton';
import styled from '@emotion/styled';
import { useState } from 'react';

const ConfigSection = () => {
  const [isOnGrid, setIsOnGrid] = useState(true);

  const toggleHandler = () => {
    setIsOnGrid((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Heading>Simulation Configuration</Heading>
      <ParamWrapper>
        <NewParagraph>Gridline</NewParagraph>
        <ToggleButton onToggle={toggleHandler} isOn={isOnGrid} />
      </ParamWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
	margin-top: 2rem;
	padding: 2rem;
  background-color: var(--primary-color);
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
  color: var(--white);
  font-size: 1.5rem;
  font-weight: bold;
`;

const ParamWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
`;

const NewParagraph = styled(Paragraph)`
  margin-top: 0.25rem;
  color: var(--white);
`;

export default ConfigSection;
