import { Global, css } from '@emotion/react';

const InteractiveCustomStyles = () => {
	return <Global styles={styles} />;
};

const styles = css`
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

export default InteractiveCustomStyles;
