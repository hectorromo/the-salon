import styled from "styled-components";

import { ButtonUnstyled } from "./ButtonUnstyled";

import ChevronDown from "../assets/icons/chevron-down.svg";
import { Paragraph } from "./typography/Paragraph";

const StyledDiv = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.gutters.mobileX};
  display: flex;
  justify-content: space-between;
`;

const PriceFilter = () => {
  return (
    <StyledDiv>
      <Paragraph weight={300}>Pris 250 - 500 kr</Paragraph>
      <ButtonUnstyled>
        <ChevronDown />
      </ButtonUnstyled>
    </StyledDiv>
  );
};

export default PriceFilter;
