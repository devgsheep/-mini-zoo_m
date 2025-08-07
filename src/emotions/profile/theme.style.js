import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px 20px 10px 20px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 17px;
`;

export const ModeText = styled.p`
  font-size: 16px;
`;

export const EXText = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: ${colors.gray[500]};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 203px;
  height: 21px;
  justify-content: center;
  align-items: center;
`;

export const ButtonOK = styled.button`
  border: none;
  background: none;
  color: ${colors.blue[500]};
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  width: 101px;
`;
export const ButtonCC = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  width: 101px;
`;

export const Span = styled.span`
  width: 1px;
  height: 21px;
  background: ${colors.gray[400]};
`;
export const ThemeRadioLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
export const ThemeRadioWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`;
