import styled from '@emotion/styled';

const Paragraph = styled.p`
	color: var(--text-color);
	font-size: 1rem;
	line-height: 1.5;
    margin-bottom: 8px;

	strong {
		font-weight: bold;
	}

	em {
		font-weight: normal;
		font-style: italic;
	}
`;

export default Paragraph;
