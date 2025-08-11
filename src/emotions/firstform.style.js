import styled from "@emotion/styled";
import colors from "../styles/colors";

export const Container = styled.div`
  background-color: aliceblue;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TopContainer = styled.div`
  width: 394px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 66px;
`;
export const LogoImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 136px;
  margin-bottom: 9px;
`;
export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const LogoWrap = styled.div`
  width: 131px;
  height: 37px;
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
export const TitleWrap = styled.div`
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const MainTitle = styled.span`
  text-align: center;
  color: ${colors.gray[700]};
  font-size: 16px;
`;
export const SubTitle = styled.span`
  text-align: center;
  color: ${colors.gray[700]};
  font-size: 16px;
`;
export const MiddleContainer = styled.div`
  padding-top: 26px;
  padding-bottom: 39px;
`;
export const MiddleUl = styled.ul`
  width: 349px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const MiddelItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 33px;
  padding: 10px 20px 10px 10px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid ${colors.blue[200]};
`;
export const ItemImageWrap = styled.div`
  margin-left: 10px;
  width: 50px;
  height: 50px;
  overflow: hidden;
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const ItmeTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.gray[800]};
  line-height: 25px;
`;
export const ItmeMainText = styled.span`
  font-weight: 600;
`;
export const ItmeSubText = styled.span`
  font-weight: 400;
`;
export const BottomContainer = styled.div`
  position: relative;
`;
export const Buttonwrap = styled.div`
  width: 349px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 21px;
`;
export const SignButton = styled.button`
  width: 100%;
  background-color: ${colors.blue[300]};
  color: ${colors.gray[100]};
  border-radius: 8px;
  border: none;
  padding: 20px 80px;
  cursor: pointer;
`;
export const LoginButton = styled.button`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid ${colors.blue[200]};
  padding: 20px 80px;
  color: ${colors.gray[800]};
  cursor: pointer;
`;
export const BottomSpan = styled.span`
  display: flex;
  justify-content: center;
  color: ${colors.gray[600]};
  font-size: 13px;
  line-height: 25px;
  margin-bottom: 27px;
`;
