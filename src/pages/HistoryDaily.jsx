import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { dailyListAtom } from "../atoms/dailyListAtom";
import { emotionStateAtom } from "../atoms/emotionStateAtom";
import { selectedDateAtom } from "../atoms/selectedDateAtom";
import { textStateAtom } from "../atoms/textStateAtom";
import { todayImgAtom } from "../atoms/todayImgAtom";
import { userThemeAtom } from "../atoms/userThemeAtom";
import {
  EmotionIconCircle,
  emotionImgWrap,
  emotionMap,
} from "../components/icons/emotionicon";
import { HistoryNavigation } from "../components/navigation/Navigation";
import {
  BoxStyle,
  BoxWrap,
  Button,
  ColorsGuide,
  Container,
  ContentArea,
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
import { useEffect } from "react";

function HistoryDaily() {
  const emotionState = useRecoilValue(emotionStateAtom);
  const selectedDate = useRecoilValue(selectedDateAtom);
  const dailyList = useRecoilValue(dailyListAtom);

  const navigate = useNavigate();

  const [todayImg, setTodayImg] = useRecoilState(todayImgAtom);
  const [userTheme, setUserTheme] = useRecoilState(userThemeAtom);

  const currentDayRecord = dailyList.find(
    item =>
      moment(item.date).format("YYYY-MM-DD") === moment().format("YYYY-MM-DD"),
  );

  // 수정하기 버튼
  const handleClickToday = () => {
    navigate("/today");
  };

  const theme = userTheme;

  return (
    <Container theme={theme}>
      <TopContainer>
        <SignDiv>히스토리</SignDiv>
      </TopContainer>
      <ContentArea>
        <TopNavigation>
          <NavigationBoxStyle>
            <NavigationThree>
              <Link to="/history/daily">
                <Daily theme={theme}>일간</Daily>
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

        {currentDayRecord && (
          <>
            <BoxWrap>
              <BoxStyle onClick={handleClickToday}>
                <DailyDate>{moment(selectedDate).format("M/D(ddd)")}</DailyDate>
                <EmotionIconCircle emotion={currentDayRecord.emotion}>
                  {emotionImgWrap[currentDayRecord.emotion]}
                </EmotionIconCircle>
                <EmotionTextBox>
                  <EmotionTitle>
                    <EmotionFill>
                      {emotionMap[currentDayRecord.emotion] ||
                        currentDayRecord.emotion}
                    </EmotionFill>
                    <Span emotion={currentDayRecord.emotion}>
                      강도 {currentDayRecord.value}
                    </Span>
                  </EmotionTitle>
                  <Text>{currentDayRecord.text}</Text>
                </EmotionTextBox>
              </BoxStyle>
            </BoxWrap>
            {currentDayRecord.image && (
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
            )}
          </>
        )}
      </ContentArea>
      {currentDayRecord && (
        <Button theme={theme} onClick={handleClickToday}>
          수정하기
        </Button>
      )}
      <Footer>
        <HistoryNavigation theme={theme} />
      </Footer>
    </Container>
  );
}

export default HistoryDaily;
