import TextField from '../ui/TextField';
import Paragraph from '../ui/Paragraph';
import PrimaryButton from '../ui/PrimaryButton';
import styled from '@emotion/styled';

const AddChargeSection = () => {
  return (
    <Wrapper>
      <Heading>Charges</Heading>
      <NewParagraph>
        Electric charge: <TextField defaultValue={0} /> <Span>n Columb</Span>
      </NewParagraph>
      <NewParagraph>
        <Span>(n = 1.6 x 10^(-19))</Span>
      </NewParagraph>
      <StyledButton>Add</StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
  color: var(--white);
  font-size: 1.5rem;
  font-weight: bold;
`;

const NewParagraph = styled(Paragraph)`
  margin-top: 0.25rem;
  color: var(--white);
`;

const Span = styled.span`
  font-size: 0.875rem;
`;

const StyledButton = styled(PrimaryButton)`
  margin: 1rem 0;
`;

export default AddChargeSection;
