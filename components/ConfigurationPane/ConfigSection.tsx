import SectionTitle from '../ui/SectionTitle';
import Paragraph from '../ui/Paragraph';
import ToggleButton from '../ui/ToggleButton';
import styled from '@emotion/styled';
import { useState } from 'react';

const ConfigSection = () => {
	const [isOnGrid, setIsOnGrid] = useState(true);

	const toggleHandler = () => {
		setIsOnGrid((prevState) => !prevState);
	};

	return (
		<Wrapper>
			<SectionTitle>Simulation Configuration</SectionTitle>
			<ParamWrapper>
				<NewParagraph>Gridline</NewParagraph>
				<ToggleButton onToggle={toggleHandler} isOn={isOnGrid} />
			</ParamWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 1rem 1rem 1rem 2rem;
	background-color: var(--primary-color);
`;

const ParamWrapper = styled.div`
	display: flex;
	margin-top: 1rem;
	justify-content: space-between;
	width: 55%;

	@media only screen and (min-width: 1441px) {
		width: 30%;
	}
`;

const NewParagraph = styled(Paragraph)`
	margin-top: 0.25rem;
	color: var(--white);
`;

export default ConfigSection;
