import { Link, useNavigate } from "react-router-dom";
import {
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
import { useRecoilState } from "recoil";
import { userThemeAtom } from "../atoms/userThemeAtom";

function Historyweek() {
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
      <BoxWrap onClick={handleClickToday}>
        <BoxStyle>
          <DailyDate>7/15(화)</DailyDate>
          <HappyIconCircle emotion="happy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
            >
              <path
                d="M4.75 11C6.80875 11 8.5 9.3685 8.5 7.2745C8.5 6.7605 8.47375 6.2095 8.18875 5.353C7.90375 4.4965 7.8465 4.386 7.54525 3.857C7.4165 4.93625 6.72775 5.38625 6.55275 5.52075C6.55275 5.38075 6.13625 3.834 5.5045 2.90825C4.88425 2 4.04075 1.40425 3.54625 1C3.54625 1.7675 3.3305 2.9085 3.02125 3.49C2.71225 4.07125 2.65425 4.0925 2.268 4.525C1.88175 4.9575 1.70475 5.09125 1.38175 5.61625C1.05875 6.14125 1 6.8405 1 7.3545C1 9.4485 2.69125 11 4.75 11Z"
                fill="white"
                stroke="white"
                strokeLinejoin="round"
              />
            </svg>
          </HappyIconCircle>
          <EmotionTextBox>
            <EmotionTitle>
              <EmotionFill>기쁨</EmotionFill>
              <Span emotion="happy">강도 5</Span>
            </EmotionTitle>
            <Text>일찍 집에 갈 수 있어서 기뻐요</Text>
          </EmotionTextBox>
        </BoxStyle>
      </BoxWrap>
      <BoxWrap onClick={handleClickToday}>
        <BoxStyle>
          <DailyDate>7/16(수)</DailyDate>
          <SadIconCircle emotion="sad">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
            >
              <path
                d="M4.75 11C6.80875 11 8.5 9.3685 8.5 7.2745C8.5 6.7605 8.47375 6.2095 8.18875 5.353C7.90375 4.4965 7.8465 4.386 7.54525 3.857C7.4165 4.93625 6.72775 5.38625 6.55275 5.52075C6.55275 5.38075 6.13625 3.834 5.5045 2.90825C4.88425 2 4.04075 1.40425 3.54625 1C3.54625 1.7675 3.3305 2.9085 3.02125 3.49C2.71225 4.07125 2.65425 4.0925 2.268 4.525C1.88175 4.9575 1.70475 5.09125 1.38175 5.61625C1.05875 6.14125 1 6.8405 1 7.3545C1 9.4485 2.69125 11 4.75 11Z"
                fill="white"
                stroke="white"
                strokeLinejoin="round"
              />
            </svg>
          </SadIconCircle>
          <EmotionTextBox>
            <EmotionTitle>
              <EmotionFill>슬픔</EmotionFill>
              <Span emotion="sad">강도 3</Span>
            </EmotionTitle>
            <Text>늦게가요</Text>
          </EmotionTextBox>
        </BoxStyle>
      </BoxWrap>
      <BoxWrap onClick={handleClickToday}>
        <BoxStyle>
          <DailyDate>7/17(목)</DailyDate>
          <TiredIconCircle emotion="angry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
            >
              <path
                d="M4.75 11C6.80875 11 8.5 9.3685 8.5 7.2745C8.5 6.7605 8.47375 6.2095 8.18875 5.353C7.90375 4.4965 7.8465 4.386 7.54525 3.857C7.4165 4.93625 6.72775 5.38625 6.55275 5.52075C6.55275 5.38075 6.13625 3.834 5.5045 2.90825C4.88425 2 4.04075 1.40425 3.54625 1C3.54625 1.7675 3.3305 2.9085 3.02125 3.49C2.71225 4.07125 2.65425 4.0925 2.268 4.525C1.88175 4.9575 1.70475 5.09125 1.38175 5.61625C1.05875 6.14125 1 6.8405 1 7.3545C1 9.4485 2.69125 11 4.75 11Z"
                fill="white"
                stroke="white"
                strokeLinejoin="round"
              />
            </svg>
          </TiredIconCircle>
          <EmotionTextBox>
            <EmotionTitle>
              <EmotionFill>피곤</EmotionFill>
              <Span emotion="tired">강도 8</Span>
            </EmotionTitle>
            <Text>월화수목 너무 힘들었어요</Text>
          </EmotionTextBox>
        </BoxStyle>
      </BoxWrap>
      <BoxWrap onClick={handleClickToday}>
        <BoxStyle>
          <DailyDate>7/18(금)</DailyDate>
          <Circle emotion="angry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
            >
              <path
                d="M4.75 11C6.80875 11 8.5 9.3685 8.5 7.2745C8.5 6.7605 8.47375 6.2095 8.18875 5.353C7.90375 4.4965 7.8465 4.386 7.54525 3.857C7.4165 4.93625 6.72775 5.38625 6.55275 5.52075C6.55275 5.38075 6.13625 3.834 5.5045 2.90825C4.88425 2 4.04075 1.40425 3.54625 1C3.54625 1.7675 3.3305 2.9085 3.02125 3.49C2.71225 4.07125 2.65425 4.0925 2.268 4.525C1.88175 4.9575 1.70475 5.09125 1.38175 5.61625C1.05875 6.14125 1 6.8405 1 7.3545C1 9.4485 2.69125 11 4.75 11Z"
                fill="white"
                stroke="white"
                strokeLinejoin="round"
              />
            </svg>
          </Circle>
          <EmotionTextBox>
            <EmotionTitle>
              <EmotionFill>화남</EmotionFill>
              <Span emotion="angry">강도 8</Span>
            </EmotionTitle>
            <Text>형편없이 졌어요</Text>
          </EmotionTextBox>
        </BoxStyle>
      </BoxWrap>
      <Footer>
        <HistoryNavigation theme={theme} />
      </Footer>
    </Container>
  );
}

export default Historyweek;
