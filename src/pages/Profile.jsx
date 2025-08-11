import { Modal } from "antd";
import { useState } from "react";
import { BsBell } from "react-icons/bs";
import { CiCircleAlert, CiCircleQuestion } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  useRecoilState,
  useRecoilValue
} from "recoil";
import { topEmotionAtom } from "../atoms/topEmotionAtom";
import { userInfoAtom } from "../atoms/userInfoAtom";
import { userStateAtom } from "../atoms/userStateAtom";
import { userThemeAtom } from "../atoms/userThemeAtom";
import { emotionmbti } from "../components/icons/emotionimg";
import { ProfileNavigation } from "../components/navigation/Navigation";
import "../css/modal.css";
import {
  Button,
  ButtonWrap,
  Container,
  EmotionP,
  IconCircleAlert,
  IconCircleEtc,
  IconCircleInfo,
  IconCirclePersonalInfo,
  IconCircleTheme,
  LogoutButton,
  NickEditImage,
  PersonalInfoImage,
  ProfileEtc,
  ProfileFeel,
  ProfileFeelAvg,
  ProfileFeelDiv,
  ProfileImage,
  ProfileImageWrap,
  ProfileInfo,
  ProfileMain,
  ProfileNickName,
  ProfileWrap,
  SignDiv,
  SignWrap,
  Text,
  TopContainer,
} from "../emotions/profile.style";
import colors from "../styles/colors";
import Alart from "./popup/profile/Alart";
import Ask from "./popup/profile/Ask";
import Info from "./popup/profile/Info";
import Logout from "./popup/profile/Logout";
import PersonalInfo from "./popup/profile/PersonalInfo";
import Theme from "./popup/profile/Theme";

function Profile() {
  //js
  const top1 = useRecoilValue(topEmotionAtom);

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
  const [userTheme, setUserTheme] = useRecoilState(userThemeAtom);

  // 로그아웃 버튼 클릭시 사용자 정보 초기화
  const handleLogout = () => {
    setUserState(false);
  };
  const theme = userTheme;

  //jsx
  return (
    <Container theme={theme}>
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
            <IoHeart
              style={{
                color: colors[theme][200],
                position: "relative",
                fontSize: "22px",
                right: "15px",
              }}
            />
            <Text>나의 감정 성향</Text>
          </ProfileFeelDiv>
          <ProfileFeelAvg theme={theme}>
            <EmotionP>
              {top1
                ? ` ${emotionmbti[top1.emotion] ?? ""}`
                : "감정 데이터가 없습니다."}
              {/* 평균적으로 불안하고 지친 감정이 많아요. 에너지 소비가 많아
              지치시는 편이에요. */}
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

      <ProfileNavigation theme={theme} />
    </Container>
  );
}

export default Profile;
