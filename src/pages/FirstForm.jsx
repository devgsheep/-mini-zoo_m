import { useNavigate } from "react-router-dom";
import {
  BottomContainer,
  BottomSpan,
  Buttonwrap,
  Container,
  ItemImageWrap,
  ItemImg,
  ItmeMainText,
  ItmeSubText,
  ItmeTextWrap,
  LoginButton,
  Logo,
  LogoImage,
  LogoImageWrap,
  LogoWrap,
  MainTitle,
  MiddelItem,
  MiddleContainer,
  MiddleUl,
  SignButton,
  SubTitle,
  TitleWrap,
  TopContainer,
} from "../emotions/firstform.style";

// window

function FirstForm() {
  //js
  const navigate = useNavigate();

  const handleClickSign = () => {
    navigate("/sign");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };

  //jsx
  return (
    <Container>
      <TopContainer>
        <LogoImageWrap>
          <LogoImage src="./images/logo.svg" alt="로고이미지" />
        </LogoImageWrap>
        <LogoWrap>
          <Logo src="./images/logotxt.svg" alt="로고" />
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
              <ItemImg src="./images/Untitled-1.png" alt="강아지배경하늘" />
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
          <SignButton onClick={handleClickSign}>
            새로운 여정을 시작하세요
          </SignButton>
          <LoginButton onClick={handleClickLogin}>
            이미 계정이 있습니다
          </LoginButton>
        </Buttonwrap>
        <BottomSpan>ZOO:M으로 감정을 탐험하고 키워보세요</BottomSpan>
      </BottomContainer>
    </Container>
  );
}

export default FirstForm;
