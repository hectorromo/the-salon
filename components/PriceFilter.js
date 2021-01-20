import * as React from "react";
import styled from "styled-components";

import usePriceFilter from "hooks/usePriceFilter";

import { Paragraph } from "components/typography/Paragraph";
import { ChevronDownIcon } from "components/Icons";
import { ButtonUnstyled } from "components/ButtonUnstyled";
import RangeSlider from "components/RangeSlider";

const PriceFilter = ({ salons }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  // const [values, setValues] = React.useState([0, 100]);
  const { values, setValues, minPrice, maxPrice, isFiltered, filteredSalons } = usePriceFilter(salons);

  console.log("minprice", minPrice, maxPrice);
  React.useEffect(() => {
    if (isFiltered) return;
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice, isFiltered]);

  console.log(values, filteredSalons);

  return (
    <PriceFilterWrapper>
      <Paragraph weight={300}>
        Pris {minPrice} - {maxPrice} kr
      </Paragraph>
      <ButtonUnstyled>
        <ChevronDownIcon />
      </ButtonUnstyled>
      {isOpen && (
        <PriceFilterContainer>
          <div>
            {values[0]} - {values[1]} kr
          </div>
          <RangeSlider min={minPrice} max={maxPrice} values={values} onChange={setValues} />
        </PriceFilterContainer>
      )}
    </PriceFilterWrapper>
  );
};

export default PriceFilter;

const PriceFilterWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.gutters.mobileX};
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  top: 100%;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  left: 0;
  padding: ${props => props.theme.gutters.mobileX} ${props => props.theme.gutters.mobileXLarge};
`;
