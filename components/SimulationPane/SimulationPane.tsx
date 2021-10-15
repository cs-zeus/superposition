import { PointCharge, TestCharge } from 'cs-zeus';

import { AppConfig } from '../../types/AppConfig';
import styled from '@emotion/styled';
import { useInteractive } from '../../hooks/useInteractive';

type SimulationPaneProps = {
	charges: PointCharge[];
	testCharge: TestCharge;
	onChargePositionUpdate: (charge: PointCharge) => void;
	appConfig: AppConfig;
};

const canvasId = 'simulation-pane';

const SimulationPane: React.FC<SimulationPaneProps> = ({
	charges,
	testCharge,
	onChargePositionUpdate,
	appConfig,
}) => {
	useInteractive(
		canvasId,
		charges,
		testCharge,
		onChargePositionUpdate,
		appConfig.hasGridLineEnabled
	);

	return <Wrapper id={canvasId}></Wrapper>;
};

const Wrapper = styled.div`
	background-color: #303a52;
	width: 100%;
`;

export default SimulationPane;
