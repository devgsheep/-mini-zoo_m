import {
  AlertPopUpBox,
  AskTextWrap,
  InputTitle,
  RadioBox,
  RadioInput,
  RadioLabel,
  RadioWrap,
  SubTitle,
  TextArea,
  TextWrap,
  Title,
} from "../../../emotions/profile/ask.style";
import {
  ButtonCC,
  ButtonContainer,
  ButtonOK,
  ButtonWrap,
  Span,
} from "../../Ui";

function Ask({ onClose }) {
  return (
    // <AlertPopUp>
    <>
      <AlertPopUpBox>
        <Title>문의하기</Title>
        <SubTitle>[문의 유형]</SubTitle>
        <RadioWrap>
          <RadioBox>
            <RadioLabel htmlFor="account">
              <RadioInput
                type="radio"
                id="account"
                value="account"
                name="ask"
                className="custom-radio"
              />
              계정 관련
            </RadioLabel>
          </RadioBox>
          <RadioBox>
            <RadioLabel htmlFor="bug">
              <RadioInput
                type="radio"
                id="bug"
                value="bug"
                name="ask"
                className="custom-radio"
              />
              버그 신고
            </RadioLabel>
          </RadioBox>
          <RadioBox>
            <RadioLabel htmlFor="feature">
              <RadioInput
                type="radio"
                id="feature"
                value="feature"
                name="ask"
                className="custom-radio"
              />
              기능 요청
            </RadioLabel>
          </RadioBox>
          <RadioBox>
            <RadioLabel htmlFor="etc">
              <RadioInput
                type="radio"
                id="etc"
                value="etc"
                name="ask"
                className="custom-radio"
              />
              기타
            </RadioLabel>
          </RadioBox>
        </RadioWrap>
        <AskTextWrap>
          <SubTitle>제목</SubTitle>
          <TextWrap>
            <InputTitle type="text" placeholder="제목을 입력하세요." />
          </TextWrap>
          <SubTitle>상세내용</SubTitle>
          <TextWrap>
            <TextArea type="text" placeholder="발생한 문제상황을 입력하세요." />
          </TextWrap>
        </AskTextWrap>
        <ButtonContainer>
          <ButtonWrap>
            <ButtonOK onClick={onClose}>확인</ButtonOK>
            <Span />
            <ButtonCC onClick={onClose}>취소</ButtonCC>
          </ButtonWrap>
        </ButtonContainer>
      </AlertPopUpBox>
    </>
    // </AlertPopUp>
  );
}

export default Ask;
