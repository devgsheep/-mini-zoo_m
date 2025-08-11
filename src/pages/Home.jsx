import moment from "moment";
import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { dailyListAtom } from "../atoms/dailyListAtom";
import { emotionStateAtom } from "../atoms/emotionStateAtom";
import { userInfoAtom } from "../atoms/userInfoAtom";
import { userStateAtom } from "../atoms/userStateAtom";
import { userThemeAtom } from "../atoms/userThemeAtom";
import {
  EmotionIconCircle,
  emotionImgWrap,
} from "../components/icons/emotionicon";
import {
  emotionImageMap,
  emotionImageSkyCircleMap,
  emotionTextMap,
} from "../components/icons/emotionimg";
import { HomeNavigation } from "../components/navigation/Navigation";
import {
  Container,
  ContentArea,
  Footer,
  Header,
  HomeBottomSection,
  HomeRecent,
  HomeTop,
  HomeTopButton,
  HomeTopImg,
  MainText,
  RecordImage,
  RecordInfoWrapper,
  RecordList,
  RecordListItem,
  RecordTextContainer,
  RecordTextDate,
  RecordTextTitle,
  SubText,
  TopButtonWrapper,
  TopImageWrapper,
  TopTitle,
  ViewAllButton,
  ViewAllButtonWrapper,
  ViewAllText,
} from "../emotions/home.style";
import { getGoogleToken, getGoogleUserInfo } from "../google/googleapi";
import { getAccessToken, getMemberWithAccessToken } from "../kko/kkoapi";
import colors from "../styles/colors";

