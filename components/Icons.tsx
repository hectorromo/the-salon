import { Svg } from 'components/Svg';

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
        <feMorphology in="SourceAlpha" operator="dilate" radius=".5" result="shadowSpreadOuter1" />
        <feOffset dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feMorphology in="SourceAlpha" radius="1" result="shadowInner" />
        <feOffset dy="2" in="shadowInner" result="shadowInner" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        />
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

export const ChevronDownIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
    <path fill="none" fillRule="evenodd" stroke="#B69F58" d="M11.295 1.062L6.062 6.295.384.616" />
  </Svg>
);

export const ChevronRightIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11">
    <path fill="none" fillRule="evenodd" stroke="#B69F58" d="M1.446 0l5.233 5.233L1 10.912" />
  </Svg>
);

export const ChevronLeftIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="11" height="19" viewBox="0 0 11 19">
    <path fill="none" fillRule="evenodd" stroke="#B69F58" d="M10.143 18.385L1 9.143 10.143 0" />
  </Svg>
);

export const StarEmptyIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9">
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#B69F58"
      strokeWidth=".5"
      d="M4.605 6.545L2.04 7.894l.49-2.856L.455 3.015 3.322 2.6 4.605 0l1.282 2.599 2.868.416L6.68 5.038l.49 2.856z"
    />
  </Svg>
);

export const StarFilledIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9">
    <path
      fill="#B69F58"
      fillRule="evenodd"
      stroke="#B69F58"
      strokeWidth=".5"
      d="M4.241 6.545L1.676 7.894l.49-2.856L.09 3.015 2.959 2.6 4.24 0l1.282 2.599 2.868.416-2.075 2.023.49 2.856z"
    />
  </Svg>
);

export const PhoneIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#202020"
      strokeWidth=".5"
      d="M8.599 9.465c-.16.013-.307-.067-.454-.147a9.357 9.357 0 0 1-3.297-3.244c-.147-.227-.28-.494-.227-.76.094-.508.734-.708.921-1.189.174-.414-.053-.88-.32-1.241A5.718 5.718 0 0 0 3.58 1.375c-.307-.186-.64-.347-1.001-.373C.964.922.87 3.618 1.084 4.672c.227 1.095.774 2.11 1.415 3.03 1.508 2.19 3.577 4.045 6.087 4.926.88.307 1.828.494 2.736.28.454-.106.881-.307 1.201-.654.32-.334.494-.814.414-1.268-.08-.467-.4-.84-.72-1.174a9.526 9.526 0 0 0-1.549-1.282c-.107-.067-.214-.133-.334-.147-.133-.013-.253.054-.374.12-.333.187-.64.414-.907.668-.12.12-.254.24-.414.267-.013.013-.027.027-.04.027"
    />
  </Svg>
);

export const PinIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15">
    <g fill="none" fillRule="evenodd" stroke="#202020" strokeWidth=".5">
      <path d="M4.767 2.869c-1.025 0-1.856.817-1.856 1.825 0 1.007.831 1.824 1.856 1.824 1.024 0 1.855-.817 1.855-1.824 0-1.008-.83-1.825-1.855-1.825z" />
      <path d="M9.158 4.693c0-2.385-1.966-4.318-4.39-4.318C2.341.375.374 2.308.374 4.693s4.392 9.67 4.392 9.67 4.391-7.285 4.391-9.67z" />
    </g>
  </Svg>
);

