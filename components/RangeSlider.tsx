import { getTrackBackground, Range } from 'react-range';
import styled from 'styled-components';

import { Paragraph } from 'components/Typography/Paragraph';

interface Props {
  min: number;
  max: number;
  values: number[];
  onChange: (values: number[]) => void;
}

export const RangeSlider: React.FC<Props> = ({ min, max, values, onChange }) => {
  return (
    <RangeWrapper>
      <Range
        step={10}
        min={min}
        max={max}
        values={values}
        onChange={onChange}
        renderTrack={({ props, children }) => (
          <RangeTrack
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{ ...props.style }}
          >
            <RangeActiveTrack
              ref={props.ref}
              css={`
                background: getTrackBackground(
                  {values: values,
                  colors: [ '#ccc',
                  '#666',
                  '#ccc' ],
                  min: min,
                  max: max,
                  }
                );
              `}
            >
              {children}
            </RangeActiveTrack>
          </RangeTrack>
        )}
        renderThumb={({ index, props }) => (
          <RangeHandle {...props} style={{ ...props.style }}>
            <RangeHandlePrice weight="normal">{values[index]} kr</RangeHandlePrice>
          </RangeHandle>
        )}
      />
    </RangeWrapper>
  );
};

const RangeWrapper = styled.div<{}>`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const RangeHandle = styled.div<{}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 99px;
  box-shadow: 0px 2px 6px #aaa;
  background-color: rgba(182, 159, 88, 1);
`;

const RangeHandlePrice = styled(Paragraph)<{}>`
  position: absolute;
  top: -28px;
  left: 0;
  width: 50px;
  padding: 4px;
  margin-left: -12px;
  border-radius: 4px;
  font-size: ${(props) => props.theme.typography.small};
  color: rgba(182, 159, 88, 1);
  text-align: center;
  background-color: rgba(182, 159, 88, 0.1);
`;

const RangeTrack = styled.div<{}>`
  display: flex;
  height: 4px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grayDark};
`;

const RangeActiveTrack = styled.div<{}>`
  align-self: center;
  height: 4px;
  width: 100%;
`;
