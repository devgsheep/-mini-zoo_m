import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 13px;
  font-weight: 700;
  padding-top: 9px;
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
`;
export const TextArea = styled.textarea`
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

export const InputTitle = styled.input`
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
export const AskTextWrap = styled.div``;

export const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const RadioBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.black};
`;
export const RadioLabel = styled.label`
  display: flex;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;
`;
export const RadioInput = styled.input`
  cursor: pointer;
`;
