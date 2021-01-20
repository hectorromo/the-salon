import styled from 'styled-components';

export const Paragraph = styled.p`
  line-height: normal;
  font-size: ${(props) =>
    props.size ? props.theme.typography[props.size] : props.theme.typography.normal};
  font-family: ${(props) => props.theme.fonts.base};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => props.theme.colors[props.color || 'text']};
`;

// export const ParagraphLight = styled(Paragraph)`
//   color: ${(props) => props.theme.colors.grayDark};
// `;

// export const ParagraphNormal = styled.p`
//   font-size: ${(props) => props.theme.typography.normal};
//   font-family: ${(props) => props.theme.fonts.base};
//   font-weight: ${(props) => (props.weight ? props.theme.fonts.base : 400)};
// `;

// export const ParagraphSmall = styled.p`
//   font-size: ${(props) => props.theme.typography.small};
//   font-family: ${(props) => props.theme.fonts.base};
//   font-weight: ${(props) => (props.weight ? props.theme.fonts.base : 400)};
// `;
// export const ParagraphXSmall = styled.p`
//   font-size: ${(props) => props.theme.typography.xSmall};
//   font-family: ${(props) => props.theme.fonts.base};
//   font-weight: ${(props) => (props.weight ? props.theme.fonts.base : 400)};
// `;

// export const ParagraphMedium = styled.p`
//   font-size: ${(props) => props.theme.typography.medium};
//   font-family: ${(props) => props.theme.fonts.base};
//   font-weight: ${(props) => (props.weight ? props.theme.fonts.base : 400)};
// `;
// export const ParagraphLarge = styled.p`
//   font-size: ${(props) => props.theme.typography.large};
//   font-family: ${(props) => props.theme.fonts.base};
//   font-weight: ${(props) => (props.weight ? props.theme.fonts.base : 400)};
// `;
