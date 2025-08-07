import {
  Button,
  ItemList,
  PersonalInfoContents,
  PersonalInfoPopUpBox,
  PersonalInfoPopUpWrap,
  PersonalInfoSubTitle,
  PersonalInfoText,
  PersonalInfoTitle,
} from "../../../emotions/profile/personalinfo.style";

function PersonalInfo({ onClose }) {
  return (
    // <PersonalInfoPopUp>
    <>
      <PersonalInfoPopUpBox>
        <PersonalInfoPopUpWrap>
          <PersonalInfoText>
            <PersonalInfoTitle>개인정보 처리방침</PersonalInfoTitle>
            <PersonalInfoContents>
              <div>
                <PersonalInfoSubTitle>
                  수집하는 개인정보 항목
                </PersonalInfoSubTitle>
                <ItemList>필수 항목: 이름, 이메일, 생년월일 등</ItemList>
                <ItemList>선택 항목: 감정 기록, 프로필 사진 등 </ItemList>
                <ItemList>
                  자동 수집 정보: 기기 정보, 접속 로그, 쿠키 등
                </ItemList>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  개인정보의 수집 및 이용 목적
                </PersonalInfoSubTitle>
                <ItemList>회원 가입 및 본인 확인</ItemList>
                <ItemList>감정 다이어리 기능 제공</ItemList>
                <ItemList>사용자 통계 분석 및 맞춤형 서비스 제공</ItemList>
                <ItemList>알림 전송(쿠키 알림 등)</ItemList>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  개인정보의 보유 및 이용 기간
                </PersonalInfoSubTitle>
                <ItemList>회원 탈퇴 시 즉시 파기</ItemList>
                <ItemList>감정 다이어리 기능 제공</ItemList>
                <ItemList>
                  관련 법령에 따라 일정 기간 보존할 수 있음 <br />
                  예: 전자상거래법상 계약 관련 기록 등
                </ItemList>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  개인정보의 제3자 제공
                </PersonalInfoSubTitle>
                <ItemList>원칙적으로 제공하지 않음</ItemList>
                <ItemList>
                  단, 이용자의 동의가 있거나 법률에 특별한 규정이 있는 경우 제공
                </ItemList>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  이용자의 권리와 행사 방법
                </PersonalInfoSubTitle>
                <ItemList>
                  개인정보 열람, 정정, 삭제, 처리정지 요구 가능
                </ItemList>
              </div>
              <div>
                <PersonalInfoSubTitle>
                  개인정보의 파기 절차 및 방법
                </PersonalInfoSubTitle>
                <ItemList>전자 파일: 복구 불가능한 방법으로 삭제</ItemList>
                <ItemList>종이 문서: 분쇄하거나 소각</ItemList>
              </div>
            </PersonalInfoContents>
          </PersonalInfoText>
          <Button onClick={onClose}>확인</Button>
        </PersonalInfoPopUpWrap>
      </PersonalInfoPopUpBox>
    </>
    // </PersonalInfoPopUp>
  );
}

export default PersonalInfo;
