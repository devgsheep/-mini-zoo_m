import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const PersonalInfoPopUpBox = styled.div`
  height: auto;
  width: 286px;
  background-color: ${colors.white};
  border-radius: 16px;
`;
export const PersonalInfoPopUpWrap = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 26px;
  padding: 17px;
`;

export const PersonalInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PersonalInfoTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;

export const PersonalInfoContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const PersonalInfoSubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #000;
  ::before {
    content: "•";
    margin-right: 3px;
  }
`;

export const ItemList = styled.div`
  font-size: 11px;
  font-weight: 400;
  padding-left: 8px;
  color: #5c5c5c;
  padding-left: 20px;
  text-indent: -15px;
  ::before {
    content: "•";
    margin-right: 8px;
  }
`;

export const Button = styled.div`
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
