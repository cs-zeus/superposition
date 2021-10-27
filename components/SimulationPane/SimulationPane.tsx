import { PointCharge, TestCharge } from 'cs-zeus';

import { AppConfig } from '../../types/AppConfig';
import styled from '@emotion/styled';
import { useEffect } from 'react';
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
	const { updateCharges, updateTestCharge, updateGridLine } = useInteractive(
		canvasId,
		charges,
		testCharge,
		onChargePositionUpdate,
		appConfig.hasGridLineEnabled
	);

	useEffect(() => {
		updateGridLine(appConfig.hasGridLineEnabled)
	}, [appConfig, updateGridLine])

	useEffect(() => {
		updateCharges(charges);
	}, [charges, updateCharges]);

	useEffect(() => {
		updateTestCharge(testCharge);
	}, [testCharge, updateTestCharge]);

	return <Wrapper id={canvasId}></Wrapper>;
};

const Wrapper = styled.div`
	background-color: #303a52;
	width: 100%;
`;

export default SimulationPane;
