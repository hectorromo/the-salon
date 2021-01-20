import { useEffect, useState } from 'react';
import styled from 'styled-components';

import usePriceFilter from 'hooks/usePriceFilter';

import { Paragraph } from 'components/typography/Paragraph';
import { ChevronDownIcon } from 'components/Icons';
import { ButtonUnstyled } from 'components/ButtonUnstyled';
import RangeSlider from 'components/RangeSlider';

const PriceFilter = ({ salons, onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { values, setValues, minPrice, maxPrice, isFiltered, filteredSalons } = usePriceFilter(
    salons,
  );

  useEffect(() => {
    const returnedSalons = isFiltered ? filteredSalons : salons;
    onFilter(returnedSalons);
  }, [isFiltered, filteredSalons, salons, onFilter]);

  return (
    <PriceFilterWrapper>
      <Paragraph weight={300}>
        Pris {values[0]} - {values[1]} kr
      </Paragraph>
      <ToggleFilterButton isOpen={isOpen} onClick={() => setIsOpen((val) => !val)}>
        <ChevronDownIcon />
      </ToggleFilterButton>
      {isOpen && (
        <PriceFilterContainer>
          <RangeSlider min={minPrice} max={maxPrice} values={values} onChange={setValues} />
          <ResetFilter onClick={() => setValues([minPrice, maxPrice])}>
            Återställ filter
          </ResetFilter>
        </PriceFilterContainer>
      )}
    </PriceFilterWrapper>
  );
};

export default PriceFilter;

const PriceFilterWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.gutters.mobileX};
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ToggleFilterButton = styled(ButtonUnstyled)`
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0')});
`;

const PriceFilterContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 110px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  top: 100%;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  left: 0;
  padding: ${(props) => props.theme.gutters.mobileX} ${(props) => props.theme.gutters.mobileXLarge};
`;

const ResetFilter = styled(ButtonUnstyled)`
  margin-top: ${(props) => props.theme.gutters.mobileXLarge};
`;
