import styled from "@emotion/styled";
import colors from "../../../styles/colors";
import {
  ButtonCC,
  ButtonContainer,
  ButtonOK,
  ButtonWrap,
  CustomRadio,
  Input,
  Span,
} from "../../Ui";

const AlertPopUp = styled.div`
  display: flex;
  position: fixed;
  z-index: 99999;
  width: 394px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;
const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px 20px 10px 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 13px;
  font-weight: 700;
  padding-top: 9px;
`;

const RadioFont = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const RadioWrapperAsk = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding-top: 13px;
  position: relative;
`;

const Text = styled.p`
  font-size: 16px;
  padding-top: 13px;
`;

const TextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
`;
const TextArea = styled.textarea`
  font-family: "Pretendard";
  font-weight: 400;
  display: flex;
  width: 245px;
  height: 69px;
  border-radius: 10px;
  border: 1px solid #cbd5dd;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding: 8px 10px;
  font-size: 10px;
  color: ${colors.gray[800]};
  resize: none;
  margin-bottom: 10px;
  &::placeholder {
    font-size: 10px;
    color: ${colors.gray[300]};
    line-height: 1.5;
  }
`;

const InputTitle = styled.input`
  display: flex;
  width: 245px;
  height: 30px;
  align-items: flex-start;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #cbd5dd;
  background: #fff;
  font-size: 10px;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  &::placeholder {
    font-size: 10px;
    color: ${colors.gray[300]};
  }
`;

function Ask() {
  return (
    <AlertPopUp>
      <AlertPopUpBox>
        <Title>문의하기</Title>
        <SubTitle>[문의 유형]</SubTitle>
        <RadioFont>
          <RadioWrapperAsk>
            <Input type={"radio"} />
            <CustomRadio />
          </RadioWrapperAsk>
          <Text>계정 관련</Text>
        </RadioFont>
        <RadioFont>
          <RadioWrapperAsk>
            <Input type={"radio"} />
            <CustomRadio />
          </RadioWrapperAsk>
          <Text>버그 신고</Text>
        </RadioFont>
        <RadioFont>
          <RadioWrapperAsk>
            <Input type={"radio"} />
            <CustomRadio />
          </RadioWrapperAsk>
          <Text>기능 요청</Text>
        </RadioFont>
        <RadioFont>
          <RadioWrapperAsk>
            <Input type={"radio"} />
            <CustomRadio />
          </RadioWrapperAsk>
          <Text>기타</Text>
        </RadioFont>
        <SubTitle>제목</SubTitle>
        <TextWrap>
          <InputTitle type="text" placeholder="제목을 입력하세요." />
        </TextWrap>
        <SubTitle>상세내용</SubTitle>
        <TextWrap>
          <TextArea type="text" placeholder="발생한 문제상황을 입력하세요." />
        </TextWrap>
        <ButtonContainer>
          <ButtonWrap>
            <ButtonOK>확인</ButtonOK>
            <Span />
            <ButtonCC>취소</ButtonCC>
          </ButtonWrap>
        </ButtonContainer>
      </AlertPopUpBox>
    </AlertPopUp>
  );
}

export default Ask;
