import styled from 'styled-components';

interface Props {
  overlay?: boolean;
}

export const Header = styled.header<Props>`
  position: ${(props) => (props.overlay ? 'absolute' : 'relative')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 ${(props) => props.theme.gutters.mobileX};
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  border-bottom-width: ${(props) => (props.overlay ? 0 : '1px')};
  z-index: 1;
`;
