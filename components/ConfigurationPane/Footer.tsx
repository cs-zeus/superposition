import styled from '@emotion/styled';
import TextLink from '../ui/TextLink';

type FooterProps = {
	onClickHandle: () => void;
};

const Footer: React.FC<FooterProps> = ({ onClickHandle }) => {
	return (
		<Wrapper>
			<TextLink onClickLink={onClickHandle} hasIcon={true}>
				Explaination
			</TextLink>
			<StyledHr></StyledHr>
			<StyledP>Presented to CSC289 by cs-zeus</StyledP>
			<StyledUl>
				<StyledLi>PITTAWAT TAVEEKITWORACHAI 61130500220</StyledLi>
				<StyledLi>WICHARN RUEANGKHAJORN 61130500245</StyledLi>
				<StyledLi>MICHAL ZIELINSKI 61130500252</StyledLi>
				<StyledLi>NATNARONG TREWITTAYATORN 61130500256</StyledLi>
			</StyledUl>
			<StyledHr></StyledHr>
			<TextLink
				onClickLink={() => {
					window.open('https://github.com/cs-zeus');
				}}
				hasIcon={false}
			>
				Source Code
			</TextLink>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--primary-color);
	width: 100%;
	padding: 1rem 1rem 1rem 2rem;
	color: var(--white);
`;

const StyledHr = styled.hr`
	margin-left: -2rem;
	margin-top: 1rem;
`;

const StyledP = styled.p`
	font-size: 16px;
	margin-top: 2rem;
	margin-bottom: 1rem;
`;

const StyledUl = styled.ul`
	list-style-type: circle;
	margin-left: 2rem;
`;

const StyledLi = styled.li`
	margin-top: 0.5rem;
`;

export default Footer;
