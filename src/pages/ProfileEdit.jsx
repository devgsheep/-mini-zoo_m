import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  userEmailAtom,
  userNameAtom,
  userStateAtom,
} from "../atoms/userInfoAtom";
import {
  Button,
  ButtonSubText,
  ButtonText,
  ButtonTextWrapper,
  ButtonWrap,
  Container,
  IconCircleLanguage,
  IconCircleLogout,
  IconCirclePass,
  IconCircleTranceImage,
  Image,
  LanguageImage,
  LogOutButton,
  LogOutImage,
  NickEdit,
  PassImage,
  ProfileEditIcon,
  ProfileEditIconWrap,
  ProfileEditWrap,
  ProfileEtc,
  ProfileInfo,
  ProfileNickName,
  ProfileWrap,
  ReSignWrap,
  SignDiv,
  SignWrap,
  TopContainer,
  TranceImage,
} from "../emotions/profileedit.style";
import Language from "./popup/edit/Language";
import NicknameEdit from "./popup/edit/NicknameEdit";
import PasswordChange from "./popup/edit/PasswordChange";
import ProfileImage from "./popup/edit/ProfileImage";
import ReSign from "./popup/edit/ReSign";
import Logout from "./popup/profile/Logout";

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
  const [isLogin, setIslogin] = useRecoilState(userStateAtom);

  // 로그아웃 버튼 클릭시 사용자 정보 초기화
  const handleLogout = () => {
    setIslogin(false);
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
