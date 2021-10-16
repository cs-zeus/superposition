import styled from "@emotion/styled";
import { HelpCircle } from "react-feather";

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
    ${hasIcon && "margin-left: 0.5rem;"}
    text-decoration: underline;
  `;

  const StyledP = styled.p`
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-size: 1.5rem;
    color: #fbfafa;

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
