import styled from "@emotion/styled";
import { fonts } from "../styles/fonts";
import { Link } from "react-router-dom";
import colors from "../styles/colors";

export const Container = styled.div`
  /* width: 394px; */
  height: auto;
  background-color: ${({ theme }) => colors[theme][100]};
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
  padding: 13px;
`;

export const ProfileMain = styled.div`
  width: 367px;
  height: 144px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 26px;
  margin-bottom: 21px;
  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.05);
`;
export const ProfileImageWrap = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ProfileNickName = styled.div`
  font-size: 15px;
  font-family: ${fonts.bold};
  display: flex;
`;

export const NickEditImage = styled.img`
  width: 12px;
  height: 12px;
  cursor: pointer;
`;

export const ProfileEtc = styled.div`
  font-size: 12px;
  color: #8f8f8f;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ProfileFeel = styled.div`
  position: relative;
  width: 367px;
  height: 126px;
  background-color: #fff;
  border-radius: 16px;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 12px;
  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.05);
`;

export const ProfileFeelDiv = styled.div`
  height: 100%;
  font-size: 15px;
  display: flex;
  padding: 15px;
  padding-left: 20px;
`;
export const Text = styled.p`
  position: absolute;
  left: 12%;
  bottom: 73%;
`;

export const ProfileIcon = styled.img`
  position: absolute;
  height: 25px;
  width: 22px;
  flex-shrink: 0;
  left: 3%;
  top: 10%;
`;

export const ProfileFeelAvg = styled.div`
  position: absolute;
  justify-content: center;
  transform: translateY(-150%);
  display: block;
  width: 342px;
  height: 71px;
  padding: 10px;
  align-items: center;
  background: ${({ theme }) => colors[theme][100]};
  border-radius: 12px;
  margin-top: 25px;
  font-size: 14px;
`;
export const EmotionP = styled.div`
  padding: 10px;
  letter-spacing: 1.5px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  width: 367px;
  height: 63px;
  border-radius: 16px;
  padding: 10px 10px;
  text-align: center;
  background-color: #fff;
  border: none;
  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.05);
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  cursor: pointer;
`;

export const IconCircleAlert = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #bdd7ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AlertImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const IconCircleTheme = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fedda2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const IconCirclePersonalInfo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #adf4d0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PersonalInfoImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const IconCircleEtc = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fccede;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EtcImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const IconCircleInfo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e3e8ee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const LogoutButton = styled.div`
  font-size: 13px;
  color: #8f8f8f;
  font-weight: 500;
  padding-top: 14px;
  text-align: right;
  padding-right: 10px;
  text-decoration: underline;
  cursor: pointer;
`;
export const NavigationBar = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItemFocus = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 25%;
  cursor: pointer;
  background-color: #bdd7ff;
  color: #579aff;
`;
export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 25%;
  background-color: #fff;
  color: #a8a8a8;
  cursor: pointer;
`;
