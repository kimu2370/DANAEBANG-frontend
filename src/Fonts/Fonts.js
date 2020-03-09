import { createGlobalStyle } from "styled-components";
import Bold from "Fonts/Spoqa-Han-Sans-Bold.woff";
import SpoqaHanSansLight from "Fonts/Spoqa-Han-Sans-Light.woff";
// import Spoqa-Han-Sans-Regular from "Fonts/Spoqa-Han-Sans-Regular.woff"
// import Spoqa-Han-Sans-Thin from "Fonts/Spoqa-Han-Sans-Thin.woff"
export default createGlobalStyle`
  @font-face{
    font-family:'Spoqa Han Sans Bold';
    src: local('Spoqa Han Sans Bold'),
      url(${Bold}) format('woff');
      font-weight:500;
      font-style:Bold;
}
`;
