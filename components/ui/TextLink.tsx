import { HelpCircle } from 'react-feather';
import styled from '@emotion/styled';

type TextLinkProps = {
	onClickLink: () => void;
	hasIcon: boolean;
};

const TextLink: React.FC<TextLinkProps> = ({
	onClickLink,
	hasIcon,
	children,
}) => {
	const StyledSpan = styled.span`
		${hasIcon && 'margin-left: 8px;'}
		text-decoration: underline;
	`;

	const StyledP = styled.p`
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		color: var(--white);

		&:hover {
			cursor: pointer;
		}

		&:hover ${StyledSpan} {
			text-decoration: none;
		}
	`;

	const icon = hasIcon ? <HelpCircle size={28} /> : null;

	return (
		<StyledP onClick={onClickLink}>
			{icon}
			<StyledSpan>{children}</StyledSpan>
		</StyledP>
	);
};

export default TextLink;
