import styled from "@emotion/styled";

type TextButtonProps = {
  onToggle: () => void;
  isOn: boolean;
};

const StyledDiv = styled.div<Pick<TextButtonProps, "isOn">>`
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  outline: none;
  background-color: #303a52;
  transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);;

  ${(props) => props.isOn && "background-color:#c4c4c4"}
`;

const StyledButton = styled.div<Pick<TextButtonProps, "isOn">>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  outline: none;
  background-color: #ffff;
  transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);;

  ${(props) => props.isOn && "transform:translateX(100%);"}
`;

const ToggleButton: React.FC<TextButtonProps> = ({ onToggle,isOn }) => {

  return (
    <div>
    <StyledDiv onClick={onToggle} isOn={isOn}>
      <StyledButton isOn={isOn} />
    </StyledDiv>
    </div>
  );
};

export default ToggleButton;
