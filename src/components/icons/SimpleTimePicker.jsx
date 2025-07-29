import styled from "@emotion/styled";
import { useState } from "react";

const timeOptions = {
  hours: Array.from({ length: 12 }, (_, i) => i + 1),
  minutes: Array.from({ length: 60 }, (_, i) => i),
};

const TimeSelectBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
`;
const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SimpleTimePicker() {
  const [ampm, setAmpm] = useState("AM");
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);

  return (
    <div>
      <TimeSelectBox>
        <Select value={ampm} onChange={e => setAmpm(e.target.value)}>
          <option value="AM">오전</option>
          <option value="PM">오후</option>
        </Select>
        <Select value={hour} onChange={e => setHour(Number(e.target.value))}>
          {timeOptions.hours.map(h => (
            <option key={h} value={h}>
              {h.toString().padStart(2, "0")}
            </option>
          ))}
        </Select>
        <TimeBox>
          <span>:</span>
        </TimeBox>
        <Select
          value={minute}
          onChange={e => setMinute(Number(e.target.value))}
        >
          {timeOptions.minutes.map(m => (
            <option key={m} value={m}>
              {m.toString().padStart(2, "0")}
            </option>
          ))}
        </Select>
      </TimeSelectBox>
    </div>
  );
}
export default SimpleTimePicker;

// 참조코드

/* <select id="country" name="country">
  <option value="kr">한국</option>
  <option value="us">미국</option>
  <option value="cn">중국</option>
  <option value="jp">일본</option>
</select>; */
