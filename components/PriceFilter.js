import { useEffect } from 'react';
import styled from 'styled-components';

import usePriceFilter from 'hooks/usePriceFilter';
import useVisible from 'hooks/useVisible';

import { Paragraph } from 'components/typography/Paragraph';
import { ChevronDownIcon } from 'components/Icons';
import { ButtonUnstyled } from 'components/ButtonUnstyled';
import RangeSlider from 'components/RangeSlider';

const PriceFilter = ({ salons, onFilter }) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const { values, setValues, minPrice, maxPrice, isFiltered, filteredSalons } = usePriceFilter(
    salons,
  );

  useEffect(() => {
    if (!filteredSalons.length && !isFiltered) return;

    const returnedSalons = isFiltered ? filteredSalons : salons;
    onFilter(returnedSalons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFiltered, filteredSalons]);

  const resetFilter = () => {
    setValues([minPrice, maxPrice]);
  };

  return (
    <PriceFilterWrapper isFiltered={isFiltered} ref={ref}>
      <ToggleFilterButton isVisible={isVisible} onClick={() => setIsVisible((val) => !val)}>
        <Paragraph weight={300}>
          Pris {values[0]} - {values[1]} kr
        </Paragraph>

        <FilterChevron isVisible={isVisible}>
          <ChevronDownIcon />
        </FilterChevron>
      </ToggleFilterButton>
      {isVisible && (
        <PriceFilterContainer>
          <RangeSlider min={minPrice} max={maxPrice} values={values} onChange={setValues} />
          <ResetFilter onClick={resetFilter}>Rensa filter</ResetFilter>
        </PriceFilterContainer>
      )}
    </PriceFilterWrapper>
  );
};

export default PriceFilter;

const PriceFilterWrapper = styled.div`
  background-color: ${(props) => (props.isFiltered ? 'rgba(182, 159, 88, 0.1)' : 'white')};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  position: relative;
`;

const ToggleFilterButton = styled.button`
  width: 100%;
  position: relative;
  background-color: transparent;
  padding: ${(props) => props.theme.gutters.mobileX};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
`;

const FilterChevron = styled.span`
  transform: rotate(${(props) => (props.isVisible ? '180deg' : '0')});
  padding: 2px 7px;
  margin-right: -7px;
  transition: all 0.3s;
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
