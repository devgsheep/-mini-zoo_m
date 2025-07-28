import styled from "@emotion/styled";
import colors from "../../../styles/colors";
import {
  TogleButton,
  TogleButtonCircle,
} from "../../../components/icons/button";
import { useState } from "react";

const Container = styled.div`
  width: 394px;
  height: auto;
  background-color: #f0f6ff;
`;

const AlertPopUp = styled.div`
  display: flex;
  position: fixed;
  z-index: 99999;
  width: 394px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  /* display: none; */
`;
const AlertPopUpBox = styled.div`
  width: 286px;
  height: 359px;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
const AlertButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 16px;
    color: ${colors.black};
    font-weight: 700;
  }
`;
const DaysWrap = styled.div`
  margin-bottom: 5px;
  span {
    font-size: 16px;
    color: ${colors.black};
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DaysButton = styled.button`
  background-color: ${({ state }) => (state ? colors.blue[500] : colors.white)};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: ${({ state }) => (state ? `none` : `1px solid ${colors.gray[200]}`)};
  cursor: pointer;
  color: ${({ state }) => (state ? colors.white : colors.black)};
`;

const DaysButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const days = ["일", "월", "화", "수", "목", "금", "토"];

function Alart() {
  //js

  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(state => !state);
  };

  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayToggle = day => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day],
    );
  };

  //jsx
  return (
    <Container>
      <AlertPopUp>
        <AlertPopUpBox>
          <AlertButtonWrap>
            <span>알림 설정</span>
            <TogleButton state={isOn} onClick={handleToggle}>
              <TogleButtonCircle state={isOn}></TogleButtonCircle>
            </TogleButton>
          </AlertButtonWrap>
          <div>소리 / 진동 / 무음</div>
          <DaysWrap>
            <span>요일</span>
            <DaysButtonWrap>
              {days.map(item => {
                return (
                  <DaysButton
                    key={item}
                    state={selectedDays.includes(item)}
                    onClick={() => handleDayToggle(item)}
                  >
                    {item}
                  </DaysButton>
                );
              })}
            </DaysButtonWrap>
          </DaysWrap>
          <div>확인/취소</div>
        </AlertPopUpBox>
      </AlertPopUp>
    </Container>
  );
}

export default Alart;
