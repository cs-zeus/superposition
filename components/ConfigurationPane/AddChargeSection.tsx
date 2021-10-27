import Latex from 'react-latex-next';
import Paragraph from '../ui/Paragraph';
import PrimaryButton from '../ui/PrimaryButton';
import SectionTitle from '../ui/SectionTitle';
import TextField from '../ui/TextField';
import styled from '@emotion/styled';
import { useState } from 'react';

type AddChargesSectionProps = {
	onAddCharge: (q: number) => void;
};

const initialChargeValue = 0;

const equation = '$(e = 1.6 \\times 10^{-19})$';

const AddChargeSection: React.FC<AddChargesSectionProps> = ({
	onAddCharge,
}) => {
	const [chargeValue, setChargeValue] = useState(initialChargeValue);

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const q = parseInt(event.target.value);
		if (isNaN(q)) {
			return;
		}

		setChargeValue((_) => q);
	};

	const onAddChargeButtonClicked = () => {
		onAddCharge(chargeValue);
		setChargeValue(initialChargeValue);
	};

	return (
		<Wrapper>
			<SectionTitle>Add Charge</SectionTitle>
			<NewParagraph>
				Electric charge:{' '}
				<TextField
					defaultValue={initialChargeValue}
					type='number'
					value={chargeValue}
					onChange={onInputChange}
				/>{' '}
				<Span>e Coulomb</Span>
			</NewParagraph>
			<NewParagraph>
				<Span>
					<Latex>{equation}</Latex>
				</Span>
			</NewParagraph>
			<StyledButton
				disabled={chargeValue === 0 || isNaN(chargeValue)}
				onClick={onAddChargeButtonClicked}
			>
				Add
			</StyledButton>
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
	margin-top: 1rem;
	border: 1px solid var(--accent-color);

	&:hover {
		background-color: transparent;
		color: var(--white);
		border-color: var(--accent-color);
	}

	&:disabled {
		background-color: var(--off-white);
		border-color: var(--off-white);
	}
`;

const WarningP = styled.p`
	color: var(--primary-color);
`;

export default AddChargeSection;
