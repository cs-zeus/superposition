import { Global, css } from '@emotion/react';

const KatexCustomStyles = () => {
	return <Global styles={styles} />;
};

const styles = css`
	.katex {
		color: var(--white);
		font-size: 14px;
		text-align: left !important;
	}
`;

export default KatexCustomStyles;
