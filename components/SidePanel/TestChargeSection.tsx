import { PointCharge, TestCharge } from 'cs-zeus';

import FieldLabel from '../ui/FieldLabel';
import Latex from 'react-latex-next';
import SectionTitle from '../ui/SectionTitle';
import Swal from 'sweetalert2';
import TextField from '../ui/TextField';
import styled from '@emotion/styled';
import { useState } from 'react';
import withReactContent from 'sweetalert2-react-content';

const customSwal = withReactContent(Swal);

const initialChargeValue = 1;
const equation = '$(e = 1.6 \\times 10^{-19})$';

type TestChargesSectionProps = {
	testCharge: TestCharge;
	onEditCharge: (charge: PointCharge) => void;
};

const TestChargeSection: React.FC<TestChargesSectionProps> = ({
	testCharge,
	onEditCharge,
}) => {
	const [chargeValue, setChargeValue] = useState(initialChargeValue);

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newQ = parseInt(event.target.value);
		if (newQ === 0 || isNaN(newQ)) {
			customSwal.fire({
				title: <WarningP>Warning</WarningP>,
				html: <p>charge value should not be &quot;0&quot; or &quot; &quot;</p>,
			});
		}

		setChargeValue((_) => newQ);
		const newCharge = {
			...testCharge,
			q: parseInt(event.target.value),
		} as PointCharge;
		onEditCharge(newCharge);
	};

	return (
		<Wrapper>
			<SectionTitle>Test Charges</SectionTitle>
			<FieldLabel>Electric Charge: </FieldLabel>
			<TextField
				type='number'
				value={chargeValue}
				onChange={onInputChange}
			></TextField>
			<FieldLabel> e Coulomb</FieldLabel>
			<p>
				<Latex>{equation}</Latex>
			</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 1rem 1rem 1rem 2rem;
	background-color: var(--primary-color);
`;

const WarningP = styled.p`
	color: var(--primary-color);
`;

export default TestChargeSection;
