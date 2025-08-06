import { useRecoilState } from "recoil";
import colors from "./colors";
import { fonts } from "./fonts";
import { userTemaAtom } from "../atoms/userTemaAtom";

export const theme = {
  colors,
  fonts,
};

// 사용법 예시
//  const Title = styled.h1`
//   color: ${({ theme }) => theme.colors.primary[500]};
//   font-family: ${({ theme }) => theme.fonts.bold};
// `;
