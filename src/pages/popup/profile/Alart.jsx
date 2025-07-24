import styled from "@emotion/styled";
import colors from "../../../styles/colors";
import { useState } from "react";
import {
  TogleButton,
  TogleButtonCircle,
} from "../../../components/icons/button";

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
  padding: 30px;
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
const Wrapper = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 12px;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const DayButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ selected }) => (selected ? "#339DFF" : "#ddd")};
  background-color: ${({ selected }) => (selected ? "#339DFF" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#000")};
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #339dff;
  }
`;
const days = ["일", "월", "화", "수", "목", "금", "토"];
function Alart() {
  //js
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = day => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day],
    );
  };

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(state => !state);
  };

  //jsx
  return (
    <Container>
      <AlertPopUp>
        <AlertPopUpBox>
          <div>
            <AlertButtonWrap>
              <span>알림설정</span>
              <TogleButton state={isOn} onClick={handleToggle}>
                <TogleButtonCircle state={isOn}></TogleButtonCircle>
              </TogleButton>
            </AlertButtonWrap>
            <div>소리 / 진동 / 무음</div>
          </div>
          <div>
            <span>요일</span>
            <div>
              <ul>
                <Wrapper>
                  <Title>요일</Title>
                  <ButtonWrap>
                    {days.map(day => (
                      <DayButton
                        key={day}
                        selected={selectedDays.includes(day)}
                        onClick={() => toggleDay(day)}
                      >
                        {day}
                      </DayButton>
                    ))}
                  </ButtonWrap>
                </Wrapper>
              </ul>
            </div>
          </div>
          <div>확인/취소</div>
        </AlertPopUpBox>
      </AlertPopUp>
    </Container>
  );
}

export default Alart;
