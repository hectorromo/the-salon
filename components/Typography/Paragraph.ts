import styled from 'styled-components';

import { ThemeColors, ThemeFontWeight, ThemeTypography } from 'styles/theme';

interface Props {
  color?: keyof typeof ThemeColors;
  weight?: keyof typeof ThemeFontWeight;
  size?: keyof typeof ThemeTypography;
}

export const Paragraph = styled.p<Props>`
  color: ${(props) => props.theme.colors[props.color || 'text']};
  font-size: ${(props) =>
    props.size ? props.theme.typography[props.size] : props.theme.typography.normal};
  font-family: ${(props) => props.theme.fonts.base};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  line-height: normal;
`;
