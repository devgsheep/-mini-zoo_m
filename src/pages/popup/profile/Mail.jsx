import React from "react";
import colors from "../../../styles/colors";
import styled from "@emotion/styled";

const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px 20px 17px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MailCircle = styled.div`
  position: relative;
  display: flex;
  width: 37px;
  height: 37px;
  padding: 4px;
  align-items: center;
  gap: 10px;
  border-radius: 222px;
  background: ${colors.blue[200]};
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Svg = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-45%);
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-bottom: 30px;
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

function Mail({ onClose }) {
  return (
    <>
      <AlertPopUpBox>
        <MailCircle>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
          >
            <path
              d="M17.625 1H3.375C2.06332 1 1 2.06332 1 3.375V12.875C1 14.1867 2.06332 15.25 3.375 15.25H17.625C18.9367 15.25 20 14.1867 20 12.875V3.375C20 2.06332 18.9367 1 17.625 1Z"
              stroke="#247CFF"
              strokeWidth="2"
            />
            <path
              d="M1 4.5625L9.43837 8.78169C9.76802 8.94641 10.1315 9.03217 10.5 9.03217C10.8685 9.03217 11.232 8.94641 11.5616 8.78169L20 4.5625"
              stroke="#247CFF"
              strokeWidth="2"
            />
          </Svg>
        </MailCircle>
        <Text>메일로 임시비밀번호가 발송되었습니다.</Text>
        <Button onClick={onClose}>확인</Button>
      </AlertPopUpBox>
    </>
  );
}

export default Mail;
