import styled from "@emotion/styled";
import colors from "../styles/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => colors[theme][100]};
  min-height: 852px;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  max-height: 47px;
  background-color: #fff;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentArea = styled.div`
  flex-grow: 1;
`;

export const HomeTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px 0;
  font-size: 16px;
  color: ${colors.gray[700]};
  line-height: 27px;
  letter-spacing: 10%;
`;

export const TopButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeTopButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 14px 60px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => colors[theme][300]};
  color: #fff;
  line-height: 27px;
  cursor: pointer;
`;

export const MainText = styled.span`
  font-size: 16px;
`;

export const SubText = styled.span`
  font-size: 13px;
`;

export const TopImageWrapper = styled.div`
  max-height: 228px;
  max-width: 152px;
  display: flex;
  justify-content: center;
`;

export const HomeTopImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const HomeBottomSection = styled.div``;

export const HomeRecent = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 16px;
  margin-left: 22px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 10%;
  color: ${colors.gray[900]};
`;

export const RecordList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

export const RecordListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  background-color: #fff;
  margin: 0 22px;
  border: 1px solid #bdd7ff;
  border-radius: 8px;
  cursor: pointer;
`;

export const RecordInfoWrapper = styled.div`
  display: flex;
  gap: 11px;
`;
export const RecordImage = styled.img`
  width: 36px;
  height: 36px;
`;
export const RecordTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;
export const RecordTextTitle = styled.span`
  font-size: 13px;
  color: ${colors.gray[700]};
  letter-spacing: 10%;
`;
export const RecordTextDate = styled.span`
  font-size: 10px;
  color: ${colors.gray[500]};
  letter-spacing: 10%;
`;

export const RecordSvgWrap = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ffdb64;
  padding: 11px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewAllButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px auto;
`;

export const ViewAllButton = styled.button`
  padding: 14px 30px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const ViewAllText = styled.span`
  font-size: 13px;
  letter-spacing: 10%;
  color: ${colors.gray[700]};
`;
export const Footer = styled.div``;

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
