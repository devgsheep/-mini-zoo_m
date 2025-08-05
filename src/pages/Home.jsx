import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../atoms/userInfoAtom";
import { userStateAtom } from "../atoms/userStateAtom";
import { getGoogleToken, getGoogleUserInfo } from "../google/googleapi";
import { getAccessToken, getMemberWithAccessToken } from "../kko/kkoapi";
import colors from "../styles/colors";
import { HomeNavigation } from "../components/navigation/Navigation";

const Header = styled.div`
  max-height: 47px;
  height: 100vw;
  background-color: #fff;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const HomeTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px 0;
  font-size: 16px;
  color: ${colors.gray[700]};
  line-height: 27px;
  letter-spacing: 10%;
`;

const TopButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HomeTopButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 14px 60px;
  border: none;
  border-radius: 8px;
  background-color: #8ab9ff;
  color: #fff;
  line-height: 27px;
  cursor: pointer;
`;

const MainText = styled.span`
  font-size: 16px;
`;

const SubText = styled.span`
  font-size: 13px;
`;

const TopImageWrapper = styled.div`
  max-height: 228px;
  max-width: 152px;
  display: flex;
  justify-content: center;
`;

const HomeTopImg = styled.img`
  width: 100%;
  height: 100%;
`;
const HomeBottomSection = styled.div``;

const HomeRecent = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 16px;
  margin-left: 22px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 10%;
  color: ${colors.gray[900]};
`;

const RecordList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

const RecordListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  background-color: #fff;
  margin: 0 22px;
  border: 1px solid #bdd7ff;
  border-radius: 8px;
  cursor: pointer;
`;

const RecordInfoWrapper = styled.div`
  display: flex;
  gap: 11px;
`;
const RecordImage = styled.img`
  width: 36px;
  height: 36px;
`;
const RecordTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;
const RecordTextTitle = styled.span`
  font-size: 13px;
  color: ${colors.gray[700]};
  letter-spacing: 10%;
`;
const RecordTextDate = styled.span`
  font-size: 10px;
  color: ${colors.gray[500]};
  letter-spacing: 10%;
`;

const RecordSvgWrap = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ffdb64;
  padding: 11px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ViewAllButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px auto;
`;

const ViewAllButton = styled.button`
  padding: 14px 30px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const ViewAllText = styled.span`
  font-size: 13px;
  letter-spacing: 10%;
  color: ${colors.gray[700]};
`;
const Footer = styled.div``;

const NavigationBar = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItemFocus = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 25%;
  cursor: pointer;
  background-color: #bdd7ff;
  color: #579aff;
`;
const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 25%;
  background-color: #fff;
  color: #a8a8a8;
  cursor: pointer;
