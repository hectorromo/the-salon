import styled from "styled-components";

import { ButtonUnstyled } from "./ButtonUnstyled";

import ChevronDown from "../assets/icons/chevron-down.svg";

const StyledDiv = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.gutters.mobileX};
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.secondary};
`;

const PriceFilter = () => {
  return (
    <StyledDiv>
      Pris 250 - 500 kr
      <ButtonUnstyled>
        <ChevronDown />
      </ButtonUnstyled>
    </StyledDiv>
  );
};

export default PriceFilter;
