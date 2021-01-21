import styled from 'styled-components';

export const Button = styled.button<{}>`
  padding: 14px 24px;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
`;
