import { PointCharge, TestCharge } from 'cs-zeus';

import { AppConfig } from '../../types/AppConfig';
import styled from 'styled-components';
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

const InteractiveWrapper = styled.div`
	.window {
		display: block;
		margin: 0 auto 1.5em auto;
		box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.15),
			0 3px 10px 0 rgba(0, 0, 0, 0.19);
		overflow: hidden;
	}

	.border {
		border: 1px solid grey;
	}

	.input-container {
		width: 100%;
		height: 2rem;
		margin-bottom: 1rem;
	}

	input.input {
		width: 100%;
		height: 2rem;
		padding-left: 8px;
		-webkit-appearance: textfield;
		border: 1px solid grey;
		border-radius: 4px;
		font-size: 14px;
	}

	.interactive {
		font-family: 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
		font-weight: normal;
		font-feature-settings: 'kern', 'liga', 'clig', 'calt';
		font-size: 1rem;
		box-sizing: content-box;
		-webkit-font-smoothing: antialiased;
		user-select: none;
	}

	.interactive text,
	.interactive span {
		fill: #333333;
		stroke: none;
	}

	.interactive line {
		stroke: #404040;
		stroke-width: 1px;
		fill: none;
	}

	.default * {
		stroke: #404040;
		/* stroke-width:1px; */
		fill: none;
	}

	circle.default,
	ellipse.default,
	line.default,
	path.default,
	polygon.default,
	rect.default {
		stroke: #404040;
		stroke-width: 1px;
		fill: none;
	}

	.plot path,
	.plot line,
	.plot rect {
		stroke: #404040;
		stroke-width: 1px;
		fill: none;
	}

	.control .point {
		fill: #0366ee;
		stroke: none;
	}

	.control .handle {
		fill: transparent;
		stroke: #0366ee;
		stroke-width: 2px;
		opacity: 0;
	}

	.control .highlight {
		opacity: 1;
	}

	.checkbox rect {
		fill: #f2f2f2;
		stroke: #333333;
		stroke-width: 1px;
	}

	.slider line {
		stroke: #333333;
		stroke-width: 1px;
	}

	.icon {
		width: 1rem;
		height: 1rem;
	}

	.button text {
		font-weight: 400;
	}

	.button rect {
		fill: #555555;
	}

	.button:hover rect {
		fill: #333333;
	}

	.button text {
		fill: #ffffff;
	}

	.grid line {
		vector-effect: non-scaling-stroke;
	}

	.feature path {
		vector-effect: non-scaling-stroke;
	}

	.node circle {
		stroke: #333333;
	}

	.node ellipse {
		stroke: #333333;
	}

	.dropdown-control-button rect {
		fill: #dad9dc;
		stroke-width: 1;
		stroke: black;
	}

	.dropdown-control-button:hover rect,
	.dropdown-control-button:hover path {
		fill: #c7c1c1;
	}

	.dropdown-control-curr-selection-box rect {
		fill: white;
		stroke-width: 1;
		stroke: black;
	}

	.dropdown-control-curr-selection-box:hover rect,
	.dropdown-control-button:hover text {
		fill: #c7c1c1;
	}

	.dropdown-control-menu-option rect {
		fill: white;
		stroke-width: 1;
		stroke: black;
	}

	.dropdown-control-menu-option:hover rect,
	.dropdown-control-button:hover text {
		fill: #c7c1c1;
	}
`;

const Wrapper = styled(InteractiveWrapper)`
	background-color: #303a52;
	width: 100%;

	.interactive .line {
 		stroke: #fbfafa;
 	}
 	.interactive .circle {
 		fill: none;
 		stroke: #fbfafa;
 		stroke-width: 2px;
 	}
 	.interactive .circle.point {
 		stroke: none;
 	}
 	.interactive .circle.positive {
 		stroke: none;
 		fill: #eb5757;
 	}
 	.interactive .circle.negative {
 		stroke: none;
 		fill: #56ccf2;
 	}
 	.interactive .circle.test-charge {
 		stroke: #fbfafa;
 		stroke-dasharray: 6;
 		stroke-width: 3px;
 	}
 	.interactive .text {
 		fill: #fbfafa;
 		stroke: none;
 	}
 	.interactive .text.positive,
 	.interactive .text.negative {
 		fill: #303a52;
 		font-size: 2.5rem;
 	}
 	.interactive .rectangle {
 		stroke: #fbfafa;
 		stroke-width: 2px;
 		fill: none;
 	}
 	.interactive .path {
 		fill: #fbfafa;
 	}
 	.interactive .arrow {
 		fill: #fbfafa;
 		stroke: none;
 	}
`;

export default SimulationPane;
