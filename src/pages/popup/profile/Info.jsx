import styled from "@emotion/styled";
import React from "react";
import colors from "../../../styles/colors";
import {
  ButtonCC,
  ButtonContainer,
  ButtonOK,
  ButtonWrap,
  Span,
} from "../../Ui";

const InfoPopup = styled.div`
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
const InfoPopupBox = styled.div`
  height: 311px;
  width: 286px;
  background-color: ${colors.white};
  border-radius: 16px;
`;
const InfoPopupWrap = styled.div`
  padding-top: 20px;
  padding-left: 18px;
  padding-bottom: 30px;
`;
const InfoPopupTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin-bottom: 12px;
`;

const VersionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const VersionInfoTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #000;
`;
const VersionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: auto;
  min-height: 66px;
  flex-shrink: 0;
`;
const VersionInfo = styled.div`
  position: relative;
  width: 66px;
  height: 66px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #e0e0e0; */
`;
const VersionInfoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 105%;
  height: 105%;
  object-fit: cover;
  display: block;
`;
const AppNameInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
const Version = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
const Divider = styled.div`
  width: 256px;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;
const AccountInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const AccountInfoTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #000;
`;
const AccountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  height: auto;
  min-height: 45px;
  margin-left: 10px;
`;
const AccountInfo = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: flex-end;
  align-items: center;
`;
const AccountInfoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 5px;
`;
const AccountInfoDate = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
const Date = styled.div`
  color: #8f8f8f;
  font-size: 10px;
  font-weight: 400;
`;

function Info() {
  return (
    <InfoPopup>
      <InfoPopupBox>
        <InfoPopupWrap>
          <InfoPopupTitle>정보</InfoPopupTitle>
          <VersionInfoBox>
            <VersionInfoTitle>버전정보</VersionInfoTitle>
            <VersionWrap>
              <VersionInfo>
                <VersionInfoImage src="/images/logo.svg" alt="버전정보" />
              </VersionInfo>
              <AppNameInfo>
                <AppName>
                  ZOO:M <Version>v1.1.0</Version>
                </AppName>
              </AppNameInfo>
            </VersionWrap>
          </VersionInfoBox>
          <Divider />
          <AccountInfoBox>
            <AccountInfoTitle>계정정보</AccountInfoTitle>
            <AccountWrap>
              <AccountInfo>
                <AccountInfoImage src="/images/pansky.png" alt="버전정보" />
              </AccountInfo>
              <AccountInfoDate>
                가입한 날짜
                <Date>2025년 7월 18일</Date>
              </AccountInfoDate>
            </AccountWrap>
          </AccountInfoBox>
        </InfoPopupWrap>
        <ButtonContainer>
          <ButtonWrap>
            <ButtonOK>확인</ButtonOK>
            <Span />
            <ButtonCC>취소</ButtonCC>
          </ButtonWrap>
        </ButtonContainer>
      </InfoPopupBox>
    </InfoPopup>
  );
}

export default Info;
