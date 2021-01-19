import styled from "styled-components";

const StyledH1 = styled.h1`
  flex-grow: 2;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 100;
  font-size: ${(props) => props.theme.typography.large};
  margin: 0;
`;

const HeaderTitle = ({ children }) => <StyledH1>{children}</StyledH1>;

export default HeaderTitle;
