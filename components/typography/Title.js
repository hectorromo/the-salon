import styled from "styled-components";

export const Title = styled.h1`
  line-height: normal;
  font-size: ${(props) =>
    props.size
      ? props.theme.typography[props.size]
      : props.theme.typography.normal};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;
