import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const InfoPopupBox = styled.div`
  height: auto;
  width: 286px;
  background-color: ${colors.white};
  border-radius: 16px;
`;
export const InfoPopupWrap = styled.div`
  padding: 20px;
`;
export const InfoPopupTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin-bottom: 12px;
`;

export const VersionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const VersionInfoTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;
export const VersionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: auto;
  min-height: 66px;
  flex-shrink: 0;
`;
export const VersionInfo = styled.div`
  position: relative;
  width: 66px;
  height: 66px;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #e0e0e0; */
`;
export const VersionInfoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 105%;
  height: 105%;
  object-fit: cover;
  display: block;
`;
export const AppNameInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AppName = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
export const Version = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
export const Divider = styled.div`
  width: 256px;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;
export const AccountInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 44px;
`;
export const AccountInfoTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;
export const AccountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  height: auto;
  min-height: 45px;
  margin-left: 10px;
`;
export const AccountInfo = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: flex-end;
  align-items: center;
`;
export const AccountInfoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 5px;
`;
export const AccountInfoDate = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
export const Date = styled.div`
  color: #8f8f8f;
  font-size: 10px;
  font-weight: 400;
`;
