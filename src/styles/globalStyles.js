// src/styles/globalStyles.js
/** @jsxImportSource @emotion/react */
import React from "react";
import { Global, css } from "@emotion/react";

import PretendardBlack from "../assets/Pretendard-Black.otf";
import PretendardBold from "../assets/Pretendard-Bold.otf";
import PretendardExtraBold from "../assets/Pretendard-ExtraBold.otf";
import PretendardExtraLight from "../assets/Pretendard-ExtraLight.otf";
import PretendardLight from "../assets/Pretendard-Light.otf";
import PretendardMedium from "../assets/Pretendard-Medium.otf";
import PretendardRegular from "../assets/Pretendard-Regular.otf";
import PretendardSemiBold from "../assets/Pretendard-SemiBold.otf";
import PretendardThin from "../assets/Pretendard-Thin.otf";

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Black";
        font-weight: 900;
        src: url(${PretendardBlack});
      }
      @font-face {
        font-family: "ExtraBold";
        font-weight: 800;
        src: url(${PretendardExtraBold});
      }
      @font-face {
        font-family: "Bold";
        font-weight: 700;
        src: url(${PretendardBold});
      }
      @font-face {
        font-family: "SemiBold";
        font-weight: 600;
        src: url(${PretendardSemiBold});
      }
      @font-face {
        font-family: "Medium";
        font-weight: 500;
        src: url(${PretendardMedium});
      }
      @font-face {
        font-family: "Regular";
        font-weight: 400;
        src: url(${PretendardRegular});
      }
      @font-face {
        font-family: "Light";
        font-weight: 300;
        src: url(${PretendardLight});
      }
      @font-face {
        font-family: "ExtraLight";
        font-weight: 200;
        src: url(${PretendardExtraLight});
      }
      @font-face {
        font-family: "Thin";
        font-weight: 100;
        src: url(${PretendardThin});
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Regular", sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
