import styled from "@emotion/styled";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import colors from "../styles/colors";
import { fonts } from "../styles/fonts";

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
  font-style: normal;
  font-weight: 400;
  color: ${colors.gray[700]};
  cursor: pointer;
`;
export const Month = styled.div`
  // 선택시
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-weight: 400;
  background-color: ${colors.blue[200]};
  border-radius: 6px;
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
  width: 100%;
  text-align: left;
  padding-top: 0px;
  padding-left: 5px;
  padding-bottom: 15px;
  font-size: 12px;
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

export const ChartTitle = styled.p`
  width: 100%;
  text-align: left;
  padding-top: 0px;
  padding-left: 13px;
  padding-bottom: 10px;
  font-size: 12px;
  font-weight: 400;
`;

export const BoxWrap = styled.div`
  padding-top: 13px;
`;

export const ImgBoxStyle = styled.div`
  position: relative;
  width: 366px;
  display: inline-flex;
  flex-direction: column;
  padding: 10px 0px 16px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
`;

export const ChartWrap = styled.div`
  background-color: ${colors.blue[100]}; // 원하는 배경색
  padding: 20px;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  max-width: 330px;
  && {
    padding: 15px !important;
  }
`;

export const StyledCalendar = styled(Calendar)`
  border: none;
  width: 100%;

  abbr {
    font-size: 10px;
  }
  button {
    font-weight: bold;
    background: none;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: ${colors.blue[300]};
    }
  }
  .react-calendar__tile--active {
    background: ${colors.blue[300]};
    color: white;
    border-radius: 8px;
  }
  .react-calendar__tile {
    position: relative;
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
