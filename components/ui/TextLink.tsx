import { GitHub, HelpCircle } from 'react-feather';

import styled from '@emotion/styled';

type TextLinkProps = {
	onClickLink: () => void;
	iconName: 'help' | 'github' | 'none';
};

const TextLink: React.FC<TextLinkProps> = ({
	onClickLink,
	iconName = 'none',
	children,
}) => {
	const StyledSpan = styled.span`
		${iconName !== 'none' && 'margin-left: 8px;'}
		text-decoration: underline;
	`;

	const StyledP = styled.p`
		display: flex;
		align-items: center;
		font-size: 1.125rem;
		color: var(--white);

		&:hover {
			cursor: pointer;
		}

		&:hover ${StyledSpan} {
			text-decoration: none;
		}
	`;

	let icon;
	switch (iconName) {
		case 'help':
			icon = <HelpCircle size={16} />;
			break;
		case 'github':
			icon = <GitHub size={16} />;
			break;
		default:
			icon = null;
	}

	return (
		<StyledP onClick={onClickLink}>
			{icon}
			<StyledSpan>{children}</StyledSpan>
		</StyledP>
	);
};

export default TextLink;
