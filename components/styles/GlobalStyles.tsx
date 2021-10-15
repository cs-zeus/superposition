import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
	return <Global styles={styles} />;
};

const styles = css`
	:root {
		--white: #fbfafa;
		--red: #eb5757;
		--blue: #56ccf2;
		--background: #303a52;
	}
`;

export default GlobalStyles;
