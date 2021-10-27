import TextField from '../ui/TextField';
import Paragraph from '../ui/Paragraph';
import PrimaryButton from '../ui/PrimaryButton';
import SectionTitle from '../ui/SectionTitle';
import styled from '@emotion/styled';
import Latex from 'react-latex-next';

const equation = '$(e = 1.6 \\times 10^{-19})$';

const AddChargeSection = () => {
	return (
		<Wrapper>
			<SectionTitle>Charges</SectionTitle>
			<NewParagraph>
				Electric charge: <TextField defaultValue={0}/> <Span>e Columb</Span>
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
	padding: 1rem 1rem 1rem 2rem;
	background-color: var(--primary-color);
`;

const NewParagraph = styled(Paragraph)`
	margin-top: 0.25rem;
	color: var(--white);
`;

const Span = styled.span`
	font-size: 0.875rem;
`;

const StyledButton = styled(PrimaryButton)`
	margin: 0;
	margin-top:1rem;
`;

export default AddChargeSection;
