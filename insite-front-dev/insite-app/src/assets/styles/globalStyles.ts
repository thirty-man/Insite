import { createGlobalStyle } from "styled-components";

// ----------------------------------------------------------------------------------------------------

/* Global Style */
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    src: url("src/assets/fonts/Pretendard-Thin.woff") format("font-woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    src: url("src/assets/fonts/Pretendard-ExtraLight.woff") format("font-woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    src: url("src/assets/fonts/Pretendard-Light.woff") format("font-woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-style: normal;
    src: url("src/assets/fonts/Pretendard-Regular.woff") format("font-woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url("src/assets/fonts/Pretendard-Medium.woff") format("font-woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url("src/assets/fonts/Pretendard-SemiBold.woff") format("font-woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-style: bold;
    src: url("src/assets/fonts/Pretendard-Bold.woff") format("font-woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    src: url("src/assets/fonts/Pretendard-ExtraBold.woff") format("font-woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    src: url("src/assets/fonts/Pretendard-Black.woff") format("font-woff");
  }

  @font-face {
    font-family: "Cafe24 Ssurround Air";
    src: url("src/assets/fonts/Cafe24-Ssurround-Air.woff") format("font-woff");
  }
  * {
    font-family: "Pretendard", sans-serif;
  }

  ::-webkit-scrollbar-track {
    margin-top: 10px;
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 10px;
    padding-right: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-clip: padding-box;
    background-color: hsla(0, 0%, 42%, 0.29);
    border: 3px solid transparent;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  button,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
`;

export default GlobalStyles;
