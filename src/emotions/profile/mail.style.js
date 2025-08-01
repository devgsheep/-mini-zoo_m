import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px 20px 17px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MailCircle = styled.div`
  position: relative;
  display: flex;
  width: 37px;
  height: 37px;
  padding: 4px;
  align-items: center;
  gap: 10px;
  border-radius: 222px;
  background: ${colors.blue[200]};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Svg = styled.svg`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-45%);
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-bottom: 30px;
`;

export const Button = styled.button`
  display: inline-flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${colors.blue[500]};
  border: none;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: 1.6px;
  line-height: normal;
  cursor: pointer;
`;
