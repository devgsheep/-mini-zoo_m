import styled from "@emotion/styled";
import colors from "../styles/colors";
import { fonts } from "../styles/fonts";

export const Container = styled.div`
  width: 394px;
  height: auto;
  background: ${({ theme }) => colors[theme][100]};
`;
export const TopContainer = styled.div`
  width: 394px;
  height: 47px;
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignWrap = styled.div`
  width: 18px;
  height: 18px;
  left: 10px;
  top: 35%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const SignDiv = styled.div`
  height: 100%;
  font-family: ${fonts.bold};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrap = styled.div`
  padding: 30px 13px 13px 13px;
`;

export const ProfileEditWrap = styled.div`
  margin-bottom: 30px;
`;

export const ProfileEditIconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
`;
export const ProfileEditIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProfileInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ProfileNickName = styled.div`
  font-size: 20px;
  font-family: ${fonts.bold};

  gap: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
`;

export const NickEdit = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const ProfileEtc = styled.div`
  font-size: 16px;
  color: #757575;
  font-weight: 300;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Button = styled.button`
  width: 367px;
  height: 83px;
  border-radius: 16px;
  padding: 10px 10px;
  text-align: center;
  background-color: #fff;
  border: none;
  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.05);
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  cursor: pointer;
`;

export const IconCirclePass = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #feccd0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PassImage = styled.img`
  width: 20px;
  height: 20px;
`;
export const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ButtonText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #424242;
`;
export const ButtonSubText = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #5c5c5c;
`;

export const IconCircleTranceImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #c5d5fe;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TranceImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const IconCircleLanguage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #adf4d0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageImage = styled.img`
  width: 20px;
  height: 20px;
`;
export const LogOutButton = styled.div`
  display: flex;
  width: 367px;
  padding: 19px 0 18px 0;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid #fecaca;
  background: #fef2f2;
  box-shadow: 0 4px 4px 0 rgba(12, 12, 13, 0.05);
  margin-top: 165px;
  color: #dc2626;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
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

export const ReSignWrap = styled.div`
  font-size: 13px;
  color: #8f8f8f;
  font-weight: 500;
  padding-top: 14px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 20px;
`;
