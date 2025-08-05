import { useNavigate } from "react-router-dom";
import {
  AlertPopUpBox,
  ButtonCancel,
  ButtonLogout,
  ButtonWrapLogout,
  IconCircleLogout,
  LogOutImage,
  SubText,
  Text,
  Title,
} from "../../../emotions/profile/logout.style";
import { useRecoilState } from "recoil";
import { userStateAtom } from "../../../atoms/userStateAtom";

function Logout({ onClose, handleLogout }) {
  const [userState, setUserState] = useRecoilState(userStateAtom);
  // 네비게이터
  const navigate = useNavigate();
  const handleClickLogout = () => {
    setUserState(false);
    handleLogout();
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
