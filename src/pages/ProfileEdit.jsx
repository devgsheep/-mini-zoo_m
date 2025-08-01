import styled from "@emotion/styled";
import React, { useState } from "react";
import { fonts } from "../styles/fonts";
import colors from "../styles/colors";
import { Modal } from "antd";
import PasswordChange from "./popup/edit/PasswordChange";
import ProfileImage from "./popup/edit/ProfileImage";
import Language from "./popup/edit/Language";
import Logout from "./popup/profile/Logout";
import NicknameEdit from "./popup/edit/NicknameEdit";
import ReSign from "./popup/edit/ReSign";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { userEmailAtom, userNameAtom } from "../atoms/userInfoAtom ";

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
  cursor: pointer;
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

const ProfileEditIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  margin: 0 auto;
`;
const ProfileEditIcon = styled.img`
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

const NickEdit = styled.img`
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
  cursor: pointer;
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

const ReSignWrap = styled.div`
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
  // js

  // nicknameedit
  const [isNicknameEditModalOpen, setIsNicknameEditModalOpen] = useState(false);
  const openNicknameEditModal = () => {
    setIsNicknameEditModalOpen(true);
  };
  const closeNicknameEditModal = () => {
    setIsNicknameEditModalOpen(false);
  };

  // passwordchange
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const openPasswordModal = () => {
    setIsPasswordModalOpen(true);
  };
  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };

  // profileimage
  const [isProfileImageModalOpen, setIsProfileImageModalOpen] = useState(false);
  const openProfileImageModal = () => {
    setIsProfileImageModalOpen(true);
  };
  const closeProfileImageModal = () => {
    setIsProfileImageModalOpen(false);
  };

  // language
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const openLanguageModal = () => {
    setIsLanguageModalOpen(true);
  };
  const closeLanguageModal = () => {
    setIsLanguageModalOpen(false);
  };

  // logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };
  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  // resing
  const [isReSignModalOpen, setIsReSignModalOpen] = useState(false);
  const openReSignModal = () => {
    setIsReSignModalOpen(true);
  };
  const closeReSignModal = () => {
    setIsReSignModalOpen(false);
  };

  // 네비게이터
  const navigate = useNavigate();
  const handleClickProfile = () => {
    navigate("/Profile");
  };
  // 리코일로 닉네임, 이메일 불러오기
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [userEmail, setUserEmail] = useRecoilState(userEmailAtom);

  // 로그아웃 버튼 클릭시 사용자 정보 초기화
  const handleLogout = () => {
    setUserName("OO");
    setUserEmail("example@email.com");
  };

  // jsx

  return (
    <Container>
      <TopContainer>
        <SignWrap>
          <div>
            <Image
              onClick={handleClickProfile}
              src="../images/majesticons_arrow-left.svg"
              alt="뒤로가기"
            />
          </div>
        </SignWrap>
        <SignDiv>프로필 편집</SignDiv>
      </TopContainer>
      <ProfileWrap>
        <ProfileEditWrap>
          <ProfileEditIconWrap>
            <ProfileEditIcon src="../images/panwhite.png" alt="프로필 이미지" />
          </ProfileEditIconWrap>

          <ProfileInfo>
            <ProfileNickName>
              {userName}
              <NickEdit
                src="../images/edit.svg"
                alt="닉네임편집"
                onClick={openNicknameEditModal}
              />
            </ProfileNickName>
            <Modal
              open={isNicknameEditModalOpen}
              nOk={closeNicknameEditModal}
              onCancel={closeNicknameEditModal}
              footer={null}
              closable={false}
              centered
              width={286}
            >
              <NicknameEdit onClose={closeNicknameEditModal} />
            </Modal>
            <ProfileEtc>프로필을 편집하세요</ProfileEtc>
          </ProfileInfo>
        </ProfileEditWrap>

        <ButtonWrap>
          <Button onClick={openPasswordModal}>
            <IconCirclePass>
              <PassImage src="../images/pass.svg" alt="비밀번호 변경" />
            </IconCirclePass>
            <ButtonTextWrapper>
              <ButtonText>비밀번호 변경</ButtonText>
              <ButtonSubText>계정 보안을 강화하세요</ButtonSubText>
            </ButtonTextWrapper>
          </Button>
          <Modal
            open={isPasswordModalOpen}
            nOk={closePasswordModal}
            onCancel={closePasswordModal}
            footer={null} // ✅ Theme 안에 자체 버튼이 있으므로 footer 제거
            closable={false}
            centered
            width={286}
          >
            <PasswordChange onClose={closePasswordModal} />
          </Modal>

          <Button onClick={openProfileImageModal}>
            <IconCircleTranceImage>
              <TranceImage src="../images/image.svg" alt="프로필이미지변경" />
            </IconCircleTranceImage>
            <ButtonTextWrapper>
              <ButtonText>프로필 이미지 변경</ButtonText>
              <ButtonSubText>당신만의 독특한 개성을 표현하세요</ButtonSubText>
            </ButtonTextWrapper>
          </Button>
          <Modal
            open={isProfileImageModalOpen}
            nOk={closeProfileImageModal}
            onCancel={closeProfileImageModal}
            footer={null}
            closable={false}
            centered
            width={286}
          >
            <ProfileImage onClose={closeProfileImageModal} />
          </Modal>
          <Button onClick={openLanguageModal}>
            <IconCircleLanguage>
              <LanguageImage src="../images/language.svg" alt="언어" />
            </IconCircleLanguage>
            <ButtonTextWrapper>
              <ButtonText>언어</ButtonText>
              <ButtonSubText>한국어</ButtonSubText>
            </ButtonTextWrapper>
          </Button>
          <Modal
            open={isLanguageModalOpen}
            nOk={closeLanguageModal}
            onCancel={closeLanguageModal}
            footer={null}
            closable={false}
            centered
            width={286}
          >
            <Language onClose={closeLanguageModal} />
          </Modal>
        </ButtonWrap>
        <LogOutButton onClick={openLogoutModal}>
          <IconCircleLogout>
            <LogOutImage src="../images/logout.svg" alt="로그아웃" />
          </IconCircleLogout>
          로그아웃
        </LogOutButton>
        <Modal
          open={isLogoutModalOpen}
          nOk={closeLogoutModal}
          onCancel={closeLogoutModal}
          footer={null}
          closable={false}
          centered
          width={286}
        >
          <Logout onClose={closeLogoutModal} handleLogout={handleLogout} />
        </Modal>
        <ReSignWrap onClick={openReSignModal}>회원탈퇴</ReSignWrap>
        <Modal
          open={isReSignModalOpen}
          nOk={closeReSignModal}
          onCancel={closeReSignModal}
          footer={null}
          closable={false}
          centered
          width={286}
        >
          <ReSign onClose={closeReSignModal} />
        </Modal>
      </ProfileWrap>
    </Container>
  );
}

export default ProfileEdit;
