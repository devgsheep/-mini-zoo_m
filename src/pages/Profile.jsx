import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../atoms/userInfoAtom";
import { userStateAtom } from "../atoms/userStateAtom";
import "../css/modal.css";
import {
  AlertImage,
  Button,
  ButtonWrap,
  Container,
  EmotionP,
  EtcImage,
  IconCircleAlert,
  IconCircleEtc,
  IconCircleInfo,
  IconCirclePersonalInfo,
  IconCircleTheme,
  InfoImage,
  LogoutButton,
  NavigationBar,
  NavItem,
  NavItemFocus,
  NickEditImage,
  PersonalInfoImage,
  ProfileEtc,
  ProfileFeel,
  ProfileFeelAvg,
  ProfileFeelDiv,
  ProfileIcon,
  ProfileImage,
  ProfileImageWrap,
  ProfileInfo,
  ProfileMain,
  ProfileNickName,
  ProfileWrap,
  SignDiv,
  SignWrap,
  ThemeImage,
  TopContainer,
} from "../emotions/profile.style";
import Alart from "./popup/profile/Alart";
import Ask from "./popup/profile/Ask";
import Info from "./popup/profile/Info";
import Logout from "./popup/profile/Logout";
import PersonalInfo from "./popup/profile/PersonalInfo";
import Theme from "./popup/profile/Theme";
import { BsBell } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { RiShieldCrossLine } from "react-icons/ri";
import { ProfileNavigation } from "../components/navigation/Navigation";

function Profile() {
  //js

  // 알람
  const [isAlartModalOpen, setIsAlartModalOpen] = useState(false);
  const openAlartModal = () => {
    setIsAlartModalOpen(true);
  };
  const closeAlartModal = () => {
    setIsAlartModalOpen(false);
  };

  // 테마
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const openThemeModal = () => setIsThemeModalOpen(true);
  const closeThemeModal = () => setIsThemeModalOpen(false);

  // 개인정보
  const [isPersonalInfoModalOpen, setIsPersonalInfoMoalOpen] = useState(false);
  const openPersonalInfoModal = () => setIsPersonalInfoMoalOpen(true);
  const closePersonalInfoModal = () => setIsPersonalInfoMoalOpen(false);

  // 문의하기
  const [isAskOpen, setIsAskMoalOpen] = useState(false);
  const openAskModal = () => setIsAskMoalOpen(true);
  const closeAskModal = () => setIsAskMoalOpen(false);

  // 정보
  const [isInfoOpen, setIsInfoMoalOpen] = useState(false);
  const openInfoModal = () => setIsInfoMoalOpen(true);
  const closeInfoModal = () => setIsInfoMoalOpen(false);

  // 로그아웃
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };
  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  // 사용자 정보 불러오기, 상태 불러오기
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

  // 로그아웃 버튼 클릭시 사용자 정보 초기화
  const handleLogout = () => {
    setUserState(false);
  };

  //jsx
  return (
    <Container>
      <TopContainer>
        <SignWrap></SignWrap>
        <SignDiv>프로필</SignDiv>
      </TopContainer>
      <ProfileWrap>
        <ProfileMain>
          <ProfileImageWrap>
            <ProfileImage src={userInfo.thumbnail_img} alt="프로필 이미지" />
          </ProfileImageWrap>
          <ProfileInfo>
            <ProfileNickName>
              {userInfo.nickname}
              <div>
                <Link to="/profile/edit">
                  <NickEditImage
                    src="./images/arrowedit.svg"
                    alt="닉네임수정"
                  />
                </Link>
              </div>
            </ProfileNickName>
            <ProfileEtc>
              <div>{userInfo.introduction}</div>
              <div>{userInfo.email}</div>
            </ProfileEtc>
          </ProfileInfo>
        </ProfileMain>
        <ProfileFeel>
          <ProfileFeelDiv>
            <ProfileIcon src="../images/profileicon.svg" alr="감정 성향" />
            나의 감정 성향
          </ProfileFeelDiv>
          <ProfileFeelAvg>
            <EmotionP>
              평균적으로 불안하고 지친 감정이 많아요. 에너지 소비가 많아
              지치시는 편이에요.
            </EmotionP>
          </ProfileFeelAvg>
        </ProfileFeel>
        <ButtonWrap>
          <Button onClick={openAlartModal}>
            <IconCircleAlert>
              <BsBell
                style={{
                  color: "#247CFF",
                  fontSize: "20px",
                }}
              />
              {/* <AlertImage src="./images/alert.svg" alt="알림" /> */}
            </IconCircleAlert>
            알림
          </Button>
          <Modal
            open={isAlartModalOpen}
            onCancel={closeAlartModal}
            footer={null}
            closable={false}
            centered
            width={286}
          >
            <Alart onClose={closeAlartModal} />
          </Modal>
          {/* 테마 버튼 */}
          <Button type="primary" onClick={openThemeModal}>
            <IconCircleTheme>
              <GoSun
                style={{
                  color: "#D8A12D",
                  fontSize: "20px",
                }}
              />
              {/* <ThemeImage src="./images/theme.svg" alt="테마" /> */}
            </IconCircleTheme>
            테마
          </Button>
          <Modal
            open={isThemeModalOpen}
            onCancel={closeThemeModal}
            footer={null}
            closable={false}
            centered
            width={286}
          >
            <Theme onClose={closeThemeModal} />
          </Modal>
          {/* 개인정보처리방침 */}
          <Button type="primary" onClick={openPersonalInfoModal}>
            <IconCirclePersonalInfo>
              {/* <RiShieldCrossLine
                style={{
                  color: "#48BE75",
                  fontSize: "25px",
                }}
              /> */}
              <PersonalInfoImage
                src="./images/personalinfo.svg"
                alt="개인정보처리방침"
              />
            </IconCirclePersonalInfo>
            개인정보 처리방침
          </Button>
          <Modal
            open={isPersonalInfoModalOpen}
            onCancel={closePersonalInfoModal}
            footer={null}
            closable={false}
            centered
            width={286}
          >
            <PersonalInfo onClose={closePersonalInfoModal} />
          </Modal>
          <Button type="primary" onClick={openAskModal}>
            <IconCircleEtc>
              <CiCircleQuestion
                style={{
                  color: "#E43059",
                  fontSize: "25px",
                }}
              />
              {/* <EtcImage src="./images/etc.svg" alt="문의" /> */}
            </IconCircleEtc>
            문의
          </Button>
          <Modal
            open={isAskOpen}
            onCancel={closeAskModal}
            footer={null}
            closable={false}
            centered
            width={286}
          >
            <Ask onClose={closeAskModal} />
          </Modal>
          <Button type="primary" onClick={openInfoModal}>
            <IconCircleInfo>
              <CiCircleAlert
                style={{
                  color: "#4C5664",
                  fontSize: "25px",
                }}
              />
              {/* <InfoImage src="./images/info.svg" alt="정보" /> */}
            </IconCircleInfo>
            정보
          </Button>
          <Modal
            open={isInfoOpen}
            onCancel={closeInfoModal}
            footer={null}
            closable={false}
            centered
            width={286}
          >
            <Info onClose={closeInfoModal} />
          </Modal>
        </ButtonWrap>
        <LogoutButton onClick={openLogoutModal}>로그아웃</LogoutButton>
        <Modal
          open={isLogoutModalOpen}
          onCancel={closeLogoutModal}
          footer={null}
          closable={false}
          centered
          width={286}
        >
          <Logout onClose={closeLogoutModal} handleLogout={handleLogout} />
        </Modal>
      </ProfileWrap>

      <ProfileNavigation />
    </Container>
  );
}

export default Profile;
