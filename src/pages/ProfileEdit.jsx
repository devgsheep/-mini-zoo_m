import styled from "@emotion/styled";
import React from "react";
import { fonts } from "../styles/fonts";
import colors from "../styles/colors";

const Container = styled.div`
  width: 394px;
  height: auto;
  background: ${colors.blue[100]};
`;
const TopContainer = styled.div`
  width: 394px;
  height: 47px;
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignWrap = styled.div`
  width: 18px;
  height: 18px;
  left: 10px;
  top: 35%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const SignDiv = styled.div`
  height: 100%;
  font-family: ${fonts.bold};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileWrap = styled.div`
  padding: 30px 13px 13px 13px;
`;

const ProfileEditWrap = styled.div`
  margin-bottom: 30px;
`;

const ProfileImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  margin: 0 auto;
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;
const ProfileInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ProfileNickName = styled.div`
  font-size: 20px;
  font-family: ${fonts.bold};

  gap: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
`;

const NickNameEdit = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const ProfileEtc = styled.div`
  font-size: 16px;
  color: #757575;
  font-weight: 300;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Button = styled.button`
  width: 367px;
  height: 83px;
  border-radius: 16px;
  padding: 10px 10px;
  text-align: center;
  background-color: #fff;
  border: none;
  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.05);
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  cursor: pointer;
`;

const IconCirclePass = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #feccd0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PassImage = styled.img`
  width: 20px;
  height: 20px;
`;
const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #424242;
`;
const ButtonSubText = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #5c5c5c;
`;

const IconCircleTranceImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #c5d5fe;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TranceImage = styled.img`
  width: 20px;
  height: 20px;
`;

const IconCircleLanguage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #adf4d0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LanguageImage = styled.img`
  width: 20px;
  height: 20px;
`;
const LogOutButton = styled.div`
  display: flex;
  width: 367px;
  padding: 19px 0 18px 0;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid #fecaca;
  background: #fef2f2;
  box-shadow: 0 4px 4px 0 rgba(12, 12, 13, 0.05);
  margin-top: 165px;
  color: #dc2626;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
`;

const IconCircleLogout = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogOutImage = styled.img`
  width: 16px;
  height: 16px;
`;

const ReSign = styled.div`
  font-size: 13px;
  color: #8f8f8f;
  font-weight: 500;
  padding-top: 14px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 20px;
`;

function ProfileEdit() {
  return (
    <Container>
      <TopContainer>
        <SignWrap>
          <div>
            <Image src="../images/majesticons_arrow-left.svg" alt="뒤로가기" />
          </div>
        </SignWrap>
        <SignDiv>프로필 편집</SignDiv>
      </TopContainer>
      <ProfileWrap>
        <ProfileEditWrap>
          <ProfileImageWrap>
            <ProfileImage src="../images/panwhite.png" alt="프로필 이미지" />
          </ProfileImageWrap>
          <ProfileInfo>
            <ProfileNickName>
              도현
              <NickNameEdit src="../images/edit.svg" alt="닉네임편집" />
            </ProfileNickName>
            <ProfileEtc>프로필을 편집하세요</ProfileEtc>
          </ProfileInfo>
        </ProfileEditWrap>

        <ButtonWrap>
          <Button>
            <IconCirclePass>
              <PassImage src="../images/pass.svg" alt="비밀번호 변경" />
            </IconCirclePass>
            <ButtonTextWrapper>
              <ButtonText>비밀번호 변경</ButtonText>
              <ButtonSubText>계정 보안을 강화하세요</ButtonSubText>
            </ButtonTextWrapper>
          </Button>

          <Button>
            <IconCircleTranceImage>
              <TranceImage src="../images/image.svg" alt="프로필이미지변경" />
            </IconCircleTranceImage>
            <ButtonTextWrapper>
              <ButtonText>프로필 이미지 변경</ButtonText>
              <ButtonSubText>당신만의 독특한 개성을 표현하세요</ButtonSubText>
            </ButtonTextWrapper>
          </Button>
          <Button>
            <IconCircleLanguage>
              <LanguageImage src="../images/language.svg" alt="언어" />
            </IconCircleLanguage>
            <ButtonTextWrapper>
              <ButtonText>언어</ButtonText>
              <ButtonSubText>한국어</ButtonSubText>
            </ButtonTextWrapper>
          </Button>
        </ButtonWrap>
        <LogOutButton>
          <IconCircleLogout>
            <LogOutImage src="../images/logout.svg" alt="로그아웃" />
          </IconCircleLogout>
          로그아웃
        </LogOutButton>
        <ReSign>회원탈퇴</ReSign>
      </ProfileWrap>
    </Container>
  );
}

export default ProfileEdit;
