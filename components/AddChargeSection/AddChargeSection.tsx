import TextField from '../ui/TextField';
import Paragraph from '../ui/Paragraph';
import PrimaryButton from '../ui/PrimaryButton';
import styled from '@emotion/styled';
import Latex from 'react-latex-next';

const equation = '$(e = 1.6 \\times 10^{-19})$';

const AddChargeSection = () => {
	return (
		<Wrapper>
			<Heading>Charges</Heading>
			<NewParagraph>
				Electric charge: <TextField defaultValue={0} /> <Span>e Columb</Span>
			</NewParagraph>
			<NewParagraph>
				<Span>
					<Latex>{equation}</Latex>
				</Span>
			</NewParagraph>
			<StyledButton>Add</StyledButton>
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
