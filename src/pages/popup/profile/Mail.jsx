import React from "react";
import colors from "../../../styles/colors";
import styled from "@emotion/styled";

const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px 20px 20px 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid #c6ddff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding-left: 10px;
  font-size: 13px;
  color: #c2c2c2;
  margin-bottom: 15px;
  &::placeholder {
    font-size: 11px;
    color: #999;
  }
`;

const Button = styled.button`
  display: inline-flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${colors.blue[500]};
  border: none;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: 1.6px;
  line-height: normal;
  cursor: pointer;
`;

function Mail() {
  return (
    <>
      <AlertPopUpBox>
        <Title>비밀번호 찾기</Title>
        <Text>메일로 임시비밀번호가 발송되었습니다.</Text>
        <Input type="email" placeholder="example@email.com" />
        <Button>확인</Button>
      </AlertPopUpBox>
    </>
  );
}

export default Mail;
