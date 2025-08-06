import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { emotionStateAtom } from "../atoms/emotionStateAtom";
import { todayImgAtom } from "../atoms/todayImgAtom";
import { EmotionIconCircle } from "../components/icons/emotionicon";
import { HistoryNavigation } from "../components/navigation/Navigation";
import {
  BoxStyle,
  BoxWrap,
  Button,
  ColorsGuide,
  Container,
  Daily,
  DailyDate,
  Emotion,
  EmotionBoxStyle,
  EmotionFill,
  EmotionTextBox,
  EmotionTitle,
  Footer,
  ImgBoxStyle,
  Month,
  NavigationBoxStyle,
  NavigationThree,
  SignDiv,
  Span,
  Text,
  Title,
  TopContainer,
  TopNavigation,
  Week,
  Wrap,
} from "../emotions/historydaily.style";
import { TodayImg, TodayImgWrap } from "../emotions/today.style";

function HistoryDaily() {
  const emotionMap = {
    happy: "기쁨",
    sad: "슬픔",
    angry: "화남",
    boring: "지루",
    anxious: "불안",
    disgust: "까칠",
    embarrassed: "당황",
    tired: "피곤",
  };

  const emotionImgWrap = {
    happy: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          d="M4.875 0.125C3.91082 0.125 2.96829 0.410914 2.1666 0.946586C1.36491 1.48226 0.740067 2.24363 0.371089 3.13442C0.00211226 4.02521 -0.094429 5.00541 0.093674 5.95107C0.281777 6.89672 0.746076 7.76536 1.42786 8.44715C2.10964 9.12893 2.97828 9.59323 3.92394 9.78133C4.86959 9.96943 5.84979 9.87289 6.74058 9.50391C7.63137 9.13494 8.39275 8.51009 8.92842 7.7084C9.46409 6.90671 9.75 5.96418 9.75 5C9.74864 3.70749 9.23458 2.46831 8.32064 1.55436C7.4067 0.640418 6.16751 0.126365 4.875 0.125ZM3.1875 3.5C3.29875 3.5 3.40751 3.53299 3.50001 3.5948C3.59251 3.65661 3.66461 3.74446 3.70718 3.84724C3.74976 3.95002 3.7609 4.06312 3.73919 4.17224C3.71749 4.28135 3.66392 4.38158 3.58525 4.46025C3.50658 4.53891 3.40635 4.59249 3.29724 4.61419C3.18813 4.6359 3.07503 4.62476 2.97224 4.58218C2.86946 4.53961 2.78161 4.46751 2.7198 4.37501C2.65799 4.28251 2.625 4.17375 2.625 4.0625C2.625 3.91332 2.68427 3.77024 2.78975 3.66475C2.89524 3.55926 3.03832 3.5 3.1875 3.5ZM7.07438 6.3125C6.59203 7.14641 5.79047 7.625 4.875 7.625C3.95953 7.625 3.15797 7.14687 2.67563 6.3125C2.64849 6.26982 2.63028 6.22209 2.62207 6.17218C2.61386 6.12228 2.61583 6.07123 2.62786 6.0221C2.6399 5.97298 2.66174 5.9268 2.69208 5.88634C2.72243 5.84587 2.76064 5.81197 2.80443 5.78666C2.84822 5.76135 2.89667 5.74516 2.94688 5.73906C2.99708 5.73296 3.04801 5.73708 3.09658 5.75117C3.14515 5.76526 3.19037 5.78903 3.22952 5.82105C3.26867 5.85308 3.30093 5.89269 3.32438 5.9375C3.67453 6.54266 4.22485 6.875 4.875 6.875C5.52516 6.875 6.07547 6.54219 6.42563 5.9375C6.44907 5.89269 6.48134 5.85308 6.52048 5.82105C6.55963 5.78903 6.60485 5.76526 6.65343 5.75117C6.702 5.73708 6.75292 5.73296 6.80313 5.73906C6.85333 5.74516 6.90179 5.76135 6.94558 5.78666C6.98936 5.81197 7.02758 5.84587 7.05792 5.88634C7.08826 5.9268 7.11011 5.97298 7.12214 6.0221C7.13417 6.07123 7.13615 6.12228 7.12794 6.17218C7.11973 6.22209 7.10151 6.26982 7.07438 6.3125ZM6.5625 4.625C6.45125 4.625 6.3425 4.59201 6.24999 4.5302C6.15749 4.46839 6.08539 4.38054 6.04282 4.27776C6.00025 4.17498 5.98911 4.06188 6.01081 3.95276C6.03251 3.84365 6.08609 3.74342 6.16475 3.66475C6.24342 3.58609 6.34365 3.53251 6.45276 3.51081C6.56188 3.4891 6.67498 3.50024 6.77776 3.54282C6.88054 3.58539 6.9684 3.65749 7.0302 3.74999C7.09201 3.84249 7.125 3.95125 7.125 4.0625C7.125 4.21168 7.06574 4.35476 6.96025 4.46025C6.85476 4.56574 6.71169 4.625 6.5625 4.625Z"
          fill="white"
        />
      </svg>
    ),
    sad: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          d="M4.875 0.125C3.91082 0.125 2.96829 0.410914 2.1666 0.946586C1.36491 1.48226 0.740067 2.24363 0.371089 3.13442C0.00211226 4.02521 -0.094429 5.00541 0.093674 5.95107C0.281777 6.89672 0.746076 7.76536 1.42786 8.44715C2.10964 9.12893 2.97828 9.59323 3.92394 9.78133C4.86959 9.96943 5.84979 9.87289 6.74058 9.50391C7.63137 9.13494 8.39275 8.51009 8.92842 7.7084C9.46409 6.90671 9.75 5.96418 9.75 5C9.74864 3.70749 9.23458 2.46831 8.32064 1.55436C7.4067 0.640418 6.16751 0.126365 4.875 0.125ZM3.1875 3.5C3.29875 3.5 3.40751 3.53299 3.50001 3.5948C3.59251 3.65661 3.66461 3.74446 3.70718 3.84724C3.74976 3.95002 3.7609 4.06312 3.73919 4.17224C3.71749 4.28135 3.66392 4.38158 3.58525 4.46025C3.50658 4.53891 3.40635 4.59249 3.29724 4.61419C3.18813 4.6359 3.07503 4.62476 2.97224 4.58218C2.86946 4.53961 2.78161 4.46751 2.7198 4.37501C2.65799 4.28251 2.625 4.17375 2.625 4.0625C2.625 3.91332 2.68427 3.77024 2.78975 3.66475C2.89524 3.55926 3.03832 3.5 3.1875 3.5ZM6.9375 7.57438C6.85145 7.62401 6.74922 7.63748 6.65325 7.61182C6.55728 7.58615 6.47542 7.52346 6.42563 7.4375C6.07547 6.83234 5.52516 6.5 4.875 6.5C4.22485 6.5 3.67453 6.83281 3.32438 7.4375C3.30093 7.48231 3.26867 7.52192 3.22952 7.55395C3.19037 7.58597 3.14515 7.60974 3.09658 7.62383C3.04801 7.63792 2.99708 7.64204 2.94688 7.63594C2.89667 7.62984 2.84822 7.61365 2.80443 7.58834C2.76064 7.56303 2.72243 7.52913 2.69208 7.48866C2.66174 7.4482 2.6399 7.40202 2.62786 7.3529C2.61583 7.30377 2.61386 7.25272 2.62207 7.20282C2.63028 7.15291 2.64849 7.10518 2.67563 7.0625C3.15797 6.22859 3.95953 5.75 4.875 5.75C5.79047 5.75 6.59203 6.22813 7.07438 7.0625C7.12402 7.14855 7.13748 7.25078 7.11182 7.34675C7.08616 7.44272 7.02346 7.52458 6.9375 7.57438ZM6.5625 4.625C6.45125 4.625 6.3425 4.59201 6.24999 4.5302C6.15749 4.46839 6.08539 4.38054 6.04282 4.27776C6.00025 4.17498 5.98911 4.06188 6.01081 3.95276C6.03251 3.84365 6.08609 3.74342 6.16475 3.66475C6.24342 3.58609 6.34365 3.53251 6.45276 3.51081C6.56188 3.4891 6.67498 3.50024 6.77776 3.54282C6.88054 3.58539 6.9684 3.65749 7.0302 3.74999C7.09201 3.84249 7.125 3.95125 7.125 4.0625C7.125 4.21168 7.06574 4.35476 6.96025 4.46025C6.85476 4.56574 6.71169 4.625 6.5625 4.625Z"
          fill="white"
        />
      </svg>
    ),
  };

  const emotionState = useRecoilValue(emotionStateAtom);

  const navigate = useNavigate();

  const handleClickToday = () => {
    navigate("/today");
  };
  const [todayImg, setTodayImg] = useRecoilState(todayImgAtom);
  return (
    <Container>
      <TopContainer>
        <SignDiv>히스토리</SignDiv>
      </TopContainer>
      <TopNavigation>
        <NavigationBoxStyle>
          <NavigationThree>
            <Link to="/history/daily">
              <Daily>일간</Daily>
            </Link>
            <Link to="/history/week">
              <Week>주간</Week>
            </Link>
            <Link to="/history/month">
              <Month>월간</Month>
            </Link>
          </NavigationThree>
        </NavigationBoxStyle>
      </TopNavigation>
      <div>
        <EmotionBoxStyle>
          <div>
            <Title>감정 색상 가이드</Title>
            <ColorsGuide>
              <Wrap>
                <Emotion emotion="happy"></Emotion>
                기쁨
              </Wrap>
              <Wrap>
                <Emotion emotion="sad"></Emotion>
                슬픔
              </Wrap>
              <Wrap>
                <Emotion emotion="angry"></Emotion>
                화남
              </Wrap>
              <Wrap>
                <Emotion emotion="boring"></Emotion>
                지루
              </Wrap>
              <Wrap>
                <Emotion emotion="anxious"></Emotion>
                불안
              </Wrap>
              <Wrap>
                <Emotion emotion="disgust"></Emotion>
                까칠
              </Wrap>
              <Wrap>
                <Emotion emotion="embarrassed"></Emotion>
                당황
              </Wrap>
              <Wrap>
                <Emotion emotion="tired"></Emotion>
                피곤
              </Wrap>
            </ColorsGuide>
          </div>
        </EmotionBoxStyle>
      </div>
      <BoxWrap>
        <BoxStyle onClick={handleClickToday}>
          <DailyDate>7/18(금)</DailyDate>
          <EmotionIconCircle emotion={emotionState}>
            {emotionImgWrap[emotionState]}
          </EmotionIconCircle>
          <EmotionTextBox>
            <EmotionTitle>
              <EmotionFill>
                {emotionMap[emotionState] || emotionState}
              </EmotionFill>
              <Span emotion={emotionState}>강도 8</Span>
            </EmotionTitle>
            <Text>형편없이 졌어요</Text>
          </EmotionTextBox>
        </BoxStyle>
      </BoxWrap>
      <BoxWrap>
        <ImgBoxStyle>
          <div>
            <Title>사진</Title>
            <TodayImgWrap>
              <TodayImg
                style={{ cursor: "default" }}
                src={todayImg}
                alt="빈이미지"
              />
            </TodayImgWrap>
          </div>
        </ImgBoxStyle>
      </BoxWrap>
      <Button onClick={handleClickToday}>수정하기</Button>
      <Footer>
        <HistoryNavigation />
      </Footer>
    </Container>
  );
}

export default HistoryDaily;
