import { useEffect } from 'react';
import styled from 'styled-components';

import { Salon } from 'types/Salon';
import usePriceFilter from 'hooks/usePriceFilter';
import useVisible from 'hooks/useVisible';

import { ChevronDownIcon } from 'components/Icons';
import { Paragraph } from 'components/Typography/Paragraph';
import { ButtonUnstyled } from 'components/ButtonUnstyled';
import { RangeSlider } from 'components/RangeSlider';

interface Props {
  salons: Salon[];
  onFilter: (salons: Salon[]) => void;
}

export const PriceFilter: React.FC<Props> = ({ salons, onFilter }) => {
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
        <Paragraph weight="light">
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

const PriceFilterWrapper = styled.div<{ isFiltered: boolean }>`
  position: relative;
  background-color: ${(props) => (props.isFiltered ? 'rgba(182, 159, 88, 0.1)' : 'white')};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

const ToggleFilterButton = styled.button<{ isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: ${(props) => props.theme.gutters.mobileX};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const FilterChevron = styled.span<{ isVisible: boolean }>`
  padding: 2px 7px;
  margin-right: -7px;
  transform: rotate(${(props) => (props.isVisible ? '180deg' : '0')});
  transition: all 0.3s;
`;

const PriceFilterContainer = styled.div<{}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  height: 110px;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  /* bottom: 0; */
  z-index: 10;
  padding: ${(props) => props.theme.gutters.mobileX} ${(props) => props.theme.gutters.mobileXLarge};
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const ResetFilter = styled(ButtonUnstyled)<{}>`
  margin-top: ${(props) => props.theme.gutters.mobileXNormal};
`;
