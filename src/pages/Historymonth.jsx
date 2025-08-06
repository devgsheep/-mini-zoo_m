import { ResponsiveBar } from "@nivo/bar";
import moment from "moment";
import { Link } from "react-router-dom";
import { barMonthData } from "../apis/bar_month_data";
import "../css/calendar.css";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import {
  BoxWrap,
  ChartTitle,
  ChartWrap,
  ColorsGuide,
  Container,
  ContentArea,
  Daily,
  Emotion,
  EmotionBoxStyle,
  Footer,
  ImgBoxStyle,
  Month,
  NavigationBar,
  NavigationBoxStyle,
  NavigationThree,
  NavItem,
  NavItemFocus,
  NumberWrap,
  SignDiv,
  StyledCalendar,
  Title,
  TopContainer,
  TopNavigation,
  Week,
  Wrap,
} from "../emotions/historymonth.style";
import colors from "../styles/colors";
import { HistoryNavigation } from "../components/navigation/Navigation";

function Historymonth() {
  // js

  const historyWrap = {
    width: "338px",
    margin: "0 auto",
    background: "yellowgreen",
  };
  // 1. 날짜를 US 방식으로 변경
  const weekName = ["일", "월", "화", "수", "목", "금", "토"];
  const formatShortWeekday = (locale, date) => {
    const idx = date.getDay();
    moment.locale("en");
    // Date 객체에서 getDay 는 날짜가 0:일, 1:월, 2:화 ... 6:토
    return weekName[idx];
  };

  // 차트
  const emotionCounts = {};
  barMonthData.forEach(({ emotion }) => {
    emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1;
  });

  const total = Object.values(emotionCounts).reduce((a, b) => a + b, 0);
  // 최대값
  const maxCount = Math.max(...Object.values(emotionCounts));
  const top3 = Object.entries(emotionCounts)
    .sort((a, b) => b[1] - a[1]) // 많이 등장한 순으로 정렬
    .slice(0, 3) // 상위 3개만 가져오기
    .reverse() // 정렬 반대로, 내림차순
    .map(([emotion, count]) => {
      const percentage = Math.round((count / total) * 100);
      return {
        emotion,
        // 퍼센트를 실제 값으로 사용,
        point: percentage,
        remaining: 100 - percentage,
        // 실제 횟수
        actualCount: count,
        percentage: percentage,
      };
    });

  // 캘린더 데이터 임시
  const emotionMap = barMonthData.reduce((map, entry) => {
    const { date, emotion } = entry;
    const emotionTranslation = {
      기쁨: "happy",
      슬픔: "sad",
      화남: "angry",
      지루: "boring",
      불안: "anxious",
      까칠: "disgust",
      당황: "embarrassed",
      피곤: "tired",
    };

    const engEmotion = emotionTranslation[emotion];
    if (engEmotion) {
      map[date] = engEmotion;
    }
    return map;
  }, {});

  // jsx
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
            <NumberWrap>
              <PiNumberCircleOneFill size={30} color={"gold"} />
              <PiNumberCircleTwoFill size={30} color={"gray"} />
              <PiNumberCircleThreeFill size={30} color={"orange"} />
            </NumberWrap>
            <ChartTitle>자주 느낀 감정 TOP3</ChartTitle>
            <div
              style={{
                width: "330px",
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex_end",
              }}
            >
              <ChartWrap>
                <ResponsiveBar
                  data={top3}
                  keys={["point", "remaining"]}
                  indexBy="emotion"
                  layout="horizontal"
                  padding={0.8}
                  borderRadius={0}
                  legends={[]}
                  enableLabel={false}
                  maxValue={100}
                  // true시에 바 중앙에 회, % 나타남
                  // label={({ data }) => `${data.point}회  ${data.percentage}%`}
                  // % 라벨 이동
                  layers={[
                    "grid",
                    "axes",
                    // 커스텀 감정 이름 레이어 (북동쪽 위치, 왼쪽 정렬)
                    ({ bars }) => (
                      <>
                        {bars
                          .filter(bar => bar.key.includes("remaining"))
                          .map(bar => (
                            <text
                              key={`emotion-${bar.key}`}
                              x={0} // 고정된 x 위치 (차트 왼쪽 마진과 일치)
                              y={bar.y + bar.height / 2 - 10} // 위쪽으로
                              textAnchor="start" // 왼쪽 정렬
                              dominantBaseline="middle"
                              fill="#999"
                              fontSize="10"
                              fontWeight="400"
                            >
                              {bar.data.indexValue}
                            </text>
                          ))}
                      </>
                    ),
                    // 커스텀 바 레이어
                    ({ bars }) => (
                      <>
                        {bars.map(bar => {
                          const isPoint = bar.key.includes("point");
                          const isRemaining = bar.key.includes("remaining");
                          const radius = 5;
                          // 각 바의 좌표와 크기
                          const { x, y, width, height, color } = bar;
                          let path;
                          if (isPoint) {
                            // 왼쪽 모서리만 둥글게 (시작 부분)
                            path = `
              M ${x + radius} ${y}
              L ${x + width} ${y}
              L ${x + width} ${y + height}
              L ${x + radius} ${y + height}
              Q ${x} ${y + height} ${x} ${y + height - radius}
              L ${x} ${y + radius}
              Q ${x} ${y} ${x + radius} ${y}
              Z
            `;
                          } else if (isRemaining) {
                            // 오른쪽 모서리만 둥글게 (끝 부분)
                            path = `
              M ${x} ${y}
              L ${x + width - radius} ${y}
              Q ${x + width} ${y} ${x + width} ${y + radius}
              L ${x + width} ${y + height - radius}
              Q ${x + width} ${y + height} ${x + width - radius} ${y + height}
              L ${x} ${y + height}
              Z
            `;
                          } else {
                            // 기본 사각형 (radius 없음)
                            path = `
              M ${x} ${y}
              L ${x + width} ${y}
              L ${x + width} ${y + height}
              L ${x} ${y + height}
              Z
            `;
                          }
                          return <path key={bar.key} d={path} fill={color} />;
                        })}
                      </>
                    ),
                    "markers",
                    "legends",
                    "annotations",
                    ({ bars }) => (
                      <>
                        {bars
                          .filter(bar => bar.key.includes("remaining"))
                          .map(bar => (
                            <g key={bar.key}>
                              {/* 실제 횟수 표시 */}
                              <text
                                x={bar.x + bar.width - 3}
                                y={bar.y + bar.height / 2 - 10}
                                textAnchor="end"
                                dominantBaseline="middle"
                                fill="#999"
                                fontSize="10"
                                fontWeight="500"
                              >
                                {bar.data.data.actualCount}회
                              </text>
                              {/* 퍼센트 표시 */}
                              <text
                                key={bar.key}
                                x={bar.x + bar.width + 7}
                                y={bar.y + bar.height / 2 - 5}
                                textAnchor="start"
                                dominantBaseline="middle"
                                fill="#999"
                                fontSize="11"
                              >
                                {bar.data.data.percentage}%
                              </text>
                            </g>
                          ))}
                      </>
                    ),
                  ]}
                  labelSkipWidth={0}
                  labelSkipHeight={0}
                  labelTextColor="#555"
                  // 감정에 따른 색 반환
                  colors={({ id, data }) => {
                    if (id === "remaining") return "#E5E5E5"; // 회색 배경
                    const emotionColorMap = {
                      기쁨: `${colors.emotion.happy.base}`,
                      슬픔: `${colors.emotion.sad.base}`,
                      화남: `${colors.emotion.angry.base}`,
                      지루: `${colors.emotion.boring.base}`,
                      불안: `${colors.emotion.anxious.base}`,
                      까칠: `${colors.emotion.disgust.base}`,
                      당황: `${colors.emotion.embarrassed.base}`,
                      피곤: `${colors.emotion.tired.base}`,
                    };
                    return emotionColorMap[data.emotion];
                  }}
                  axisBottom={null}
                  axisLeft={null}
                  margin={{ top: -20, right: 40, bottom: -30, left: 40 }}
                />
              </ChartWrap>
            </div>
          </ImgBoxStyle>
        </BoxWrap>
        <BoxWrap>
          <ImgBoxStyle
            style={{
              height: "320px",
            }}
          >
            <div style={historyWrap}>
              <StyledCalendar
                calendarType="gregory"
                formatShortWeekday={formatShortWeekday}
                formatDay={(locale, date) => moment(date).format("D")}
                tileContent={({ date, view }) => {
                  if (view === "month") {
                    const formattedDate = moment(date).format("YYYY-MM-DD");
                    const emotion = emotionMap[formattedDate];

                    const bgColor = emotion
                      ? colors.emotion[emotion]?.base
                      : undefined;

                    return bgColor ? (
                      <div
                        style={{
                          backgroundColor: bgColor,
                          borderRadius: "8px",
                          width: "90%",
                          height: "90%",
                          position: "absolute",
                          top: "2px",
                          left: "2px",
                          zIndex: 0,
                          opacity: 0.35,
                        }}
                      ></div>
                    ) : null;
                  }
                }}
                tileClassName={({ date, view }) => {
                  if (view === "month") {
                    const formattedDate = moment(date).format("YYYY-MM-DD");
                    const emotion = emotionMap[formattedDate];
                    return emotion ? `emotion-tile emotion-${emotion}` : null;
                  }
                  return null;
                }}
              />
            </div>
          </ImgBoxStyle>
        </BoxWrap>
      </ContentArea>
      <Footer>
        <HistoryNavigation />
      </Footer>
    </Container>
  );
}

export default Historymonth;
