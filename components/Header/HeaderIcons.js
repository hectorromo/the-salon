import Svg from "components/Svg";

export const FilterIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">
    <g fill="none" fillRule="evenodd" stroke="#B69F58">
      <path d="M16.5 8.251V.001M16.5 18v-6.5M9.5 3.031V.001M9.5 17.887V6.324M3 11.543V0M3 17.887v-3.052M11.292 4.646a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0zM4.542 13.19a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0zM18.292 9.646a1.646 1.646 0 1 1-3.292 0 1.646 1.646 0 0 1 3.292 0z" />
    </g>
  </Svg>
);

export const ChevronLeft = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19">
    <path fill="none" fillRule="evenodd" stroke="#B69F58" d="M10.143 18.385L1 9.143 10.143 0" />
  </Svg>
);

export const HeartIconInverted = () => (
  <Svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.64002 1C8.07602 1 9.513 1.576 10.624 2.738L12.616 4.826C12.6683 4.88107 12.7313 4.92492 12.8011 4.95488C12.8709 4.98485 12.9461 5.0003 13.022 5.0003C13.098 5.0003 13.1731 4.98485 13.2429 4.95488C13.3127 4.92492 13.3757 4.88107 13.428 4.826L15.411 2.756C17.633 0.430001 21.147 0.430001 23.369 2.756C25.592 5.082 25.592 8.834 23.369 11.159C19.918 14.771 16.469 18.389 13.018 22L2.66599 11.15C0.445994 8.822 0.443994 5.064 2.66599 2.738C3.77699 1.576 5.206 1 6.641 1H6.64002Z"
      stroke="white"
    />
  </Svg>
);

export const ChevronLeftInverted = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="27" viewBox="0 0 18 27">
    <defs>
      <path id="b" d="M24.143 51.385L15 42.143 24.143 33" />
      <filter id="a" width="264.1%" height="181.6%" x="-82%" y="-29.9%" filterUnits="objectBoundingBox">
        <feMorphology in="SourceAlpha" operator="dilate" radius=".5" result="shadowSpreadOuter1" />
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feMorphology in="SourceAlpha" radius="1" result="shadowInner" />
        <feOffset dy="2" in="shadowInner" result="shadowInner" />
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(-10 -31)">
      <use fill="#000" filter="url(#a)" xlinkHref="#b" />
      <use stroke="#FFF" xlinkHref="#b" />
    </g>
  </Svg>
);
