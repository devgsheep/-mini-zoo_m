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
