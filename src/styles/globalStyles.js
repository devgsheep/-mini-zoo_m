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
        src: url(${PretendardBlack});
      }
      @font-face {
        font-family: "Bold";
        src: url(${PretendardBold});
      }
      @font-face {
        font-family: "ExtraBold";
        src: url(${PretendardExtraBold});
      }
      @font-face {
        font-family: "ExtraLight";
        src: url(${PretendardExtraLight});
      }
      @font-face {
        font-family: "Light";
        src: url(${PretendardLight});
      }
      @font-face {
        font-family: "Medium";
        src: url(${PretendardMedium});
      }
      @font-face {
        font-family: "Regular";
        src: url(${PretendardRegular});
      }
      @font-face {
        font-family: "SemiBold";
        src: url(${PretendardSemiBold});
      }
      @font-face {
        font-family: "Thin";
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
