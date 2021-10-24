import styled from '@emotion/styled';
import SectionTitle from '../ui/SectionTitle';
import FieldLabel from '../ui/FieldLabel';
import TextField from '../ui/TextField';
import Latex from 'react-latex-next';
const equation = '$(e = 1.6 \\times 10^{-19})$';

const TestChargeSection = () => {
    return (
        <Wrapper>
            <SectionTitle>Test Charges</SectionTitle>
            <FieldLabel>Electric Charge: </FieldLabel>
            <TextField type='number' value='1'></TextField>
            <FieldLabel> e Columb</FieldLabel>
            <p>
                <Latex>{equation}</Latex>
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: var(--primary-color);
`;

export default TestChargeSection;