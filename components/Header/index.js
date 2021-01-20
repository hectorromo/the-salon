import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  border-bottom-width: ${props => (props.overlay ? 0 : "1px")};
  height: 60px;
  padding: 0 ${props => props.theme.gutters.mobileX};
  position: ${props => (props.overlay ? "absolute" : "relative")};
  z-index: 1;
`;

export default Header;
