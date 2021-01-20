import Svg from 'components/Svg';

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
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="15"
    height="15"
    viewBox="0 0 15 15"
  >
    <defs>
      <path id="a" d="M7.5 15H0V0h15v15H7.5z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <path
        fill="#000"
        d="M11.152 10.64h2.774a7.15 7.15 0 0 1-4.965 3.859c.549-.392 1.033-.99 1.422-1.74a9.42 9.42 0 0 0 .769-2.12zm-3.477 0h3.123a8.98 8.98 0 0 1-.725 1.956c-.633 1.217-1.473 1.96-2.398 2.044v-4zm-3.473 0h3.124v4c-.926-.083-1.766-.827-2.399-2.044a8.98 8.98 0 0 1-.725-1.956zm-3.128 0h2.774c.19.788.45 1.506.769 2.12.389.748.874 1.347 1.422 1.739a7.15 7.15 0 0 1-4.965-3.86zm10.438-2.966h3.134a7.13 7.13 0 0 1-.556 2.617h-2.856c.17-.812.267-1.694.278-2.617zm-3.837 0h3.488a13.18 13.18 0 0 1-.29 2.617H7.676V7.674zm-3.838 0h3.489v2.617h-3.2a13.193 13.193 0 0 1-.289-2.617zm-3.483 0h3.134c.011.923.108 1.805.278 2.617H.91a7.13 7.13 0 0 1-.556-2.617zm10.88-2.965h2.856c.341.807.534 1.69.556 2.617h-3.134a13.64 13.64 0 0 0-.278-2.617zm-3.56 0h3.2c.174.806.277 1.691.289 2.617H7.675V4.709zm-3.548 0h3.2v2.617H3.837c.012-.926.115-1.81.29-2.617zm-3.216 0h2.856c-.17.813-.267 1.694-.278 2.617H.354c.022-.927.215-1.81.556-2.617zM8.972.501c2.185.456 4 1.907 4.954 3.86h-2.774a9.412 9.412 0 0 0-.769-2.126C9.997 1.49 9.517.89 8.972.5zm-2.944 0c-.545.39-1.025.99-1.411 1.734a9.412 9.412 0 0 0-.769 2.125H1.074A7.152 7.152 0 0 1 6.028.501zM7.675.36c.925.083 1.765.821 2.398 2.038.293.565.542 1.229.725 1.962H7.675v-4zm-.35 0v4H4.203a9.009 9.009 0 0 1 .725-1.962C5.447 1.52 6.097.472 7.326.36zM7.5 0C3.36 0 0 3.36 0 7.5 0 11.64 3.36 15 7.5 15c4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0z"
        mask="url(#b)"
      />
    </g>
  </Svg>
);
