import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import colors from "../../../styles/colors";

// const AlertPopUp = styled.div`
//   display: flex;
//   position: fixed;
//   z-index: 99999;
//   width: 394px;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.6);
//   text-align: center;
// `;
const AlertPopUpBox = styled.div`
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

const IconCircleLogout = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogOutImage = styled.img`
  width: 16px;
  height: 16px;
`;

const Title = styled.p`
  padding-top: 9px;
  padding-bottom: 16px;
  font-size: 20px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 16px;
`;

const SubText = styled.p`
  font-size: 9px;
  color: ${colors.gray[500]};
  padding-top: 3px;
`;

const ButtonWrapLogout = styled.div`
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

const ButtonCancel = styled.button`
  background: #fafafa;
  color: ${colors.gray[400]};
`;

const ButtonLogout = styled.button`
  background: #fef2f2;
  color: #ef4444;
`;

function Logout({ onClose }) {
  // 네비게이터
  const navigate = useNavigate();
  const handleClickLogout = () => {
    navigate("/");
  };

  return (
    // <AlertPopUp>
    <>
      <AlertPopUpBox>
        <IconCircleLogout>
          <LogOutImage src="../images/logout.svg" alt="로그아웃" />
        </IconCircleLogout>
        <Title>로그아웃</Title>
        <Text>정말로 로그아웃하시겠습니까?</Text>
        <SubText>
          ZOO:M과 함께하는 당신의 감정 여정이 잠시 멈추게 될 것입니다.
        </SubText>
        <ButtonWrapLogout>
          <ButtonCancel onClick={onClose}>취소</ButtonCancel>
          <ButtonLogout onClick={handleClickLogout}>로그아웃</ButtonLogout>
        </ButtonWrapLogout>
      </AlertPopUpBox>
    </>
    // </AlertPopUp>
  );
}

export default Logout;
