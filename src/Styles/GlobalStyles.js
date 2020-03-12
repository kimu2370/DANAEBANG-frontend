import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Bold from "Fonts/Spoqa-Han-Sans-Bold.woff";
import Light from "Fonts/Spoqa-Han-Sans-Light.woff";
import Regular from "Fonts/Spoqa-Han-Sans-Regular.woff";
import Thin from "Fonts/Spoqa-Han-Sans-Thin.woff";

const GlobalStyles = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
@font-face{
    font-family:'Spoqa Han Sans';
    src: local('Spoqa Han Sans Bold'),
      url(${Bold}) format('woff');
      font-weight:700;
}
@font-face{
    font-family:'Spoqa Han Sans';
    src: local('Spoqa Han Sans Light'),
      url(${Light}) format('woff');
      font-weight:300
}
@font-face{
    font-family:'Spoqa Han Sans';
    src: local('Spoqa Han Sans Regular'),
      url(${Regular}) format('woff');
      font-weight:400;
}
@font-face{
    font-family:'Spoqa Han Sans';
    src: local('Spoqa Han Sans Thin'),
      url(${Thin}) format('woff');
      font-weight:100;
}
body{
  font-family:'Spoqa Han Sans','Sans-serif';
}
`;

export default GlobalStyles;
