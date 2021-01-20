import { getTrackBackground, Range } from "react-range";
import styled from "styled-components";

const RangeSlider = ({ minPrice, maxPrice, values, onChange }) => {
  return (
    <Range
      step={10}
      min={minPrice}
      max={maxPrice}
      values={values}
      onChange={onChange}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "#ccc",
          }}>
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: values,
                colors: ["#548BF4", "#ccc"],
                min: minPrice,
                max: maxPrice,
              }),
              alignSelf: "center",
            }}>
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            borderRadius: "99px",
            backgroundColor: "#999",
          }}
        />
      )}
    />
  );
};

export default RangeSlider;

// const RangeHandle = styled.div`
//   /* ${(props) => props.style}; */
//   height: "20px";
//   border-radius: "99px";
//   width: "20px";
//   background-color: "#999";
// `;

// const RangeTrack = styled.div`
//   /* ${(props) => props.style}; */
//   height: "6px";
//   width: "100%";
//   background-color: "orange !important";
// `;
