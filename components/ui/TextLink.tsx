import styled from "styled-components";

type TextLinkProps = {
  onClickLink: () => void;
};

const TextLink: React.FC<TextLinkProps> = ({ onClickLink, children }) => {
  const StyledP = styled.p`
  background-color:black;
    font-family: Roboto;
    color: #fbfafa;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
      text-decoration:none;
    }
  `;

  return <StyledP onClick={onClickLink}>{children}</StyledP>;
};

export default TextLink;
