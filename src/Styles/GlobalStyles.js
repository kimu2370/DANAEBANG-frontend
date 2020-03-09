import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Bold from "Fonts/Spoqa-Han-Sans-Bold.woff";
import Light from "Fonts/Spoqa-Han-Sans-Light.woff";
import Regular from "Fonts/Spoqa-Han-Sans-Regular.woff";
import Thin from "Fonts/Spoqa-Han-Sans-Thin.woff";

const GlobalStyles = createGlobalStyle`
${reset};
@font-face{
    font-family:'Spoqa Han Sans Bold';
    src: local('Spoqa Han Sans Bold'),
      url(${Bold}) format('woff');
      font-size:100px
},
@font-face{
    font-family:'Spoqa Han Sans Light';
    src: local('Spoqa Han Sans Light'),
      url(${Light}) format('woff');
},
@font-face{
    font-family:'Spoqa Han Sans Regular';
    src: local('Spoqa Han Sans Regular'),
      url(${Regular}) format('woff');
},
@font-face{
    font-family:'Spoqa Han Sans Thin';
    src: local('Spoqa Han Sans Thin'),
      url(${Thin}) format('woff');
},
`;

export default GlobalStyles;