function Home() {
  //js
  const [socialuserInfo, setSocialUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [searchParams] = useSearchParams();

  const emotionState = useRecoilValue(emotionStateAtom);
  const dailyList = useRecoilValue(dailyListAtom);

  const authCode = searchParams.get("code");
  const provider = searchParams.get("provider") || searchParams.get("state");
  const getAccessTokenCall = async () => {
    try {
      const accesskey = await getGoogleToken(authCode);
      if (accesskey) {
        setAccessToken(accesskey.access_token);
        const googleuserinfo = await getGoogleUserInfo(accesskey.access_token);
        // console.log("구글의 사용자 정보 : ", googleuserinfo);
        setSocialUserInfo(googleuserinfo);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // // 카카오 인가 키를 받아서 엑세스 토큰을 요청한다.
  const getKkoAccessTokenCall = async () => {
    const accesskey = await getAccessToken(authCode);
    //   // 사용자 정보 호출
    const kkouserinfo = await getMemberWithAccessToken(accesskey);
    // console.log("카카오의 사용자 정보 : ", kkouserinfo);
    setSocialUserInfo(kkouserinfo);
  };

  const navigate = useNavigate();

  const handleClickToday = () => {
    navigate("/today");
  };
  const handleClickDaily = () => {
    navigate("/history/daily");
  };

  const handleClickWeek = () => {
    navigate("/history/week");
  };

  const handleClickMonth = () => {
    navigate("/history/month");
  };

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);
  const [userTheme, setUserTheme] = useRecoilState(userThemeAtom);
  const theme = userTheme;

  useEffect(() => {
    if (!authCode) return;

    if (provider === "google") {
      getAccessTokenCall(); // 구글만 실행
    } else if (provider === "kakao") {
      getKkoAccessTokenCall(); // 카카오만 실행
    }
  }, [authCode, provider]);
  useEffect(() => {
    if (socialuserInfo) {
      const socialname =
        socialuserInfo?.kakao_account?.profile.nickname ||
        socialuserInfo?.name ||
        "게스트";

      const socialemail =
        socialuserInfo?.kakao_account?.email ||
        socialuserInfo?.email ||
        "example@email.com";

      const socialtumbnail_image =
        socialuserInfo?.kakao_account?.profile.thumbnail_image_url ||
        socialuserInfo?.picture ||
        "images/defaultuser.png";

      const socialUser = {
        nickname: socialname,
        email: socialemail,
        password: "",
        thumbnail_img: socialtumbnail_image,
        introduction: "자기소개를 입력해주세요",
      };
      localStorage.setItem("userInfo", JSON.stringify(socialUser));
      setUserInfo({
        nickname: socialname,
        email: socialemail,
        password: "",
        thumbnail_img: socialtumbnail_image,
        introduction: "자기소개를 입력해주세요",
      });
      setUserState(true);

      // setUserName(name);
      // setUserEmail(email);
    }
  }, [socialuserInfo]);

  //jsx
  return (
    <Container theme={theme}>
      <Header>
        <img src="./images/logotxt.svg" alt="logo" />
      </Header>
      <ContentArea>
        <div>
          <HomeTop>
            <TopTitle>
              <span>
                {userInfo.nickname}
                님의 오늘 하루 어땠나요?
              </span>
              <span>오늘의 기분은 어때요?</span>
            </TopTitle>
            <TopButtonWrapper onClick={handleClickToday}>
              <HomeTopButton theme={theme}>
                <MainText>오늘의 순간을 기록하세요</MainText>
                <SubText>동물 친구들과 함께 감정을 기록해보세요</SubText>
              </HomeTopButton>
            </TopButtonWrapper>
            <TopImageWrapper>
              {emotionState.emotion && (
                <div>
                  <HomeTopImg
                    src={
                      emotionImageMap[
                        dailyList
                          .slice()
                          .sort(
                            (a, b) => new Date(b.date) - new Date(a.date),
                          )[0]?.emotion
                      ] || "./images/happy_dog.svg"
                    }
                    alt={`${emotionState.emotion} 이미지`}
                  />
                </div>
              )}
            </TopImageWrapper>
          </HomeTop>
          <HomeBottomSection>
            <HomeRecent>
              <CiClock2
                style={{
                  color: colors[theme][300],
                  fontSize: "20px",
                }}
              />
              <span>최근 기록</span>
            </HomeRecent>
            <div>
              {dailyList.length > 0 ? (
                <RecordList>
                  {dailyList
                    .slice()
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 3)
                    .map((item, index) => (
                      <RecordListItem
                        onClick={handleClickWeek}
                        key={index}
                        theme={theme}
                      >
                        <RecordInfoWrapper>
                          <RecordImage
                            src={emotionImageSkyCircleMap[item.emotion]}
                            alt="#"
                          />
                          <RecordTextContainer>
                            <RecordTextTitle>
                              {emotionTextMap[item.emotion]}
                            </RecordTextTitle>
                            <RecordTextDate>
                              {moment(item.date).format("M/D(ddd)")}
                            </RecordTextDate>
                          </RecordTextContainer>
                        </RecordInfoWrapper>
                        <EmotionIconCircle emotion={item.emotion}>
                          {emotionImgWrap[item.emotion]}
                        </EmotionIconCircle>
                      </RecordListItem>
                    ))}
                </RecordList>
              ) : (
                <RecordList>
                  <RecordListItem onClick={handleClickToday} theme={theme}>
                    <RecordInfoWrapper>
                      <RecordTextContainer>
                        <RecordTextTitle>
                          <p>기록된 감정이 없습니다. 감정을 기록해주세요.</p>
                        </RecordTextTitle>
                      </RecordTextContainer>
                    </RecordInfoWrapper>
                  </RecordListItem>
                </RecordList>
              )}
            </div>
          </HomeBottomSection>
        </div>
      </ContentArea>
      <ViewAllButtonWrapper onClick={handleClickMonth}>
        <ViewAllButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M3.97816 14.8751C3.65186 14.8751 3.37962 14.766 3.16145 14.5478C2.94329 14.3296 2.83397 14.0574 2.8335 13.7311V4.68568C2.8335 4.35985 2.94282 4.08785 3.16145 3.86968C3.38009 3.65151 3.65233 3.54219 3.97816 3.54172H5.2312V2.34322C5.2312 2.23319 5.26733 2.14206 5.33958 2.06981C5.41183 1.99756 5.50273 1.96143 5.61229 1.96143C5.72184 1.96143 5.81298 1.99756 5.8857 2.06981C5.95843 2.14206 5.99455 2.23319 5.99408 2.34322V3.54172H11.0615V2.31631C11.0615 2.21525 11.0953 2.13072 11.1628 2.06272C11.2303 1.99472 11.3146 1.96096 11.4157 1.96143C11.5167 1.9619 11.6008 1.99567 11.6678 2.06272C11.7349 2.12978 11.7689 2.21407 11.7698 2.3156V3.54172H13.0229C13.3487 3.54172 13.6209 3.65104 13.8396 3.86968C14.0582 4.08832 14.1673 4.36056 14.1668 4.68639V13.7311C14.1668 14.0569 14.0577 14.3292 13.8396 14.5478C13.6214 14.7664 13.3489 14.8755 13.0222 14.8751H3.97816ZM3.97816 14.1667H13.0229C13.1315 14.1667 13.2314 14.1214 13.3225 14.0307C13.4136 13.9401 13.459 13.8399 13.4585 13.7304V7.51972H3.54183V13.7311C3.54183 13.8397 3.58716 13.9396 3.67783 14.0307C3.7685 14.1219 3.86837 14.1672 3.97745 14.1667"
              fill="#A8A8A8"
            />
          </svg>
          <ViewAllText>모든 기록 보기</ViewAllText>
        </ViewAllButton>
      </ViewAllButtonWrapper>
      <Footer>
        <HomeNavigation theme={theme} />
      </Footer>
    </Container>
  );
}

export default Home;
