import { useState } from "react";
import {
  DaysButton,
  TogleButton,
  TogleButtonCircle,
} from "../../../components/icons/button";
import "../../../css/radio.css";
import {
  AlertButtonWrap,
  AlertPopUpBox,
  DaysButtonWrap,
  DaysWrap,
  RadioBox,
  RadioInput,
  RadioLabel,
  RadioWrap,
  Select,
  Span,
  TimeWrapper,
} from "../../../emotions/profile/alart.style";
import { ButtonCC, ButtonContainer, ButtonOK, ButtonWrap } from "../../Ui";

const days = ["일", "월", "화", "수", "목", "금", "토"];
function Alart({ onClose }) {
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
    <>
      <AlertPopUpBox>
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
                checked={radioValue === "sound"}
                onChange={e => setRadioValue(e.target.value)}
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
                checked={radioValue === "vibration"}
                onChange={e => setRadioValue(e.target.value)}
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
                checked={radioValue === "silent"}
                onChange={e => setRadioValue(e.target.value)}
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
            <ButtonOK onClick={onClose}>확인</ButtonOK>
            <Span />
            <ButtonCC onClick={onClose}>취소</ButtonCC>
          </ButtonWrap>
        </ButtonContainer>
      </AlertPopUpBox>
    </>
    //   </AlertPopUp>
    // </Container>
  );
}

export default Alart;
