import React from "react";
// window

function FirstForm() {
    //js

  //jsx
  return (
    <div>
      <h1>로그인</h1>
      <div>
        <form>
          <input
            type="email"
            value={userEmail}
            placeholder="등록된 이메일을 입력하세요"
          />
          <input
            type="password"
            value={userPassword}
            placeholder="비밀번호를 입력하세요"
          />
          <input type="email" placeholder="등록된 이메일을 입력하세요" />
          <input type="password" placeholder="비밀번호를 입력하세요" />
          {/* 체크박스 */}
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
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
