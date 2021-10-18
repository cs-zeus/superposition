import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
	return <Global styles={styles} />;
};

const styles = css`
	:root {
		--primary-color: #574b90;
		--secondary-color: #9e579d;
		--accent-color: #fc85ae;
		--white: #fbfafa;
		--off-white: #c4c4c4;
		--red: #eb5757;
		--blue: #56ccf2;
		--background: #303a52;
		--text-color: #000000;
	}

	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		font-family: 'Roboto', sans-serif;
	}
`;

export default GlobalStyles;
