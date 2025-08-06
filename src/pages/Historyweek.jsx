import { Link, useNavigate } from "react-router-dom";
import {
  EmotionIconCircle,
  emotionImgWrap,
  emotionMap,
  HappyIconCircle,
  SadIconCircle,
  TiredIconCircle,
} from "../components/icons/emotionicon";
import {
  BoxStyle,
  BoxWrap,
  ChartTitle,
  ChartWrap,
  Circle,
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
  NavigationBar,
  NavigationBoxStyle,
  NavigationThree,
  NavItem,
  NavItemFocus,
  SignDiv,
  Span,
  Text,
  Title,
  TopContainer,
  TopNavigation,
  Week,
  Wrap,
} from "../emotions/historyweek.style";
import colors from "../styles/colors";
import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { barData } from "../apis/bar_data";
import { HistoryNavigation } from "../components/navigation/Navigation";
import { useRecoilValue } from "recoil";
import { selectedDateAtom } from "../atoms/selectedDateAtom";
import { textStateAtom } from "../atoms/textStateAtom";
import { emotionStateAtom } from "../atoms/emotionStateAtom";
import { dailyListAtom } from "../atoms/dailyListAtom";
import moment from "moment";
import { useRecoilState } from "recoil";
import { userThemeAtom } from "../atoms/userThemeAtom";

function Historyweek() {
  // 기록
  const emotionState = useRecoilValue(emotionStateAtom);
  const textState = useRecoilValue(textStateAtom);
  const selectedDate = useRecoilValue(selectedDateAtom);
  const dailyList = useRecoilValue(dailyListAtom);

  const [userTheme, setUserTheme] = useRecoilState(userThemeAtom);
  const theme = userTheme;
  const navigate = useNavigate();

  const handleClickToday = () => {
    navigate("/today");
  };

  // 차트
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(barData);
  }, []);
  return (
    <Container>
      <TopContainer>
        <SignDiv>히스토리</SignDiv>
      </TopContainer>
      <ContentArea>
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
          <ImgBoxStyle>
            <div>
              <ChartTitle>감정 변화 차트</ChartTitle>
              <div
                style={{
                  width: "330px",
                  height: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ChartWrap>
                  <ResponsiveBar
                    data={data}
                    keys={["point"]}
                    indexBy="date"
                    groupMode="stacked"
                    padding={0.8}
                    enableLabel={false}
                    borderRadius={5}
                    // X축 범례 제거
                    legends={[]}
                    // Food, Y축 범례 제거
                    axisLeft={null}
                    // 눈금선
                    enableGridX={false}
                    enableGridY={false}
                    axisBottom={{
                      format: value => {
                        const date = new Date(value);
                        const month = date.getMonth() + 1; // 0부터 시작하므로 1을 더함
                        const day = date.getDate();
                        return `${month}/${day}`;
                      },
                      // 차트 바로 밑 | 표시 제거
                      tickSize: 0,
                    }}
                    margin={{ top: 0, right: -20, bottom: 18, left: -20 }}
                    // 감정에 따른 색 반환
                    colors={({ data }) => {
                      const emotionColorMap = {
                        happy: `${colors.emotion.happy.base}`,
                        sad: `${colors.emotion.sad.base}`,
                        angry: `${colors.emotion.angry.base}`,
                        boring: `${colors.emotion.boring.base}`,
                        anxious: `${colors.emotion.anxious.base}`,
                        disgust: `${colors.emotion.disgust.base}`,
                        embarrassed: `${colors.emotion.embarrassed.base}`,
                        tired: `${colors.emotion.tired.base}`,
                      };
                      return emotionColorMap[data.emotion];
                    }}
                  />
                </ChartWrap>
              </div>
            </div>
          </ImgBoxStyle>
        </BoxWrap>
        {dailyList.map(() => (
          <BoxWrap>
            <BoxStyle onClick={handleClickToday}>
              <DailyDate>{moment(selectedDate).format("M/D(ddd)")}</DailyDate>
              <EmotionIconCircle emotion={emotionState.emotion}>
                {emotionImgWrap[emotionState.emotion]}
              </EmotionIconCircle>
              <EmotionTextBox>
                <EmotionTitle>
                  <EmotionFill>
                    {emotionMap[emotionState.emotion] || emotionState}
                  </EmotionFill>
                  <Span emotion={emotionState.emotion}>
                    강도 {emotionState.value}
                  </Span>
                </EmotionTitle>
                <Text>{textState}</Text>
              </EmotionTextBox>
            </BoxStyle>
          </BoxWrap>
        ))}
      </ContentArea>
      <Footer>
        <HistoryNavigation theme={theme} />
      </Footer>
    </Container>
  );
}

export default Historyweek;
