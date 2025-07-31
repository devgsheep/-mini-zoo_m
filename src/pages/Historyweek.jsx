import styled from "@emotion/styled";
import React from "react";
import colors from "../styles/colors";
import { fonts } from "../styles/fonts";
import {
  HappyIconCircle,
  SadIconCircle,
  TiredIconCircle,
} from "../components/icons/emotionicon";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #f0f6ff;
  text-align: center;
`;

const TopContainer = styled.div`
  width: 394px;
  height: 47px;
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 13px;
`;

const SignDiv = styled.div`
  height: 100%;
  font-family: ${fonts.bold};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopNavigation = styled.div`
  padding-bottom: 13px;
`;

const NavigationBoxStyle = styled.div`
  width: 366px;
  display: inline-flex;
  padding: 4px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
`;

const NavigationThree = styled.div`
  display: flex;
  width: 100%;
`;
const Daily = styled.div`
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.gray[700]};
  cursor: pointer;
`;
const Week = styled.div`
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-weight: 400;
  // 선택시
  background-color: ${colors.blue[200]};
  border-radius: 6px;
  color: ${colors.gray[700]};
  cursor: pointer;
`;
const Month = styled.div`
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.gray[700]};
  cursor: pointer;
`;

const EmotionBoxStyle = styled.div`
  width: 366px;
  display: inline-flex;
  padding: 8px 0px 16px 8px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
`;

const Title = styled.p`
  display: flex;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: 5px;
  padding-bottom: 15px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

const ColorsGuide = styled.div`
  display: flex;
  padding-left: 10px;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  gap: 20px 50px;
  flex-wrap: wrap;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
`;

const Emotion = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  /* background: ${colors.emotion.boring.base}; */
  background-color: ${({ emotion }) => colors.emotion[emotion]?.base || "#000"};
`;

const BoxWrap = styled.div`
  padding-top: 13px;
`;

const ImgBoxStyle = styled.div`
  position: relative;
  width: 366px;
  display: inline-flex;
  padding: 15px 0px 8px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
`;

const BoxStyle = styled.div`
  position: relative;
  width: 366px;
  display: inline-flex;
  padding: 15px 0px 35px 12px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  cursor: pointer;
`;

const DailyDate = styled.div`
  position: absolute;
  color: ${colors.gray[300]};
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 9px */
  right: 0;
  top: 0;
  transform: translateX(-30%) translateY(100%);
`;

const Circle = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 11px 12px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  /* background: #fa6b6b; */
  background-color: ${({ emotion }) => colors.emotion[emotion]?.base || "#000"};
`;

const EmotionTextBox = styled.div`
  display: block;
  padding-left: 16px;
  text-align: left;
`;
const EmotionTitle = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  padding-bottom: 7px;
`;

const EmotionFill = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
`;

const Span = styled.span`
  display: flex;
  width: 31px;
  height: 14px;
  padding: 3px 5px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ emotion }) => colors.emotion[emotion]?.base || "#000"};
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 8px */
  color: #fff;
`;

const Text = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 10px */
`;

const Footer = styled.div`
  padding-top: 30px;
`;

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

function Historyweek() {
  const navigate = useNavigate();

  const handleClickToday = () => {
    navigate("/today");
  };
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
            <Title>감정 변화 차트</Title>
            <img src="/images/chart.png" alt="" />
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

export default Historyweek;
