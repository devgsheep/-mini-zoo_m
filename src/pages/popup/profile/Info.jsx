import {
  AccountInfo,
  AccountInfoBox,
  AccountInfoDate,
  AccountInfoImage,
  AccountInfoTitle,
  AccountWrap,
  AppName,
  AppNameInfo,
  Date,
  Divider,
  InfoPopupBox,
  InfoPopupTitle,
  InfoPopupWrap,
  Version,
  VersionInfo,
  VersionInfoBox,
  VersionInfoImage,
  VersionInfoTitle,
  VersionWrap,
} from "../../../emotions/profile/info.style";
import {
  ButtonCC,
  ButtonContainer,
  ButtonOK,
  ButtonWrap,
  Span,
} from "../../Ui";

function Info({ onClose }) {
  return (
    // <InfoPopup>
    <>
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
          <ButtonContainer>
            <ButtonWrap>
              <ButtonOK onClick={onClose}>확인</ButtonOK>
              <Span />
              <ButtonCC onClick={onClose}>취소</ButtonCC>
            </ButtonWrap>
          </ButtonContainer>
        </InfoPopupWrap>
      </InfoPopupBox>
    </>
    // </InfoPopup>
  );
}

export default Info;
