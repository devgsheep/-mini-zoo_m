import moment from "moment";
import "moment/locale/ko";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecoilState, useRecoilState } from "recoil";
import { emotionStateAtom } from "../atoms/emotionStateAtom";
import { textStateAtom } from "../atoms/textStateAtom";
import {
  AngryIcon,
  AnxiousIcon,
  BoringIcon,
  DisgusIcon,
  EmbarrassedIcon,
  HappyIcon,
  SadIcon,
  TiredIcon,
} from "../components/icons/emotionicon";
import "../css/today_calendar.css";
import {
  CalendarButton,
  CalendarWrap,
  Container,
  CustomCalendar,
  DateStyle,
  EmotionListItem,
  Header,
  HomeTop,
  HomeTopImg,
  HomeTopSpan,
  Main,
  NavigationBar,
  NavItem,
  NavItemFocus,
  SliderTitle,
  SliderWrap,
  StyledSlider,
  TextArea,
  TextWrap,
  TodayAddButton,
  TodayButtonWrap,
  TodayEmotionUl,
  TodayImg,
  TodayImgWrap,
  TodayPotoWrap,
  TodayText,
  TopImageWrapper,
} from "../emotions/today.style";
import colors from "../styles/colors";
import {
  HomeNavigation,
  TodayNavigation,
} from "../components/navigation/Navigation";
import { todayImgAtom } from "../atoms/todayImgAtom";
import { selectedDateAtom } from "../atoms/selectedDateAtom";
import { dailyListAtom } from "../atoms/dailyListAtom";
import { userThemeAtom } from "../atoms/userThemeAtom";

moment.locale("ko");

