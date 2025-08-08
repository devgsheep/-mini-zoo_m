import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../../atoms/userInfoAtom";
import {
  AlertPopUpBox,
  Button,
  InputTitle,
  TextWrap,
  Title,
} from "../../../emotions/edit/nicknameedit.style";

function NicknameEdit({ onClose }) {
  //js

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [nickname, setNickname] = useState(userInfo.nickname || "");
  const [introduction, setIntroduction] = useState(userInfo.introduction || "");
  const handleSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const updatedUser = {
      ...userInfo,
      nickname,
      introduction,
    };
    setUserInfo(updatedUser);
    localStorage.setItem("userInfo", JSON.stringify(updatedUser));
    onClose();
  };
  
  //jsx
  return (
    // <AlertPopUp>
    <>
      <AlertPopUpBox>
        <Title>프로필 편집</Title>
        <form onSubmit={handleSubmit}>
          <TextWrap>
            <InputTitle
              type="text"
              name="nickname"
              placeholder="변경할 닉네임을 입력해주세요!"
              onChange={e => setNickname(e.target.value)}
            />
          </TextWrap>
          <Title>한줄 자기소개</Title>
          <TextWrap>
            <InputTitle
              type="text"
              name="introduction"
              placeholder="자기소개를 입력해주세요!"
              onChange={e => setIntroduction(e.target.value)}
            />
          </TextWrap>
          <Button type="submit">확인</Button>
        </form>
      </AlertPopUpBox>
    </>
    // </AlertPopUp>
  );
}

export default NicknameEdit;
