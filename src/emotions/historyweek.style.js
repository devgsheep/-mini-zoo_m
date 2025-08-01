import styled from "@emotion/styled";
import { fonts } from "../styles/fonts";
import colors from "../styles/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #f0f6ff;
  text-align: center;
`;

export const TopContainer = styled.div`
  width: 394px;
  height: 47px;
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 13px;
`;

export const SignDiv = styled.div`
  height: 100%;
  font-family: ${fonts.bold};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopNavigation = styled.div`
  padding-bottom: 13px;
`;

export const NavigationBoxStyle = styled.div`
  width: 366px;
  display: inline-flex;
  padding: 4px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
`;

export const NavigationThree = styled.div`
  display: flex;
  width: 100%;
`;
export const Daily = styled.div`
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.gray[700]};
  cursor: pointer;
`;
export const Week = styled.div`
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-weight: 400;
  // 선택시
  background-color: ${colors.blue[200]};
  border-radius: 6px;
  color: ${colors.gray[700]};
  cursor: pointer;
`;
export const Month = styled.div`
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.gray[700]};
  cursor: pointer;
`;

export const EmotionBoxStyle = styled.div`
  width: 366px;
  display: inline-flex;
  padding: 8px 0px 16px 8px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
`;

export const Title = styled.p`
  display: flex;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: 100px;
  padding-bottom: 15px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const ColorsGuide = styled.div`
  display: flex;
  padding-left: 10px;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  gap: 20px 50px;
  flex-wrap: wrap;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
`;

export const Emotion = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  /* background: ${colors.emotion.boring.base}; */
  background-color: ${({ emotion }) => colors.emotion[emotion]?.base || "#000"};
`;

export const BoxWrap = styled.div`
  padding-top: 13px;
`;

export const ImgBoxStyle = styled.div`
  position: relative;
  width: 366px;
  display: inline-flex;
  padding: 10px 0px 16px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
`;

export const BoxStyle = styled.div`
  position: relative;
  width: 366px;
  display: inline-flex;
  padding: 15px 0px 35px 12px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  cursor: pointer;
`;

export const DailyDate = styled.div`
  position: absolute;
  color: ${colors.gray[300]};
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  right: 0;
  top: 0;
  transform: translateX(-30%) translateY(100%);
`;

export const Circle = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 11px 12px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  /* background: #fa6b6b; */
  background-color: ${({ emotion }) => colors.emotion[emotion]?.base || "#000"};
`;

export const EmotionTextBox = styled.div`
  display: block;
  padding-left: 16px;
  text-align: left;
`;
export const EmotionTitle = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  padding-bottom: 7px;
`;

export const EmotionFill = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const Span = styled.span`
  display: flex;
  width: 31px;
  height: 14px;
  padding: 3px 5px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ emotion }) => colors.emotion[emotion]?.base || "#000"};
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: #fff;
`;

export const ChartTitle = styled.p`
  width: 100%;
  text-align: left;
  padding-top: 0px;
  padding-left: 0px;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
`;

export const Text = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const ChartWrap = styled.div`
  background-color: ${colors.blue[100]};
  border-radius: 10px;
  height: 100%;
  width: 100%;
  max-width: 330px;
  && {
    padding: 15px !important;
  }
`;

export const Footer = styled.div`
  padding-top: 30px;
`;

export const NavigationBar = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItemFocus = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 25%;
  cursor: pointer;
  background-color: #bdd7ff;
  color: #579aff;
`;
export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 25%;
  background-color: #fff;
  color: #a8a8a8;
  cursor: pointer;
`;
