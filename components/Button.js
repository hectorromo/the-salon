import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  padding: 14px 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
`;