function HistoryDaily() {
  //js
  // 감정에 따른 동물 출력
  const emotionImageMap = {
    happy: "./images/happy_dog.svg",
    sad: "./images/sad_cat.svg",
    angry: "./images/angry_tiger.svg",
    boring: "./images/boring_sloth.svg",
    anxious: "./images/anxious_rabbit.svg",
    disgust: "./images/disgust_dochi.svg",
    embarrassed: "./images/embarrassed_raccoon.svg",
    tired: "./images/tired_panda.svg",
  };

  // 이미지 추가
  const [todayImg, setTodayImg] = useRecoilState(todayImgAtom);
  const [selectedImage, setSelectedImage] = useState(todayImg);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      setTodayImg(imageURL);
    }
    console.log(file);
  };

  // 네비게이터
  const navigate = useNavigate();

  const [dailyList, setDailyList] = useRecoilState(dailyListAtom);

  const handleClickDaily = () => {
    const dailyList = {
      emotion: emotionState.emotion,
      value: emotionState.value,
      text: textState,
      date: selectedDate,
      image: todayImg,
    };
    setDailyList(prev => [...prev, dailyList]);
    navigate("/history/daily");
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const weekName = ["일", "월", "화", "수", "목", "금", "토"];
  const formatShortWeekday = (locale, date) => {
    const idx = date.getDay();
    // Date 객체에서 getDay 는 날짜가 0:일, 1:월, 2:화 ... 6:토
    // console.log(idx);
    return weekName[idx];
  };
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  // 차트 선택 값
  // const [emotionIntensity, setEmotionIntensity] = useState(1);

  // const marks = {
  //   1: "1",
  //   3: "3",
  //   5: "5",
  //   7: "7",
  //   10: "10",
  // };

  // 입력값 저장 (감정버튼)
  const [emotionState, setEmotionState] = useRecoilState(emotionStateAtom);
  const [selectedEmotion, setSelectedEmotion] = useState(emotionState.emotion);

  const handleEmotionClick = emotion => {
    setEmotionState(prev => ({
      ...prev,
      emotion,
    }));
  };

  const handleSliderChange = value => {
    setEmotionState(prev => ({
      ...prev,
      value,
    }));
  };

  // 입력값 저장 (textarea)
  const [textState, setTextState] = useRecoilState(textStateAtom);

  const handleTextArea = e => {
    const txt = e.target.value;
    setTextState(txt);
  };
  const [userTheme, setUserTheme] = useRecoilState(userThemeAtom);
  const theme = userTheme;

  // jsx
  return (
    <Container theme={theme}>
      <Header>
        <div>오늘의 감정</div>
        <DateStyle>
          <div>{moment(selectedDate).format("M월 D일 dddd")}</div>
          <CalendarButton onClick={() => setShowCalendar(prev => !prev)}>
            <svg
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M1.01 10C0.722083 10 0.481875 9.91553 0.289375 9.74658C0.0968749 9.57764 0.000416667 9.36683 0 9.11415V2.1096C0 1.85728 0.0964582 1.64665 0.289375 1.47771C0.482291 1.30876 0.7225 1.22411 1.01 1.22374H2.11562V0.295654C2.11562 0.210451 2.1475 0.139875 2.21125 0.0839267C2.275 0.027978 2.35521 3.78288e-06 2.45187 3.78288e-06C2.54854 3.78288e-06 2.62896 0.027978 2.69312 0.0839267C2.75729 0.139875 2.78917 0.210451 2.78875 0.295654V1.22374H7.26V0.27481C7.26 0.196555 7.28979 0.131099 7.34937 0.0784415C7.40896 0.025784 7.48333 -0.000361894 7.5725 3.78288e-06C7.66166 0.00036946 7.73583 0.0265153 7.795 0.0784415C7.85417 0.130368 7.88417 0.195641 7.885 0.274262V1.22374H8.99062C9.27812 1.22374 9.51833 1.3084 9.71125 1.47771C9.90416 1.64701 10.0004 1.85783 10 2.11014V9.11415C10 9.36646 9.90375 9.57728 9.71125 9.74658C9.51875 9.91589 9.27833 10.0004 8.99 10H1.01ZM1.01 9.45148H8.99062C9.08646 9.45148 9.17458 9.41638 9.255 9.34617C9.33541 9.27596 9.37541 9.19843 9.375 9.1136V4.30421H0.625V9.11415C0.625 9.19825 0.665 9.27559 0.745 9.34617C0.825 9.41674 0.91375 9.45185 1.01 9.45148Z"
                fill="#A8A8A8"
              />
            </svg>
          </CalendarButton>
          {showCalendar && (
            <CalendarWrap>
              <CustomCalendar
                calendarType="gregory"
                formatShortWeekday={formatShortWeekday}
                formatDay={(locale, date) => moment(date).format("D")}
                onChange={handleDateChange}
              />
            </CalendarWrap>
          )}
        </DateStyle>
      </Header>
      <HomeTop>
        <TopImageWrapper>
          {selectedEmotion && (
            <div>
              <HomeTopImg
                src={emotionImageMap[selectedEmotion]}
                alt={`${selectedEmotion} 이미지`}
              />
            </div>
          )}
        </TopImageWrapper>
        <HomeTopSpan>지금 기분은 어떠신가요?</HomeTopSpan>
      </HomeTop>
      <Main>
        <div>
          <TodayEmotionUl>
            <EmotionListItem>
              <HappyIcon
                emotion="happy"
                isSelected={selectedEmotion === "happy"}
                onClick={() => {
                  setSelectedEmotion("happy");
                  handleEmotionClick("happy");
                }}
              />
            </EmotionListItem>
            <EmotionListItem>
              <SadIcon
                emotion="sad"
                isSelected={selectedEmotion === "sad"}
                onClick={() => {
                  setSelectedEmotion("sad");
                  handleEmotionClick("sad");
                }}
              />
            </EmotionListItem>
            <EmotionListItem>
              <AngryIcon
                emotion="angry"
                isSelected={selectedEmotion === "angry"}
                onClick={() => {
                  setSelectedEmotion("angry");
                  handleEmotionClick("angry");
                }}
              />
            </EmotionListItem>
            <EmotionListItem>
              <BoringIcon
                emotion="boring"
                isSelected={selectedEmotion === "boring"}
                onClick={() => {
                  setSelectedEmotion("boring");
                  handleEmotionClick("boring");
                }}
              />
            </EmotionListItem>
            <EmotionListItem>
              <AnxiousIcon
                emotion="anxious"
                isSelected={selectedEmotion === "anxious"}
                onClick={() => {
                  setSelectedEmotion("anxious");
                  handleEmotionClick("anxious");
                }}
              />
            </EmotionListItem>
            <EmotionListItem>
              <DisgusIcon
                emotion="disgust"
                isSelected={selectedEmotion === "disgust"}
                onClick={() => {
                  setSelectedEmotion("disgust");
                  handleEmotionClick("disgust");
                }}
              />
            </EmotionListItem>
            <EmotionListItem>
              <EmbarrassedIcon
                emotion="embarrassed"
                isSelected={selectedEmotion === "embarrassed"}
                onClick={() => {
                  setSelectedEmotion("embarrassed");
                  handleEmotionClick("embarrassed");
                }}
              />
            </EmotionListItem>
            <EmotionListItem>
              <TiredIcon
                emotion="tired"
                isSelected={selectedEmotion === "tired"}
                onClick={() => {
                  setSelectedEmotion("tired");
                  handleEmotionClick("tired");
                }}
              />
            </EmotionListItem>
          </TodayEmotionUl>
        </div>
        <SliderWrap>
          <SliderTitle
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "27px",
            }}
          >
            감정의 강도는 어느 정도인가요?
          </SliderTitle>

          <div
            className="icon-wrapper"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledSlider
              min={1}
              max={10}
              step={1}
              value={emotionState.value}
              onChange={handleSliderChange}
              style={{ width: 326, top: "15px" }}
              theme={theme}
              // marks={marks}
            />
          </div>

          {/* <div
            className="slide_wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              // marginTop: 20,
            }}
          > */}
        </SliderWrap>
        <TodayText>
          <span>더 자세히 표현하고 싶다면? (선택사항)</span>
          <TextWrap>
            <TextArea
              theme={theme}
              type="text"
              placeholder="오늘 하루는 어떠셨나요? 자유롭게 기록해보세요.."
              onChange={handleTextArea}
              value={textState}
            />
          </TextWrap>
        </TodayText>
        <TodayPotoWrap>
          <span>사진 (선택사항)</span>
          <TodayImgWrap className="today_img_wrap">
            <input
              type="file"
              accept="image/*"
              id="photo-upload"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />

            <label htmlFor="photo-upload">
              <TodayImg
                src={selectedImage || "/images/noimg_icon.svg"}
                alt="사진 추가"
                style={{ cursor: "pointer" }}
              />
            </label>
          </TodayImgWrap>
        </TodayPotoWrap>
        <TodayButtonWrap>
          <TodayAddButton
            theme={theme}
            type="primary"
            htmlType="submit"
            onClick={handleClickDaily}
          >
            기록하기
          </TodayAddButton>
        </TodayButtonWrap>
      </Main>
      <TodayNavigation theme={theme} />
    </Container>
  );
}
export default HistoryDaily;
