import {
  AlertPopUpBox,
  Button,
  LanguageSelect,
  SelectBox,
  TextWrap,
  Title,
} from "../../../emotions/edit/language.style";

function Language({ onClose }) {
  return (
    // <AlertPopUp>
    <>
      <AlertPopUpBox>
        <Title>언어 설정</Title>
        <TextWrap>
          <SelectBox>
            <LanguageSelect defaultValue="ko">
              <option value="ko">🇰🇷 한국어</option>
              <option value="en">🇺🇸 English</option>
              <option value="jp">🇯🇵 日本語</option>
            </LanguageSelect>
          </SelectBox>
        </TextWrap>
        <Button onClick={onClose}>확인</Button>
      </AlertPopUpBox>
    </>
  );
}

export default Language;
