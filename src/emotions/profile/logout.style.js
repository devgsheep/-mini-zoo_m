import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px 16px 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconCircleLogout = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogOutImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const Title = styled.p`
  padding-top: 9px;
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const SubText = styled.p`
  font-size: 9px;
  color: ${colors.gray[500]};
  padding-top: 3px;
`;

export const ButtonWrapLogout = styled.div`
  display: flex;
  width: 286px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 44px 0 5px 0;
  button {
    cursor: pointer;
    display: flex;
    width: 123px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    text-align: center;
  }
`;

export const ButtonCancel = styled.button`
  background: #fafafa;
  color: ${colors.gray[400]};
`;

export const ButtonLogout = styled.button`
  background: #fef2f2;
  color: #ef4444;
`;
