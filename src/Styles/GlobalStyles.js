import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
@font-face{
    font-family:'Spoqa Han Sans Bold';
    src: local('Spoqa Han Sans Bold'),
      url(${Bold}) format('woff');
      font-weight:500;
      font-style:Bold;
}
`;
export default GlobalStyles;
