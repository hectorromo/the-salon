import styled from 'styled-components';

export const HeaderTitle = styled.h1<{}>`
  position: absolute;
  margin: 0;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: 100;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.typography.large};
`;
