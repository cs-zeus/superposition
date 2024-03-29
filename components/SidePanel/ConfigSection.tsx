import Paragraph from '../ui/Paragraph';
import SectionTitle from '../ui/SectionTitle';
import ToggleButton from '../ui/ToggleButton';
import styled from '@emotion/styled';
import { useState } from 'react';

type ConfigSectionProps = {
	isGridOn: boolean;
	onToggleGrid: (isGridOn: boolean) => void;
};

const ConfigSection: React.FC<ConfigSectionProps> = ({
	isGridOn,
	onToggleGrid,
}) => {
	const [isOnGrid, setIsOnGrid] = useState(isGridOn);

	const toggleHandler = () => {
		setIsOnGrid((prevState) => !prevState);
		onToggleGrid(isOnGrid);
	};

	return (
		<Wrapper>
			<SectionTitle>Configuration</SectionTitle>
			<ParamWrapper>
				<NewParagraph>Grid</NewParagraph>
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
