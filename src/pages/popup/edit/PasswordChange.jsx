import styled from "@emotion/styled";
import React from "react";
import colors from "../../../styles/colors";
import { Button } from "../../Ui";

const Container = styled.div`
  width: 394px;
  height: auto;
  background-color: #f0f6ff;
`;

const PasswordChangePopUp = styled.div`
  display: flex;
  position: fixed;
  z-index: 99999;
  width: 394px;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.6); */
  /* display: none; */
`;
const PasswordChangePopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
const PasswordChangeTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 350px;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[400]};
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding-left: 10px;
  font-size: 13px;
  color: #c2c2c2;
  &::placeholder {
    font-size: 11px;
    color: #999;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ChangePw = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 25px; */
  gap: 3px;
`;
function PasswordChange(onClose) {
  return (
    <Container>
      <PasswordChangePopUp>
        <PasswordChangePopUpBox>
          <PasswordChangeTitle>비밀번호 변경</PasswordChangeTitle>
          <InputWrap>
            <Input type="password" placeholder="현재 비밀번호" />
          </InputWrap>
          <ChangePw className="changepw">
            <InputWrap>
              <Input type="password" placeholder="새 비밀번호" />
            </InputWrap>
            <InputWrap>
              <Input type="password" placeholder="새 비밀번호 확인" />
            </InputWrap>
          </ChangePw>
          <ButtonWrap>
            <Button onClick={onClose}>확인</Button>
          </ButtonWrap>
        </PasswordChangePopUpBox>
      </PasswordChangePopUp>
    </Container>
  );
}

export default PasswordChange;