export const ClockIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <defs>
      <path
        id="a"
        d="M.268 7.232a6.435 6.435 0 0 0 6.428 6.429 6.435 6.435 0 0 0 6.429-6.429A6.434 6.434 0 0 0 6.696.804 6.434 6.434 0 0 0 .268 7.232z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 -.464)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          stroke="#202020"
          strokeWidth=".5"
          d="M-15.804 304.018h401.786v-714.643H-15.804z"
          mask="url(#b)"
        />
      </g>
      <g stroke="#202020" strokeWidth=".5">
        <path d="M6.696.34A6.434 6.434 0 0 0 .268 6.767a6.435 6.435 0 0 0 6.428 6.428 6.435 6.435 0 0 0 6.429-6.428A6.434 6.434 0 0 0 6.696.339" />
        <path strokeLinecap="round" d="M6.696 6.768V2.679M9.273 9.344L6.696 6.768" />
      </g>
    </g>
  </Svg>
);

export const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="15"
      height="15"
    >
      <path d="M7.5 15H0V0H15V15H7.5Z" fill="white" />
    </mask>
    <g mask="url(#mask0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.152 10.64H13.926C13.4473 11.6191 12.751 12.4758 11.8905 13.1446C11.03 13.8135 10.028 14.2767 8.961 14.499C9.51 14.107 9.994 13.509 10.383 12.759C10.7233 12.0857 10.9815 11.3739 11.152 10.639V10.64ZM7.675 10.64H10.798C10.6331 11.318 10.3898 11.9744 10.073 12.596C9.44 13.813 8.6 14.556 7.675 14.64V10.64ZM4.202 10.64H7.326V14.64C6.4 14.557 5.56 13.813 4.927 12.596C4.61017 11.9744 4.36686 11.318 4.202 10.64ZM1.074 10.64H3.848C4.038 11.428 4.298 12.146 4.617 12.76C5.006 13.508 5.491 14.107 6.039 14.499C4.97194 14.2766 3.96985 13.8132 3.10932 13.1442C2.2488 12.4752 1.55262 11.6183 1.074 10.639V10.64ZM11.512 7.674H14.646C14.6275 8.5736 14.4388 9.46156 14.09 10.291H11.234C11.404 9.479 11.501 8.597 11.512 7.674ZM7.675 7.674H11.163C11.1539 8.55383 11.0568 9.43053 10.873 10.291H7.676V7.674H7.675ZM3.837 7.674H7.326V10.291H4.126C3.94264 9.43049 3.84583 8.55379 3.837 7.674V7.674ZM0.354 7.674H3.488C3.499 8.597 3.596 9.479 3.766 10.291H0.91C0.561197 9.46156 0.372543 8.5736 0.354 7.674V7.674ZM11.234 4.709H14.09C14.431 5.516 14.624 6.399 14.646 7.326H11.512C11.5039 6.44675 11.4108 5.57033 11.234 4.709V4.709ZM7.674 4.709H10.874C11.048 5.515 11.151 6.4 11.163 7.326H7.675V4.709H7.674ZM4.126 4.709H7.326V7.326H3.837C3.849 6.4 3.952 5.516 4.127 4.709H4.126ZM0.91 4.709H3.766C3.596 5.522 3.499 6.403 3.488 7.326H0.354C0.376 6.399 0.569 5.516 0.91 4.709V4.709ZM8.972 0.501C11.157 0.957 12.972 2.408 13.926 4.361H11.152C10.982 3.62401 10.7238 2.91019 10.383 2.235C9.997 1.49 9.517 0.89 8.972 0.5V0.501ZM6.028 0.501C5.483 0.891 5.003 1.491 4.617 2.235C4.27625 2.90988 4.01806 3.62335 3.848 4.36H1.074C1.55175 3.38226 2.24632 2.52644 3.10481 1.85771C3.9633 1.18897 4.96308 0.724957 6.028 0.501V0.501ZM7.675 0.36C8.6 0.443 9.44 1.181 10.073 2.398C10.366 2.963 10.615 3.627 10.798 4.36H7.675V0.36V0.36ZM7.325 0.36V4.36H4.203C4.36767 3.68007 4.61097 3.02163 4.928 2.398C5.447 1.52 6.097 0.472 7.326 0.36H7.325ZM7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0Z"
        fill="black"
      />
    </g>
  </svg>
);
