import styled from "@emotion/styled";
import React from "react";
import colors from "../styles/colors";
export const Button = styled.button`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  background-color: #247cff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #004cbd;
  }
`;

//  라디오 버튼
export const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 12px;
  position: relative;
`;

export const Input = styled.input`
  display: none;

  &:checked + span::after {
    transform: translate(-50%, -50%) scale(1); // 살짝 위로 뜨는 효과
    border-color: #007aff;
  }
`;
export const CustomRadio = styled.span`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  position: relative;

  ::after {
    content: "";
    background-color: #fff;
    border: 5px solid #007aff;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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

function Ui() {
  return (
    <div>
      <h1>버튼</h1>
      <Button>버튼</Button>

      {/* 라디오 버튼 */}
      <RadioWrapper>
        <Input type={"radio"} />
        <CustomRadio />
      </RadioWrapper>

      {/* 확인취소버튼 */}
      <ButtonContainer>
        <ButtonWrap>
          <ButtonOK>확인</ButtonOK>
          <Span />
          <ButtonCC>취소</ButtonCC>
        </ButtonWrap>
      </ButtonContainer>
    </div>
  );
}

export default Ui;
