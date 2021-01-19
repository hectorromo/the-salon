import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face{
  font-family: MillerBanner;
  src: url("/fonts/MillerBanner-Light.woff2") format("woff2"),
       url("/fonts/MillerBanner-Light.ttf") format("truetype");
  font-style: normal;
  font-weight: light;
}

* {box-sizing: border-box};

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  font-family: "HelveticaNeue", sans-serif;
  font-size: 15px;
  // margin: 0;
  // padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
