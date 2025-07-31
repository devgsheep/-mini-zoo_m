import styled from "@emotion/styled";
import { useState } from "react";
import {
  DaysButton,
  TogleButton,
  TogleButtonCircle,
} from "../../../components/icons/button";
import Modal from "../../../components/ui/Modal";
import "../../../css/radio.css";
import colors from "../../../styles/colors";
import { ButtonCC, ButtonContainer, ButtonOK, ButtonWrap } from "../../Ui";

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
  height: auto;
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
    display: flex;
    justify-content: left;
    font-size: 16px;
    color: ${colors.black};
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DaysButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  width: 1px;
  height: 21px;
  background: ${colors.gray[400]};
`;
const Select = styled.select`
  width: 50px;
  font-size: 16px;
  border: none;
`;
const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const RadioWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RadioBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.black};
`;
const RadioLabel = styled.label`
  display: flex;
  gap: 6px;
  cursor: pointer;
  font-weight: 500;
`;
const RadioInput = styled.input`
  cursor: pointer;
`;

const days = ["일", "월", "화", "수", "목", "금", "토"];
function Alart() {
  //js

  const [isOn, setIsOn] = useState(true);
  const handleToggle = () => {
    setIsOn(state => !state);
    if (isOn) {
      setSelectedDays([]);
      setRadioValue("");
    } else {
      setRadioValue("sound");
    }
  };

  const handleChangeAlart = () => {
    onCancel();
  };

  const [radioValue, setRadioValue] = useState("sound");
  const [selectedDays, setSelectedDays] = useState([]);
  const handleDayToggle = day => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day],
    );
  };

  // 시간 부분
  const hours = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const minutes = [
    "00",
    "05",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];

  //jsx
  return (
    // <Container>
    //   <AlertPopUp>
    //     <AlertPopUpBox>
    <Modal>
      <AlertButtonWrap>
        <span>알림 설정</span>
        <TogleButton state={isOn} onClick={handleToggle}>
          <TogleButtonCircle state={isOn}></TogleButtonCircle>
        </TogleButton>
      </AlertButtonWrap>
      {/* 추후 안트디자인 수업이후 넣을예정 */}
      <RadioWrap>
        <RadioBox>
          <RadioLabel htmlFor="sound">
            <RadioInput
              type="radio"
              id="sound"
              value="sound"
              name="sound-setting"
              className="custom-radio"
            />
            소리
          </RadioLabel>
        </RadioBox>
        <RadioBox>
          <RadioLabel htmlFor="vibration">
            <RadioInput
              type="radio"
              id="vibration"
              value="vibration"
              name="sound-setting"
              className="custom-radio"
            />
            진동
          </RadioLabel>
        </RadioBox>
        <RadioBox>
          <RadioLabel htmlFor="silent">
            <RadioInput
              type="radio"
              id="silent"
              value="silent"
              name="sound-setting"
              className="custom-radio"
            />
            무음
          </RadioLabel>
        </RadioBox>
      </RadioWrap>
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
      {/* 시계부분 */}
      <TimeWrapper>
        <Select id="ampm" name="timer">
          <option value="am">오전</option>
          <option value="pm">오후</option>
        </Select>
        <Select>
          {hours.map(hour => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </Select>
        <Select>
          {minutes.map(minute => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </Select>
      </TimeWrapper>
      <ButtonContainer>
        <ButtonWrap>
          <ButtonOK onClick={handleChangeAlart}>확인</ButtonOK>
          <Span />
          <ButtonCC onClick={handleChangeAlart}>취소</ButtonCC>
        </ButtonWrap>
      </ButtonContainer>
    </Modal>

    //     </AlertPopUpBox>
    //   </AlertPopUp>
    // </Container>
  );
}

export default Alart;
