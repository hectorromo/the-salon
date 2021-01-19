import Svg from "components/Svg";

export const FilterIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
  >
    <g fill="none" fill-rule="evenodd" stroke="#B69F58">
      <path d="M16.5 8.251V.001M16.5 18v-6.5M9.5 3.031V.001M9.5 17.887V6.324M3 11.543V0M3 17.887v-3.052M11.292 4.646a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0zM4.542 13.19a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0zM18.292 9.646a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0z" />
    </g>
  </Svg>
);

export const ChevronLeft = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="19"
    viewBox="0 0 11 19"
  >
    <path
      fill="none"
      fill-rule="evenodd"
      stroke="#B69F58"
      d="M10.143 18.385L1 9.143 10.143 0"
    />
  </Svg>
);

export const ChevronLeftInverted = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="18"
    height="27"
    viewBox="0 0 18 27"
  >
    <defs>
      <path id="b" d="M24.143 51.385L15 42.143 24.143 33" />
      <filter
        id="a"
        width="264.1%"
        height="181.6%"
        x="-82%"
        y="-29.9%"
        filterUnits="objectBoundingBox"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius=".5"
          result="shadowSpreadOuter1"
        />
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feMorphology in="SourceAlpha" radius="1" result="shadowInner" />
        <feOffset dy="2" in="shadowInner" result="shadowInner" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="2"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
      </filter>
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(-10 -31)">
      <use fill="#000" filter="url(#a)" xlinkHref="#b" />
      <use stroke="#FFF" xlinkHref="#b" />
    </g>
  </Svg>
);

export const HeartIconInverted = () => (
  <Svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="34"
  height="30"
  viewBox="0 0 34 30"
>
    <defs>
        <path
      id="b"
      d="M341.64 31c1.436 0 2.873.576 3.984 1.738l1.992 2.088a.56.56 0 0 0 .812 0l1.983-2.07c2.222-2.326 5.736-2.326 7.958 0 2.223 2.326 2.223 6.078 0 8.403-3.451 3.612-6.9 7.23-10.351 10.841l-10.352-10.85c-2.22-2.328-2.222-6.086 0-8.412 1.111-1.162 2.54-1.738 3.975-1.738z"
    />
        <filter
      id="a"
      width="162.4%"
      height="171.4%"
      x="-31.2%"
      y="-26.2%"
      filterUnits="objectBoundingBox"
    >
            <feMorphology
        in="SourceAlpha"
        operator="dilate"
        radius=".5"
        result="shadowSpreadOuter1"
      />
            <feOffset
        dy="2"
        in="shadowSpreadOuter1"
        result="shadowOffsetOuter1"
      />
            <feMorphology in="SourceAlpha" radius="1" result="shadowInner" />
            <feOffset dy="2" in="shadowInner" result="shadowInner" />
            <feComposite
        in="shadowOffsetOuter1"
        in2="shadowInner"
        operator="out"
        result="shadowOffsetOuter1"
      />
            <feGaussianBlur
        in="shadowOffsetOuter1"
        result="shadowBlurOuter1"
        stdDeviation="2"
      />
            <feColorMatrix
        in="shadowBlurOuter1"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
      />
        </filter>
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(-331 -28)">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <use stroke="#FFF" xlinkHref="#b" />
    </g>
</Svg>

);
