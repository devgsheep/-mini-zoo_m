import styled from "@emotion/styled";
import colors from "../../../styles/colors";

// const AlertPopUp = styled.div`
//   display: flex;
//   position: fixed;
//   z-index: 99999;
//   width: 394px;
//   height: 100%;

//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.6);
// `;
const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 16px;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  width: 100%;
`;

const TextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;

const SelectBox = styled.div`
  width: 258px;
  margin-top: 20px;
`;

const LanguageSelect = styled.select`
  width: 100%;
  height: 36px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #cbd5dd;
  background-color: white;
  font-size: 14px;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='12' viewBox='0 0 24 24' width='12' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
`;

const Button = styled.div`
  background-color: #247cff;
  width: 60px;
  padding: 10px;
  font-size: 13px;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  margin-left: auto;
`;

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
