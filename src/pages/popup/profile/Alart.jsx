import styled from "@emotion/styled";
import colors from "../../../styles/colors";
import {
  DaysButton,
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
// 추후 삭제예정
const SoundSelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const StyledRadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.black};

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid ${colors.gray[300]};
    border-radius: 50%;
    background-color: white;
    box-sizing: border-box;
  }

  ${({ checked }) =>
    checked &&
    `
    &::before {
      border: 5px solid ${colors.blue[500]};
      background-color: white;
    }
  `}
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

const DaysButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 203px;
  height: 21px;
  justify-content: center;
  align-items: center;
  gap: 38px;
`;

const ButtonOK = styled.button`
  border: none;
  background: none;
  color: ${colors.blue[500]};
  text-align: center;
  font-size: 16px;
`;
const ButtonCC = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-size: 16px;
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

const days = ["일", "월", "화", "수", "목", "금", "토"];
const sounds = ["sound", "vibration", "silent"];

function Alart() {
  //js

  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(state => !state);
  };

  // 추후 삭제예정
  const [selectedSound, setSelectedSound] = useState("sound");
  const handleSoundChange = e => {
    setSelectedSound(e.target.value);
  };
  const labelMap = {
    sound: "소리",
    vibration: "진동",
    silent: "무음",
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
          {/* 추후 안트디자인 수업이후 넣을예정 */}
          <SoundSelectWrap>
            {sounds.map(item => {
              return (
                <div key={item}>
                  <HiddenRadio
                    type="radio"
                    id={item}
                    name="sounds"
                    value={item}
                    checked={selectedSound === item}
                    onChange={handleSoundChange}
                  />
                  <StyledRadioLabel
                    htmlFor={item}
                    checked={selectedSound === item}
                  >
                    {labelMap[item]}
                  </StyledRadioLabel>
                </div>
              );
            })}
          </SoundSelectWrap>
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
              <option value="hour">01</option>
              <option value="hour">02</option>
              <option value="hour">03</option>
              <option value="hour">04</option>
            </Select>
            <Select>
              <option value="minite">00</option>
              <option value="minite">05</option>
            </Select>
          </TimeWrapper>
          <ButtonContainer>
            <ButtonWrap>
              <ButtonOK>확인</ButtonOK>
              <Span />
              <ButtonCC>취소</ButtonCC>
            </ButtonWrap>
          </ButtonContainer>
        </AlertPopUpBox>
      </AlertPopUp>
    </Container>
  );
}

export default Alart;
