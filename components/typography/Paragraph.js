import styled from 'styled-components';

export const Paragraph = styled.p`
  line-height: normal;
  font-size: ${(props) =>
    props.size ? props.theme.typography[props.size] : props.theme.typography.normal};
  font-family: ${(props) => props.theme.fonts.base};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => props.theme.colors[props.color || 'text']};
`;
