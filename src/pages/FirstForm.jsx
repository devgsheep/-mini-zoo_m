import styled from "@emotion/styled";
import colors from "../styles/colors";

// window
const Container = styled.div`
  width: 394px;
  background-color: aliceblue;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const LogoImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 66px;
  width: 136px;
  height: 136px;
  margin-bottom: 9px;
`;
const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const LogoWrap = styled.div`
  width: 131px;
  height: 37px;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
const TitleWrap = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const MainTitle = styled.span`
  text-align: center;
  color: ${colors.gray[700]};
  font-size: 16px;
`;
const SubTitle = styled.span`
  text-align: center;
  color: ${colors.gray[700]};
  font-size: 16px;
`;
const MiddleContainer = styled.div`
  padding-top: 26px;
  padding-bottom: 39px;
`;
const MiddleUl = styled.ul`
  width: 349px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MiddelItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 33px;
  padding: 10px 20px 10px 10px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid ${colors.blue[200]};
`;
const ItemImageWrap = styled.div`
  margin-left: 10px;
  width: 50px;
  height: 50px;
  overflow: hidden;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
`;
const ItmeTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.gray[800]};
  line-height: 25px;
`;
const ItmeMainText = styled.span`
  font-weight: 600;
`;
const ItmeSubText = styled.span`
  font-weight: 400;
`;
const BottomContainer = styled.div`
  position: relative;
`;
const Buttonwrap = styled.div`
  width: 349px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 21px;
`;
const SignButton = styled.button`
  width: 100%;
  background-color: ${colors.blue[300]};
  color: ${colors.gray[100]};
  border-radius: 8px;
  border: none;
  padding: 20px 80px;
  cursor: pointer;
`;
const LoginButton = styled.button`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid ${colors.blue[200]};
  padding: 20px 80px;
  color: ${colors.gray[800]};
  cursor: pointer;
`;
const BottomSpan = styled.span`
  display: flex;
  justify-content: center;
  color: ${colors.gray[600]};
  font-size: 13px;
  line-height: 25px;
  margin-bottom: 27px;
`;
function FirstForm() {
  //js

  //jsx
  return (
    <Container>
      <TopContainer>
        <LogoImageWrap>
          <LogoImage src="./images/logoimage.png" alt="로고이미지" />
        </LogoImageWrap>
        <LogoWrap>
          <Logo src="./images/logo.png" alt="로고" />
        </LogoWrap>
        <TitleWrap>
          <MainTitle>감정의 여정을 시작하세요</MainTitle>
          <SubTitle>동물 친구들과 함께</SubTitle>
        </TitleWrap>
      </TopContainer>
      <MiddleContainer>
        <MiddleUl>
          <MiddelItem>
            <ItemImageWrap>
              <ItemImg src="./images/dogsky.png" alt="강아지배경하늘" />
            </ItemImageWrap>
            <ItmeTextWrap>
              <ItmeMainText>감정 기록</ItmeMainText>
              <ItmeSubText>동물 친구들과 함께하는 일상의 감정</ItmeSubText>
            </ItmeTextWrap>
          </MiddelItem>
          <MiddelItem>
            <ItemImageWrap>
              <ItemImg src="./images/dochisky.png" alt="강아지배경하늘" />
            </ItemImageWrap>
            <ItmeTextWrap>
              <ItmeMainText>히스토리</ItmeMainText>
              <ItmeSubText>감정 변화를 한눈에 확인하세요</ItmeSubText>
            </ItmeTextWrap>
          </MiddelItem>
          <MiddelItem>
            <ItemImageWrap>
              <ItemImg src="./images/catsky.png" alt="강아지배경하늘" />
            </ItemImageWrap>
            <ItmeTextWrap>
              <ItmeMainText>감정 반영</ItmeMainText>
              <ItmeSubText>당신만의 독특한 감정 패턴을 발견하세요</ItmeSubText>
            </ItmeTextWrap>
          </MiddelItem>
        </MiddleUl>
      </MiddleContainer>
      <BottomContainer>
        <Buttonwrap>
          <SignButton>새로운 여정을 시작하세요</SignButton>
          <LoginButton>이미 계정이 있습니다</LoginButton>
        </Buttonwrap>
        <BottomSpan>ZOO:M으로 감정을 탐험하고 키워보세요</BottomSpan>
      </BottomContainer>
    </Container>
  );
}

export default FirstForm;
