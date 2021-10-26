import styled from '@emotion/styled';
import type { PointCharge, TestCharge } from 'cs-zeus';

import SectionTitle from '../../components/ui/SectionTitle';
import AddChargeSection from './AddChargeSection';
import TestChargeSection from './TestChargeSection';
import ConfigSection from './ConfigSection';
import EditDeleteChargesSection from './EditDeleteChargesSection';
import CalculationResultSection from './CalculationResultSection';
import Footer from './Footer';

type ConfigurationPaneProps = {
	charges: PointCharge[];
	testCharge: TestCharge;
	onDeleteCharge: (chargeName: string) => void;
	onEditCharge: (charge: PointCharge) => void;
	onClickExplanationLink: () => void;
};

const ConfigurationPane: React.FC<ConfigurationPaneProps> = ({
	charges,
	testCharge,
	onEditCharge,
	onDeleteCharge,
	onClickExplanationLink,
}) => {
	return (
		<Wrapper>
			{/* <SectionWrapper>
				<SectionTitle>Superposition Principle</SectionTitle>
			</SectionWrapper> */}
      <Heading>Superposition Principle</Heading>
			<AddChargeSection />
			<TestChargeSection />
			<ConfigSection />
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
`

const Wrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	min-height: 100vh;
	background-color: var(--primary-color);
  overflow-x:hidden;
`;

const SectionWrapper = styled.div`
	padding: 2rem 2rem;
`;

export default ConfigurationPane;
