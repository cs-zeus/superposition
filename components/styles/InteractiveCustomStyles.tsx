import { Global, css } from '@emotion/react';

const InteractiveCustomStyles = () => {
	return <Global styles={styles} />;
};

const styles = css`
	.interactive {
		font-family: 'Roboto', sans-serif;
	}
	
	.interactive .control .point {
		fill: none;
	}
	.interactive circle.handle {
		stroke: var(--white);
	}
	.interactive line {
		stroke: var(--white);
	}
	.interactive circle {
		fill: none;
		stroke: var(--white);
		stroke-width: 2px;
	}
	.interactive circle.point {
		stroke: none;
	}
	.interactive circle.positive {
		stroke: none;
		fill: var(--red);
	}
	.interactive circle.negative {
		stroke: none;
		fill: var(--blue);
	}
	.interactive circle.test-charge {
		stroke: var(--white);
		stroke-dasharray: 6;
		stroke-width: 3px;
	}
	.interactive text {
		fill: var(--white);
		stroke: none;
	}
	.interactive text.subscript {
		font-size: 0.5em;
	}
	.interactive text.positive,
	.interactive text.negative {
		fill: var(----background);
		font-size: 2.5rem;
	}
	.interactive text.charge-name {
		font-weight: bold;
	}
	.interactive rect {
		stroke: var(--white);
		stroke-width: 2px;
		fill: none;
	}
	.interactive path {
		fill: var(--white);
	}
	.interactive .arrow {
		fill: var(--white);
		stroke: none;
	}
`;

export default InteractiveCustomStyles;
