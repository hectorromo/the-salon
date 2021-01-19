import styled from "styled-components";

export const ParagraphNormal = styled.p`
  font-size: ${(props) => props.theme.typography.normal};
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const ParagraphSmall = styled.p`
  font-size: ${(props) => props.theme.typography.small};
  font-family: ${(props) => props.theme.fonts.secondary};
`;
export const ParagraphXSmall = styled.p`
  font-size: ${(props) => props.theme.typography.xSmall};
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const ParagraphMedium = styled.p`
  font-size: ${(props) => props.theme.typography.medium};
  font-family: ${(props) => props.theme.fonts.secondary};
`;
export const ParagraphLarge = styled.p`
  font-size: ${(props) => props.theme.typography.large};
  font-family: ${(props) => props.theme.fonts.secondary};
`;
