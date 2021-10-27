import {
	PointCharge,
	TestCharge,
	getElectricFieldMultiplyByN,
	getElectricForceMultiplyByN,
} from 'cs-zeus';
import {
	buildLatexScientificNotation,
	buildLatexUnitVectorMatrix,
} from '../../utils/KatexUtilities';
import {
	getUnitVector,
	getVectorDistance,
	getVectorSize,
	subtractVector,
} from 'cs-zeus/lib/vector';

import Latex from 'react-latex-next';
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import styled from '@emotion/styled';

type CalculationResultSectionProps = {
	charges: PointCharge[];
	testCharge: TestCharge;
};

const CalculationResultSection: React.FC<CalculationResultSectionProps> = ({
	charges,
	testCharge,
}) => {
	const totalElectricField = getElectricFieldMultiplyByN(charges, testCharge);
	const totalElectricForce = getElectricForceMultiplyByN(charges, testCharge);
	const totalElectricFieldUnitVectorInLatex = buildLatexUnitVectorMatrix(
		getUnitVector(totalElectricField)
	);
	const totalElectricForceUnitVectorInLatex = buildLatexUnitVectorMatrix(
		getUnitVector(totalElectricForce)
	);
	const totalElectricFieldWithVectorLatex = `${buildLatexScientificNotation(
		getVectorSize(totalElectricField),
		0,
		''
	)}${totalElectricFieldUnitVectorInLatex}`;
	const totalElectricForceWithVectorLatex = `${buildLatexScientificNotation(
		getVectorSize(totalElectricForce),
		0,
		''
	)}${totalElectricForceUnitVectorInLatex}`;
	const electricFieldComponentEquation = charges.reduce(
		(prevRawLatex, charge) => {
			return (
				prevRawLatex + `\\vec{E}_{${charge.name.replace('Charge', '')}t} + `
			);
		},
		''
	);
	const electricFieldComponentCalculation = charges.reduce(
		(prevRawLatex, charge, currentIndex, arr) => {
			const electricField = getElectricFieldMultiplyByN([charge], testCharge);
			const electricFieldUnitVector = getUnitVector(electricField);
			const electricFieldUnitVectorLatexMatrix = buildLatexUnitVectorMatrix(
				electricFieldUnitVector
			);
			return (
				prevRawLatex +
				`${buildLatexScientificNotation(
					getVectorSize(getElectricFieldMultiplyByN([charge], testCharge)),
					0,
					''
				)}${electricFieldUnitVectorLatexMatrix} ${
					(currentIndex + 1) % 2 == 0
						? `$$ \n $$ ${
								currentIndex + 1 != arr.length ? `\\hspace{1.1cm}` : ``
						  }`
						: ``
				} + `
			);
		},
		''
	);
	const electricFieldTotalLatex = `$$\\vec{E}_{total} = ${electricFieldComponentEquation.substr(
		0,
		electricFieldComponentEquation.length - 2
	)}$$\n $$\\hspace{0.88cm} = ${electricFieldComponentCalculation.substr(
		0,
		electricFieldComponentCalculation.length - 2
	)}$$\n  $$\\hspace{0.88cm}= ${totalElectricFieldWithVectorLatex}\\ \\frac{N}{C}$$`;
	const electricForceEquation = `Q_{t} \\times \\vec{E}_{total}`;
	const electricForceTotalLatex = `$$\\vec{F}_{total} = ${electricForceEquation} = (${testCharge.q} \\times e) \\times ${totalElectricFieldWithVectorLatex}$$ \n $$\\hspace{0.86cm} = ${totalElectricForceWithVectorLatex}\\ N$$`;
	return (
		<Wrapper>
			<SectionTitle>Calculation</SectionTitle>
			{charges.map((charge) => {
				const r = subtractVector(charge.position, testCharge.position);
				const rUnitVector = getUnitVector(r);
				const rUnitVectorLatexMatrix = buildLatexUnitVectorMatrix(rUnitVector);
				const electricField = getElectricFieldMultiplyByN([charge], testCharge);
				const electricFieldUnitVector = getUnitVector(electricField);
				const electricFieldUnitVectorLatexMatrix = buildLatexUnitVectorMatrix(
					electricFieldUnitVector
				);
				const chargeName = charge.name.replace('Charge', '');
				const lawLatex = `$$\\vec{E}_{${chargeName}T} = \\frac{kQ}{(r_{${chargeName}T})^2}\\widehat{r}_{${chargeName}T} = \\frac{(9.0 \\times 10^{9}) \\times (${
					charge.q
				} \\times e)}{(${getVectorDistance(
					charge.position,
					testCharge.position
				).toFixed(
					2
				)})^2}${rUnitVectorLatexMatrix}$$\n $$\\hspace{2.55cm}= ${buildLatexScientificNotation(
					getVectorSize(electricField),
					0,
					''
				)}${electricFieldUnitVectorLatexMatrix}\\ \\frac{N}{C}$$`;
				return (
					<Equation key={`electric-field-from-${charge.name}`}>
						<Latex>{lawLatex}</Latex>
					</Equation>
				);
			})}
			<Equation key='E-total'>
				<Latex>{electricFieldTotalLatex}</Latex>
			</Equation>
			<Equation key='F-total'>
				<Latex>{electricForceTotalLatex}</Latex>
			</Equation>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--primary-color);
	width: 100%;
	padding: 1rem 1rem 1rem 2rem;
`;

const Equation = styled.p`
	font-size: 24px;
	color: var(--white);
`;

export default CalculationResultSection;
