import styled from "@emotion/styled";
import React from "react";
import colors from "../../../styles/colors";

const PersonalInfoPopUp = styled.div`
  display: flex;
  position: fixed;
  z-index: 99999;
  width: 394px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  /* display: none; */
`;
const PersonalInfoPopUpBox = styled.div`
  height: 541px;
  width: 286px;
  background-color: ${colors.white};
  border-radius: 16px;
`;
const PersonalInfoPopUpWrap = styled.div`
  display: flex;
  width: 252px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 26px;
  padding: 17px 17px 83px 17px;
`;

const PersonalInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PersonalInfoTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;

const PersonalInfoContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const PersonalInfoSubTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
`;

const SubTitleContents = styled.div`
  color: #5c5c5c;
  list-style-type: disc;
  padding-left: 4px;
  line-height: 1.3;
  color: #5c5c5c;
`;

function PersonalInfo() {
  return (
    <PersonalInfoPopUp>
      <PersonalInfoPopUpBox>
        <PersonalInfoPopUpWrap>
          <PersonalInfoText>
            <div>
              <PersonalInfoTitle>개인정보 처리방침</PersonalInfoTitle>
            </div>
            <PersonalInfoContents>
              <div>
                <PersonalInfoSubTitle>
                  수집하는 개인정보 항목
                </PersonalInfoSubTitle>
                <SubTitleContents as="ul">
                  <li>필수 항목: 이름, 이메일, 생년월일 등</li>
                  <li>선택 항목: 감정 기록, 프로필 사진 등 </li>
                  <li>자동 수집 정보: 기기 정보, 접속 로그, 쿠키 등</li>
                </SubTitleContents>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  개인정보의 수집 및 이용 목적
                </PersonalInfoSubTitle>
                <SubTitleContents as="ul">
                  <li>회원 가입 및 본인 확인</li>
                  <li>감정 다이어리 기능 제공</li>
                  <li>사용자 통계 분석 및 맞춤형 서비스 제공</li>
                  <li>알림 전송(쿠키 알림 등)</li>
                </SubTitleContents>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  개인정보의 보유 및 이용 기간
                </PersonalInfoSubTitle>
                <SubTitleContents as="ul">
                  <li>회원 탈퇴 시 즉시 파기</li>
                  <li>감정 다이어리 기능 제공</li>
                  <li>
                    관련 법령에 따라 일정 기간 보존할 수 있음 예: 전자상거래법상
                    계약 관련 기록 등
                  </li>
                </SubTitleContents>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  개인정보의 제3자 제공
                </PersonalInfoSubTitle>
                <SubTitleContents as="ul">
                  <li>원칙적으로 제공하지 않음</li>
                  <li>
                    단, 이용자의 동의가 있거나 법률에 특별한 규정이 있는 경우
                    제공
                  </li>
                </SubTitleContents>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  이용자의 권리와 행사 방법
                </PersonalInfoSubTitle>
                <SubTitleContents as="ul">
                  <li>개인정보 열람, 정정, 삭제, 처리정지 요구 가능</li>
                </SubTitleContents>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  개인정보의 파기 절차 및 방법
                </PersonalInfoSubTitle>
                <SubTitleContents as="ul">
                  <li>전자 파일: 복구 불가능한 방법으로 삭제</li>
                  <li>종이 문서: 분쇄하거나 소각</li>
                </SubTitleContents>
              </div>
            </PersonalInfoContents>
          </PersonalInfoText>
          <button>확인</button>
        </PersonalInfoPopUpWrap>
      </PersonalInfoPopUpBox>
    </PersonalInfoPopUp>
  );
}

export default PersonalInfo;