`;

function Home() {
  //js
  const [socialuserInfo, setSocialUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [searchParams] = useSearchParams();
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

  // // 사용자 정보 관리
  // const [socialuserInfo, setSocialUserInfo] = useState(null);
  // // 카카오 인증키 알아내기
  // const [URLSearchParams, setURLSearchParams] = useSearchParams();
  // const kkoAuthCode = URLSearchParams.get("code");
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

  const handleClickMonth = () => {
    navigate("/history/month");
  };

  // useEffect(() => {
  //   if (kkoAuthCode) {
  //     getAccessTokenCall();
  //   } else {
  //     return;
  //   }
  // }, [kkoAuthCode]);
  // const userName =
  //   socialuserInfo?.kakao_account?.profile?.nickname || socialuserInfo?.name || "OO";
  // const userEmail =
  //   socialuserInfo?.kakao_account?.email || socialuserInfo?.email || "example@email.com";
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

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
        socialuserInfo.picture ||
        "images/defaultuser.png";

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
    <div style={{ backgroundColor: "#F0F6FF" }}>
      <Header>
        <img src="./images/logotxt.svg" alt="logo" />
      </Header>
      <div>
        <HomeTop>
          <TopTitle>
            <span>
              {userInfo.nickname}
              님의 오늘 하루 어땟나요?
            </span>
            <span>오늘의 기분은 어때요?</span>
          </TopTitle>
          <TopButtonWrapper onClick={handleClickToday}>
            <HomeTopButton>
              <MainText>오늘의 순간을 기록하세요</MainText>
              <SubText>동물 친구들과 함께 감정을 기록해보세요</SubText>
            </HomeTopButton>
          </TopButtonWrapper>
          <TopImageWrapper>
            <HomeTopImg src="./images/happydog 1.png" alt="#" />
          </TopImageWrapper>
        </HomeTop>
        <HomeBottomSection>
          <HomeRecent>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.99984 17.3332C4.39734 17.3332 0.666504 13.6023 0.666504 8.99984C0.666504 4.39734 4.39734 0.666504 8.99984 0.666504C13.6023 0.666504 17.3332 4.39734 17.3332 8.99984C17.3332 13.6023 13.6023 17.3332 8.99984 17.3332ZM8.99984 15.6665C10.7679 15.6665 12.4636 14.9641 13.7139 13.7139C14.9641 12.4636 15.6665 10.7679 15.6665 8.99984C15.6665 7.23173 14.9641 5.53603 13.7139 4.28579C12.4636 3.03555 10.7679 2.33317 8.99984 2.33317C7.23173 2.33317 5.53603 3.03555 4.28579 4.28579C3.03555 5.53603 2.33317 7.23173 2.33317 8.99984C2.33317 10.7679 3.03555 12.4636 4.28579 13.7139C5.53603 14.9641 7.23173 15.6665 8.99984 15.6665ZM9.83317 8.99984H13.1665V10.6665H8.1665V4.83317H9.83317V8.99984Z"
                fill="#8AB9FF"
              />
            </svg>
            <span>최근 기록</span>
          </HomeRecent>
          <div>
            <RecordList>
              <RecordListItem onClick={handleClickDaily}>
                <RecordInfoWrapper>
                  <RecordImage src="./images/Untitled-1.png" alt="#" />
                  <RecordTextContainer>
                    <RecordTextTitle>행복한 하루</RecordTextTitle>
                    <RecordTextDate>12월 15일</RecordTextDate>
                  </RecordTextContainer>
                </RecordInfoWrapper>
                <RecordSvgWrap>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M4.875 0.125C3.91082 0.125 2.96829 0.410914 2.1666 0.946586C1.36491 1.48226 0.740067 2.24363 0.371089 3.13442C0.00211226 4.02521 -0.094429 5.00541 0.093674 5.95107C0.281777 6.89672 0.746076 7.76536 1.42786 8.44715C2.10964 9.12893 2.97828 9.59323 3.92394 9.78133C4.86959 9.96943 5.84979 9.87289 6.74058 9.50391C7.63137 9.13494 8.39274 8.51009 8.92842 7.7084C9.46409 6.90671 9.75 5.96418 9.75 5C9.74864 3.70749 9.23458 2.46831 8.32064 1.55436C7.4067 0.640418 6.16751 0.126365 4.875 0.125ZM3.1875 3.5C3.29875 3.5 3.40751 3.53299 3.50001 3.5948C3.59251 3.65661 3.66461 3.74446 3.70718 3.84724C3.74976 3.95002 3.7609 4.06312 3.73919 4.17224C3.71749 4.28135 3.66392 4.38158 3.58525 4.46025C3.50658 4.53891 3.40635 4.59249 3.29724 4.61419C3.18813 4.6359 3.07503 4.62476 2.97224 4.58218C2.86946 4.53961 2.78161 4.46751 2.7198 4.37501C2.65799 4.28251 2.625 4.17375 2.625 4.0625C2.625 3.91332 2.68427 3.77024 2.78975 3.66475C2.89524 3.55926 3.03832 3.5 3.1875 3.5ZM7.07438 6.3125C6.59203 7.14641 5.79047 7.625 4.875 7.625C3.95953 7.625 3.15797 7.14687 2.67563 6.3125C2.64849 6.26982 2.63028 6.22209 2.62207 6.17218C2.61386 6.12228 2.61583 6.07123 2.62786 6.0221C2.6399 5.97298 2.66174 5.9268 2.69208 5.88634C2.72243 5.84587 2.76064 5.81197 2.80443 5.78666C2.84822 5.76135 2.89667 5.74516 2.94688 5.73906C2.99708 5.73296 3.04801 5.73708 3.09658 5.75117C3.14515 5.76526 3.19037 5.78903 3.22952 5.82105C3.26867 5.85308 3.30093 5.89269 3.32438 5.9375C3.67453 6.54266 4.22485 6.875 4.875 6.875C5.52516 6.875 6.07547 6.54219 6.42563 5.9375C6.44907 5.89269 6.48134 5.85308 6.52048 5.82105C6.55963 5.78903 6.60485 5.76526 6.65343 5.75117C6.702 5.73708 6.75292 5.73296 6.80313 5.73906C6.85333 5.74516 6.90179 5.76135 6.94558 5.78666C6.98936 5.81197 7.02758 5.84587 7.05792 5.88634C7.08826 5.9268 7.11011 5.97298 7.12214 6.0221C7.13417 6.07123 7.13615 6.12228 7.12794 6.17218C7.11973 6.22209 7.10151 6.26982 7.07438 6.3125ZM6.5625 4.625C6.45125 4.625 6.3425 4.59201 6.24999 4.5302C6.15749 4.46839 6.08539 4.38054 6.04282 4.27776C6.00025 4.17498 5.98911 4.06188 6.01081 3.95276C6.03251 3.84365 6.08609 3.74342 6.16475 3.66475C6.24342 3.58609 6.34365 3.53251 6.45276 3.51081C6.56188 3.4891 6.67498 3.50024 6.77776 3.54282C6.88054 3.58539 6.9684 3.65749 7.0302 3.74999C7.09201 3.84249 7.125 3.95125 7.125 4.0625C7.125 4.21168 7.06574 4.35476 6.96025 4.46025C6.85476 4.56574 6.71169 4.625 6.5625 4.625Z"
                      fill="white"
                    />
                  </svg>
                </RecordSvgWrap>
              </RecordListItem>
              <RecordListItem onClick={handleClickDaily}>
                <RecordInfoWrapper>
                  <RecordImage src="./images/catsky.png" alt="#" />
                  <RecordTextContainer>
                    <RecordTextTitle>슬펐던 하루</RecordTextTitle>
                    <RecordTextDate>12월 16일</RecordTextDate>
                  </RecordTextContainer>
                </RecordInfoWrapper>
                <RecordSvgWrap style={{ backgroundColor: "#6B9DFA" }}>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.875 0.125C3.91082 0.125 2.96829 0.410914 2.1666 0.946586C1.36491 1.48226 0.740067 2.24363 0.371089 3.13442C0.00211226 4.02521 -0.094429 5.00541 0.093674 5.95107C0.281777 6.89672 0.746076 7.76536 1.42786 8.44715C2.10964 9.12893 2.97828 9.59323 3.92394 9.78133C4.86959 9.96943 5.84979 9.87289 6.74058 9.50391C7.63137 9.13494 8.39275 8.51009 8.92842 7.7084C9.46409 6.90671 9.75 5.96418 9.75 5C9.74864 3.70749 9.23458 2.46831 8.32064 1.55436C7.4067 0.640418 6.16751 0.126365 4.875 0.125ZM3.1875 3.5C3.29875 3.5 3.40751 3.53299 3.50001 3.5948C3.59251 3.65661 3.66461 3.74446 3.70718 3.84724C3.74976 3.95002 3.7609 4.06312 3.73919 4.17224C3.71749 4.28135 3.66392 4.38158 3.58525 4.46025C3.50658 4.53891 3.40635 4.59249 3.29724 4.61419C3.18813 4.6359 3.07503 4.62476 2.97224 4.58218C2.86946 4.53961 2.78161 4.46751 2.7198 4.37501C2.65799 4.28251 2.625 4.17375 2.625 4.0625C2.625 3.91332 2.68427 3.77024 2.78975 3.66475C2.89524 3.55926 3.03832 3.5 3.1875 3.5ZM6.9375 7.57438C6.85145 7.62401 6.74922 7.63748 6.65325 7.61182C6.55728 7.58615 6.47542 7.52346 6.42563 7.4375C6.07547 6.83234 5.52516 6.5 4.875 6.5C4.22485 6.5 3.67453 6.83281 3.32438 7.4375C3.30093 7.48231 3.26867 7.52192 3.22952 7.55395C3.19037 7.58597 3.14515 7.60974 3.09658 7.62383C3.04801 7.63792 2.99708 7.64204 2.94688 7.63594C2.89667 7.62984 2.84822 7.61365 2.80443 7.58834C2.76064 7.56303 2.72243 7.52913 2.69208 7.48866C2.66174 7.4482 2.6399 7.40202 2.62786 7.3529C2.61583 7.30377 2.61386 7.25272 2.62207 7.20282C2.63028 7.15291 2.64849 7.10518 2.67563 7.0625C3.15797 6.22859 3.95953 5.75 4.875 5.75C5.79047 5.75 6.59203 6.22813 7.07438 7.0625C7.12402 7.14855 7.13748 7.25078 7.11182 7.34675C7.08616 7.44272 7.02346 7.52458 6.9375 7.57438ZM6.5625 4.625C6.45125 4.625 6.3425 4.59201 6.24999 4.5302C6.15749 4.46839 6.08539 4.38054 6.04282 4.27776C6.00025 4.17498 5.98911 4.06188 6.01081 3.95276C6.03251 3.84365 6.08609 3.74342 6.16475 3.66475C6.24342 3.58609 6.34365 3.53251 6.45276 3.51081C6.56188 3.4891 6.67498 3.50024 6.77776 3.54282C6.88054 3.58539 6.9684 3.65749 7.0302 3.74999C7.09201 3.84249 7.125 3.95125 7.125 4.0625C7.125 4.21168 7.06574 4.35476 6.96025 4.46025C6.85476 4.56574 6.71169 4.625 6.5625 4.625Z"
                      fill="white"
                    />
                  </svg>
                </RecordSvgWrap>
              </RecordListItem>
              <RecordListItem onClick={handleClickDaily}>
                <RecordInfoWrapper>
                  <RecordImage src="./images/tigersky.png" alt="#" />
                  <RecordTextContainer>
                    <RecordTextTitle>화가났던 하루</RecordTextTitle>
                    <RecordTextDate>12월 17일</RecordTextDate>
                  </RecordTextContainer>
                </RecordInfoWrapper>
                <RecordSvgWrap style={{ backgroundColor: "#FA6B6B" }}>
                  <svg
                    width="9"
                    height="12"
                    viewBox="0 0 9 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 11C6.80875 11 8.5 9.3685 8.5 7.2745C8.5 6.7605 8.47375 6.2095 8.18875 5.353C7.90375 4.4965 7.8465 4.386 7.54525 3.857C7.4165 4.93625 6.72775 5.38625 6.55275 5.52075C6.55275 5.38075 6.13625 3.834 5.5045 2.90825C4.88425 2 4.04075 1.40425 3.54625 1C3.54625 1.7675 3.3305 2.9085 3.02125 3.49C2.71225 4.07125 2.65425 4.0925 2.268 4.525C1.88175 4.9575 1.70475 5.09125 1.38175 5.61625C1.05875 6.14125 1 6.8405 1 7.3545C1 9.4485 2.69125 11 4.75 11Z"
                      fill="white"
                      stroke="white"
                      strokeLinejoin="round"
                    />
                  </svg>
                </RecordSvgWrap>
              </RecordListItem>
            </RecordList>
          </div>
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
        </HomeBottomSection>
      </div>
      <Footer>
        <HomeNavigation />
      </Footer>
    </div>
  );
}

export default Home;
