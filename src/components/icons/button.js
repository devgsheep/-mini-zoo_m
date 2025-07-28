import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const TogleButton = styled.button`
  position: relative;
  width: 48px;
  height: 100%;
  padding: 2px;
  background-color: ${({ state }) =>
    state ? colors.blue[500] : colors.blue[200]};
  overflow: hidden;
  border-radius: 12px;
  align-items: center;
  border: none;
  gap: 10px;
  cursor: pointer;
`;
export const TogleButtonCircle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  left: ${({ state }) => (state ? "25px" : "0px")};
`;
export const DaysButton = styled.button`
  background-color: ${({ state }) => (state ? colors.blue[500] : colors.white)};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${colors.gray[200]};
  cursor: pointer;
  :hover {
    background-color: ${colors.gray[400]};
  }
`;
