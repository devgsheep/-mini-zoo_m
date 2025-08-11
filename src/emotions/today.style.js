import styled from "@emotion/styled";
import colors from "../styles/colors";
import { Slider as AntdSlider } from "antd";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
const hexToRgba = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Container = styled.div`
  /* width: 394px; */
  background-color: ${({ theme }) => colors[theme][100]};
  position: relative;
`;
export const Header = styled.div`
  position: relative;
  max-height: 47px;
  height: 47px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10px;
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
  background-color: ${colors.blue[200]};
  color: ${colors.blue[400]};
`;
export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 25%;
  background-color: ${colors.white};
  color: ${colors.gray[400]};
  cursor: pointer;
`;
export const Main = styled.div``;
export const TodayEmotionUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const EmotionListItem = styled.li`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ emotion, isSelected }) =>
    isSelected
      ? colors.emotion[emotion]?.hover || "#ddd"
      : colors.emotion[emotion]?.base || "#eee"};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ emotion }) =>
      colors.emotion[emotion]?.hover || "#ccc"};
  }
`;

export const SliderWrap = styled.div``;
export const SliderTitle = styled.span`
  display: "flex";
  justify-content: "center";
  margin-top: "27px";
  font-size: 13px;
  color: ${colors.gray[700]};
`;

// export const SliderCircleUl = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   width: 332px;
//   margin: 0 auto;
//   padding-top: 14px;
// `;
// export const SliderCircleli = styled.li`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 3px;
// `;
// export const SliderCircle = styled.i`
//   width: 6px;
//   height: 6px;
//   border-radius: 3px;
//   background-color: ${colors.blue[300]};
//   display: block;
// `;
// export const SliderCircletxt = styled.p`
//   color: ${colors.gray[700]};
//   font-size: 8px;
// `;

export const TodayText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 41px;
  gap: 15px;
  span {
    margin-left: 35px;
    font-size: 13px;
    color: ${colors.gray[700]};
  }
`;
export const TextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 18px;
`;
export const TextArea = styled.textarea`
  font-family: "Pretendard";
  font-weight: 400;
  width: 344px;
  height: 67px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => colors[theme][200]};
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding: 8px 10px;
  font-size: 10px;
  color: ${colors.gray[800]};
  resize: none;
  line-height: 1.5;
  &::placeholder {
    font-size: 10px;
    color: ${colors.gray[300]};
    line-height: 1.5;
  }
`;
export const TodayPotoWrap = styled.div`
  margin-top: 33px;
  span {
    margin-left: 17px;
    font-size: 13px;
    color: ${colors.gray[700]};
    display: flex;
    margin-bottom: 6px;
  }
`;
export const TodayImgWrap = styled.div`
  width: 360px;
  height: 310px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
`;
export const TodayImg = styled.img`
  cursor: pointer;
`;
export const TodayButtonWrap = styled.div`
  margin: 44px auto;
`;
export const TodayAddButton = styled.button`
  display: flex;
  width: 250px;
  padding: 8px 0 9px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => colors[theme][300]};
  color: ${colors.gray[100]};
  /* Drop Shadow/100 */
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.6px;
  margin: 0 auto;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => colors[theme][500]};
  }
`;

export const DateStyle = styled.div`
  font-size: 10px;
  color: ${colors.gray[600]};
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 500;
`;

export const CalendarWrap = styled.div`
  position: absolute;
  left: 0;
  top: 47px;
  width: 200px;
  min-height: 100px;
  background-color: aqua;
  /* display: none; */
`;

export const TopImageWrapper = styled.div`
  max-height: 228px;
  max-width: 152px;
  display: flex;
  justify-content: center;
`;

export const HomeTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeTopImg = styled.img`
  padding-top: 11px;
  width: 100%;
  height: 100%;
`;

export const HomeTopSpan = styled.span`
  color: ${colors.gray[700]};
  font-weight: 700;
  font-size: 13px;
  padding-top: -10px;
  padding-bottom: 25px;
`;
export const CalendarButton = styled.button`
  border: none;
  background-color: ${colors.white};
`;
export const CustomCalendar = styled(Calendar)`
  .react-calendar {
    border: none;
  }
  .react-calendar__navigation {
    display: flex;
    height: 22px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 22px;
    background: none;
  }
  .react-calendar__navigation__label {
    font-size: 12px;
  }
  .react-calendar__tile--now:hover {
    background-color: ${({ theme }) => colors[theme][100]};
  }
  .react-calendar__tile--now {
    background-color: ${({ theme }) => colors[theme][200]};
  }
`;

export const StyledSlider = styled(AntdSlider)`
  &&& .ant-slider-handle {
    margin-top: 1px;

    &::after {
      background-color: ${({ theme }) => colors[theme][200]} !important;
      box-shadow: none !important;

      :hover {
        background-color: ${({ theme }) => colors[theme][300]} !important;
        ::after {
          box-shadow: 0 0 0 2px ${({ theme }) => colors[theme][300]};
        }
      }
    }

    &:hover::after {
      box-shadow: 0 0 0 2.5px ${({ theme }) => colors[theme][400]} !important;
      outline: 6px solid ${({ theme }) => hexToRgba(colors[theme][300], 0.3)} !important;
    }

    &:focus::after {
      box-shadow: 0 0 0 2px ${({ theme }) => colors[theme][300]} !important;
      outline: 6px solid ${({ theme }) => hexToRgba(colors[theme][300], 0.3)} !important;
    }
  }

  .ant-slider-handle::after {
    background-color: ${({ theme }) => colors[theme][200]};
    box-shadow: none;
  }
  .ant-slider-handle::before {
  }

  .ant-slider-track {
    background-color: ${({ theme }) => colors[theme][200]} !important;
    height: 6px;
  }

  .ant-slider-rail {
    background-color: #fff !important;
    height: 6px;
  }
  .ant-slider {
    color: #fff !important;
  }
`;
