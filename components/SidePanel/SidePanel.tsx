import type { PointCharge, TestCharge } from 'cs-zeus';

import AddChargeSection from './AddChargeSection';
import { AppConfig } from '../../types/AppConfig';
import CalculationResultSection from './CalculationResultSection';
import ConfigSection from './ConfigSection';
import EditDeleteChargesSection from './EditDeleteChargesSection';
import Footer from './Footer';
import SectionTitle from '../ui/SectionTitle';
import TestChargeSection from './TestChargeSection';
import styled from '@emotion/styled';

type SidePanelProps = {
	appConfig: AppConfig;
	charges: PointCharge[];
	testCharge: TestCharge;
	onAddCharge: (q: number) => void;
	onDeleteCharge: (chargeName: string) => void;
	onEditCharge: (charge: PointCharge) => void;
	onClickExplanationLink: () => void;
	onToggleGrid: (isGridOn: boolean) => void;
};

const SidePanel: React.FC<SidePanelProps> = ({
	appConfig,
	charges,
	testCharge,
	onAddCharge,
	onEditCharge,
	onDeleteCharge,
	onClickExplanationLink,
	onToggleGrid,
}) => {
	return (
		<Wrapper>
			<Heading>Superposition Principle</Heading>
			<ConfigSection isGridOn={appConfig.hasGridLineEnabled} onToggleGrid={onToggleGrid} />
			<AddChargeSection onAddCharge={onAddCharge} />
			<TestChargeSection testCharge={testCharge} onEditCharge={onEditCharge} />
			<EditDeleteChargesSection
				charges={charges}
				onEditCharge={onEditCharge}
				onDeleteCharge={onDeleteCharge}
			/>
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

export default SidePanel;
