import styled from "styled-components";
import { Range } from "react-range";

import { ButtonUnstyled } from "./ButtonUnstyled";

import ChevronDown from "../assets/icons/chevron-down.svg";
import { Paragraph } from "./typography/Paragraph";
import usePriceFilter from "hooks/usePriceFilter";

const PriceFilter = ({ salons }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  // const [values, setValues] = React.useState([0, 100]);
  const {
    values,
    setValues,
    minPrice,
    maxPrice,
    isFiltered,
    filteredSalons,
  } = usePriceFilter(salons);

  console.log("minprice", minPrice, maxPrice);
  React.useEffect(() => {
    if (isFiltered) return;
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice, isFiltered]);

  console.log(values, filteredSalons);

  return (
    <PriceFilterWrapper>
      <Paragraph weight={300}>Pris 250 - 500 kr</Paragraph>
      <ButtonUnstyled>
        <ChevronDown />
      </ButtonUnstyled>
      {isOpen && (
        <PriceFilterContainer>
          <div>
            {values[0]} - {values[1]} kr
          </div>
          <Range
            step={10}
            min={minPrice}
            max={maxPrice}
            values={values}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#ccc",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  backgroundColor: "#999",
                }}
              />
            )}
          />
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

const PriceFilterContainer = styled.div`
  height: 200px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  top: 100%;
  background: orange;
  width: 100%;
  left: 0;
  padding: ${(props) => props.theme.gutters.mobileX};
`;
