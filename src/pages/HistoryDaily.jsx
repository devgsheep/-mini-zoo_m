import styled from "@emotion/styled";
import React from "react";
import { fonts } from "../styles/fonts";
import colors from "../styles/colors";

const Container = styled.div`
  height: 852px;
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

const SignWrap = styled.div`
  width: 18px;
  height: 18px;
  left: 10px;
  top: 35%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
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
  font-weight: 400;
  // 선택시
  background-color: ${colors.blue[200]};
  border-radius: 6px;
  color: ${colors.gray[700]};
`;
const Week = styled.div`
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.gray[700]};
`;
const Month = styled.div`
  flex: 1;
  padding: 7px 49px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: ${colors.gray[700]};
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

const ColorsGuideText = styled.p`
  display: flex;
  align-items: flex-start;
  padding-top: 5px;
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

const Happy = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${colors.emotion.happy.base};
`;

const Sad = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${colors.emotion.sad.base};
`;

const Angry = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${colors.emotion.angry.base};
`;

const Boring = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${colors.emotion.boring.base};
`;

const Anxious = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${colors.emotion.anxious.base};
`;

const Disgust = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${colors.emotion.disgust.base};
`;

const Embarrassed = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${colors.emotion.embarrassed.base};
`;

const Tired = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${colors.emotion.tired.base};
`;

const BoxWrap = styled.div`
  padding-top: 13px;
`;

const BoxStyle = styled.div`
  position: relative;
  width: 366px;
  display: inline-flex;
  padding: 15px 0px 36px 12px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
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

const AngryCircle = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 11px 12px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fa6b6b;
`;

const EmotionTextBox = styled.div`
  display: block;
  padding-left: 16px;
  align-items: center;
  justify-content: center;
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

const SpanAngry = styled.span`
  display: flex;
  width: 31px;
  height: 14px;
  padding: 3px 5px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fa6b6b;
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

function HistoryDaily() {
  return (
    <Container>
      <TopContainer>
        <SignWrap>
          <div>
            <Image src="/images/majesticons_arrow-left.svg" alt="뒤로가기" />
          </div>
        </SignWrap>
        <SignDiv>히스토리</SignDiv>
      </TopContainer>
      <TopNavigation>
        <NavigationBoxStyle>
          <NavigationThree>
            <Daily>일간</Daily>
            <Week>주간</Week>
            <Month>월간</Month>
          </NavigationThree>
        </NavigationBoxStyle>
      </TopNavigation>
      <div>
        <EmotionBoxStyle>
          <div>
            <ColorsGuideText>감정 색상 가이드</ColorsGuideText>
            <ColorsGuide>
              <Wrap>
                <Happy></Happy>
                기쁨
              </Wrap>
              <Wrap>
                <Sad></Sad>
                슬픔
              </Wrap>
              <Wrap>
                <Angry></Angry>
                화남
              </Wrap>
              <Wrap>
                <Boring></Boring>
                지루
              </Wrap>
              <Wrap>
                <Anxious></Anxious>
                불안
              </Wrap>
              <Wrap>
                <Disgust></Disgust>
                까칠
              </Wrap>
              <Wrap>
                <Embarrassed></Embarrassed>
                당황
              </Wrap>
              <Wrap>
                <Tired></Tired>
                피곤
              </Wrap>
            </ColorsGuide>
          </div>
        </EmotionBoxStyle>
      </div>
      <BoxWrap>
        <BoxStyle>
          <DailyDate>7/18(금)</DailyDate>
          <AngryCircle>
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
          </AngryCircle>
          <EmotionTextBox>
            <EmotionTitle>
              <EmotionFill>화남</EmotionFill>
              <SpanAngry>강도 8</SpanAngry>
            </EmotionTitle>
            <Text>형편없이 졌어요</Text>
          </EmotionTextBox>
        </BoxStyle>
      </BoxWrap>
    </Container>
  );
}

export default HistoryDaily;
