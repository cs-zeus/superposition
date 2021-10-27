import styled from '@emotion/styled';

type TextButtonProps = {
	onToggle: () => void;
	isOn: boolean;
};

const StyledDiv = styled.div<Pick<TextButtonProps, 'isOn'>>`
	width: 48px;
	height: 24px;
	border-radius: 16px;
	outline: none;
	background-color: var(--off-white);
	transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);

	${(props) => props.isOn ? 'background-color:var(--accent-color)' : ''}
`;

const StyledButton = styled.div<Pick<TextButtonProps, 'isOn'>>`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	outline: none;
	background-color: var(--white);
	transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
	transform:translateX(0%);

	${(props) => props.isOn ? 'transform: translateX(100%);' : ''}
`;

const ToggleButton: React.FC<TextButtonProps> = ({ onToggle, isOn }) => {
	return (
		<div>
			<StyledDiv onClick={onToggle} isOn={isOn}>
				<StyledButton isOn={isOn} />
			</StyledDiv>
		</div>
	);
};

export default ToggleButton;
