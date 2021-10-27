import type { PointCharge, TestCharge } from 'cs-zeus';

import AddChargeSection from './AddChargeSection';
import CalculationResultSection from './CalculationResultSection';
import ConfigSection from './ConfigSection';
import EditDeleteChargesSection from './EditDeleteChargesSection';
import Footer from './Footer';
import SectionTitle from '../../components/ui/SectionTitle';
import TestChargeSection from './TestChargeSection';
import styled from '@emotion/styled';

type ConfigurationPaneProps = {
	charges: PointCharge[];
	testCharge: TestCharge;
	onAddCharge: (q: number) => void;
	onDeleteCharge: (chargeName: string) => void;
	onEditCharge: (charge: PointCharge) => void;
	onClickExplanationLink: () => void;
};

const ConfigurationPane: React.FC<ConfigurationPaneProps> = ({
	charges,
	testCharge,
	onAddCharge,
	onEditCharge,
	onDeleteCharge,
	onClickExplanationLink,
}) => {
	return (
		<Wrapper>
			<Heading>Superposition Principle</Heading>
			<AddChargeSection onAddCharge={onAddCharge} />
			<TestChargeSection />
			<EditDeleteChargesSection
				charges={charges}
				onEditCharge={onEditCharge}
				onDeleteCharge={onDeleteCharge}
			/>
			<ConfigSection />
			<CalculationResultSection charges={charges} testCharge={testCharge} />
			<Footer onClickExplanationLink={onClickExplanationLink} />
		</Wrapper>
	);
};

const Heading = styled(SectionTitle)`
	padding: 2rem 2rem 1rem 2rem;
`;

const Wrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	min-height: 100vh;
	background-color: var(--primary-color);
	overflow-x: hidden;
`;

export default ConfigurationPane;
