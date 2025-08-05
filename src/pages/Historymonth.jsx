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
      <Footer>
        <NavigationBar>
          <NavItem to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 19H9.692V13.923C9.692 13.6943 9.76967 13.5027 9.925 13.348C10.0797 13.1927 10.2713 13.115 10.5 13.115H13.5C13.7287 13.115 13.9207 13.1927 14.076 13.348C14.2307 13.5027 14.308 13.6943 14.308 13.923V19H18V10.308C18 10.2053 17.9777 10.112 17.933 10.028C17.8883 9.94399 17.8273 9.87066 17.75 9.80799L12.366 5.74999C12.2633 5.66066 12.1413 5.61599 12 5.61599C11.8587 5.61599 11.737 5.66066 11.635 5.74999L6.25 9.80799C6.17333 9.87199 6.11233 9.94532 6.067 10.028C6.02167 10.1107 5.99933 10.204 6 10.308V19ZM5 19V10.308C5 10.052 5.05733 9.80966 5.172 9.58099C5.28667 9.35232 5.44467 9.16399 5.646 9.01599L11.031 4.93799C11.313 4.72266 11.635 4.61499 11.997 4.61499C12.359 4.61499 12.683 4.72266 12.969 4.93799L18.354 9.01499C18.556 9.16299 18.714 9.35166 18.828 9.58099C18.9427 9.80966 19 10.052 19 10.308V19C19 19.268 18.9003 19.5017 18.701 19.701C18.5017 19.9003 18.268 20 18 20H14.116C13.8867 20 13.6947 19.9227 13.54 19.768C13.3853 19.6127 13.308 19.4207 13.308 19.192V14.116H10.692V19.192C10.692 19.4213 10.6147 19.6133 10.46 19.768C10.3053 19.9227 10.1137 20 9.885 20H6C5.732 20 5.49833 19.9003 5.299 19.701C5.09967 19.5017 5 19.268 5 19Z"
                fill="#A8A8A8"
              />
            </svg>
            <span>홈</span>
          </NavItem>
          <NavItem to="/today">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M11.75 16.5H12.75V12.5H16.75V11.5H12.75V7.5H11.75V11.5H7.75V12.5H11.75V16.5ZM12.253 21C11.0083 21 9.83833 20.764 8.743 20.292C7.64767 19.8193 6.69467 19.178 5.884 18.368C5.07333 17.558 4.43167 16.606 3.959 15.512C3.48633 14.418 3.25 13.2483 3.25 12.003C3.25 10.7577 3.48633 9.58767 3.959 8.493C4.431 7.39767 5.07133 6.44467 5.88 5.634C6.68867 4.82333 7.641 4.18167 8.737 3.709C9.833 3.23633 11.003 3 12.247 3C13.491 3 14.661 3.23633 15.757 3.709C16.8523 4.181 17.8053 4.82167 18.616 5.631C19.4267 6.44033 20.0683 7.39267 20.541 8.488C21.0137 9.58333 21.25 10.753 21.25 11.997C21.25 13.241 21.014 14.411 20.542 15.507C20.07 16.603 19.4287 17.556 18.618 18.366C17.8073 19.176 16.8553 19.8177 15.762 20.291C14.6687 20.7643 13.499 21.0007 12.253 21ZM12.25 20C14.4833 20 16.375 19.225 17.925 17.675C19.475 16.125 20.25 14.2333 20.25 12C20.25 9.76667 19.475 7.875 17.925 6.325C16.375 4.775 14.4833 4 12.25 4C10.0167 4 8.125 4.775 6.575 6.325C5.025 7.875 4.25 9.76667 4.25 12C4.25 14.2333 5.025 16.125 6.575 17.675C8.125 19.225 10.0167 20 12.25 20Z"
                fill="#A8A8A8"
              />
            </svg>
            <span>추가</span>
          </NavItem>
          <NavItemFocus>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.616 21C5.15533 21 4.771 20.846 4.463 20.538C4.155 20.23 4.00067 19.8457 4 19.385V6.61505C4 6.15505 4.15433 5.77105 4.463 5.46305C4.77167 5.15505 5.156 5.00072 5.616 5.00005H7.385V3.30805C7.385 3.15272 7.436 3.02405 7.538 2.92205C7.64 2.82005 7.76833 2.76905 7.923 2.76905C8.07767 2.76905 8.20633 2.82005 8.309 2.92205C8.41167 3.02405 8.46267 3.15272 8.462 3.30805V5.00005H15.616V3.27005C15.616 3.12738 15.6637 3.00805 15.759 2.91205C15.8543 2.81605 15.9733 2.76838 16.116 2.76905C16.2587 2.76972 16.3773 2.81738 16.472 2.91205C16.5667 3.00672 16.6147 3.12572 16.616 3.26905V5.00005H18.385C18.845 5.00005 19.2293 5.15438 19.538 5.46305C19.8467 5.77172 20.0007 6.15605 20 6.61605V19.385C20 19.845 19.846 20.2294 19.538 20.538C19.23 20.8467 18.8453 21.0007 18.384 21H5.616ZM5.616 20H18.385C18.5383 20 18.6793 19.9361 18.808 19.8081C18.9367 19.6801 19.0007 19.5387 19 19.3841V10.616H5V19.385C5 19.5384 5.064 19.6794 5.192 19.8081C5.32 19.9367 5.461 20.0007 5.615 20"
                fill="#579AFF"
              />
            </svg>
            <span>히스토리</span>
          </NavItemFocus>
          <NavItem to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M13.5833 12.3339C12.6892 12.3339 11.924 12.0154 11.2877 11.3784C10.6515 10.7414 10.3333 9.97657 10.3333 9.08391C10.3333 8.19124 10.6515 7.42569 11.2877 6.78724C11.924 6.1488 12.6892 5.83138 13.5833 5.83499C14.4774 5.8386 15.2426 6.15638 15.8789 6.78832C16.5152 7.42027 16.8333 8.18582 16.8333 9.08499C16.8333 9.98416 16.5152 10.749 15.8789 11.3795C15.2426 12.01 14.4774 12.3274 13.5833 12.3339ZM6 20.1675V18.3843C6 17.9264 6.13253 17.5054 6.39758 17.1212C6.66264 16.7369 7.01075 16.4372 7.44192 16.222C8.41403 15.7641 9.41431 15.4044 10.4427 15.143C11.4712 14.8815 12.5195 14.7512 13.5877 14.7519C14.6558 14.7526 15.7027 14.883 16.7282 15.143C17.7538 15.4044 18.7526 15.7641 19.7247 16.222C20.1559 16.4372 20.504 16.7369 20.7691 17.1212C21.0341 17.5054 21.1667 17.9261 21.1667 18.3832V20.1664L6 20.1675ZM7.08333 19.0842H20.0833V18.3843C20.0833 18.1164 20.0003 17.8806 19.8342 17.6769C19.6666 17.4725 19.4579 17.3042 19.208 17.1721C18.3291 16.7308 17.418 16.3975 16.4747 16.1722C15.5322 15.9475 14.5684 15.8352 13.5833 15.8352C12.5982 15.8352 11.6341 15.9475 10.6908 16.1722C9.74761 16.3968 8.83689 16.7301 7.95867 17.1721C7.70878 17.3042 7.50042 17.4725 7.33358 17.6769C7.16675 17.8806 7.08333 18.1164 7.08333 18.3843V19.0842ZM13.5833 11.2517C14.1792 11.2517 14.6894 11.0393 15.1141 10.6147C15.5387 10.19 15.7507 9.67938 15.75 9.08282C15.7493 8.48627 15.5373 7.97638 15.1141 7.55316C14.6909 7.12994 14.1806 6.9176 13.5833 6.91616C12.9861 6.91471 12.4762 7.12705 12.0537 7.55316C11.6312 7.97927 11.4188 8.48916 11.4167 9.08282C11.4145 9.67649 11.6268 10.1867 12.0537 10.6136C12.4805 11.0404 12.9904 11.2524 13.5833 11.2495"
                fill="#A8A8A8"
              />
            </svg>
            <span>프로필</span>
          </NavItem>
        </NavigationBar>
      </Footer>
    </Container>
  );
}

export default Historymonth;
