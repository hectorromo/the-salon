import styled from "styled-components";

const HeaderTitle = styled.h1`
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  text-align: center;
  font-weight: 100;
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.typography.large};
`;

export default HeaderTitle;
