import TextLink from '../ui/TextLink';
import styled from '@emotion/styled';

type FooterProps = {
	onClickExplanationLink: () => void;
};

const Footer: React.FC<FooterProps> = ({ onClickExplanationLink }) => {
	return (
		<Wrapper>
			<TextLink onClickLink={onClickExplanationLink} iconName={'help'}>
				Explanation
			</TextLink>
			<Divisor />
			<Heading>As a part of CSC289 (1/2021)</Heading>
			<UnorderedList>
				<ListItem>61130500220 Pittawat Taveekitworachai</ListItem>
				<ListItem>61130500245 Wicharn Rueangkhajorn</ListItem>
				<ListItem>61130500252 Michal Zielinski</ListItem>
				<ListItem>61130500256 Natnarong Trewittayatorn</ListItem>
			</UnorderedList>
			<Divisor />
			<Heading>Source Code</Heading>
			<Paragraph>
				<TextLink
					onClickLink={() => {
						window.open('https://github.com/cs-zeus');
					}}
					iconName={'github'}
				>
					GitHub
				</TextLink>
			</Paragraph>
			<Divisor />
			<Paragraph>Made with ❤️ and ☕️ by Zeus ⚡️</Paragraph>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--primary-color);
	width: 100%;
	padding: 0 16px 16px 32px;
	color: var(--white);
`;

const Divisor = styled.hr`
	margin-left: -32px;
	margin-top: 16px;
`;

const Heading = styled.h3`
	font-size: 1.125rem;
	line-height: 1.5;
`;

const Paragraph = styled.p`
	font-size: 1rem;
	line-height: 1.5;
`;

const UnorderedList = styled.ul`
	list-style-type: circle;
	margin-left: 32px;
`;

const ListItem = styled.li`
	margin-top: 8px;
	text-transform: capitalize;

	&:first-child {
		margin-top: 16px;
	}
`;

export default Footer;
