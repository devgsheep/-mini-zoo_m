import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const AlertButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 16px;
    color: ${colors.black};
    font-weight: 700;
  }
`;
export const DaysWrap = styled.div`
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

export const DaysButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  width: 1px;
  height: 21px;
  background: ${colors.gray[400]};
`;
export const Select = styled.select`
  width: 50px;
  font-size: 16px;
  border: none;
`;
export const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const RadioWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RadioBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.black};
`;
export const RadioLabel = styled.label`
  display: flex;
  gap: 6px;
  cursor: pointer;
  font-weight: 500;
`;
export const RadioInput = styled.input`
  cursor: pointer;
`;
