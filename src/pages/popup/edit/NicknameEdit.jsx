import React, { useState } from "react";
import colors from "../../../styles/colors";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../../atoms/userInfoAtom";

// const AlertPopUp = styled.div`
//   display: flex;
//   position: fixed;
//   z-index: 99999;
//   width: 394px;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.6);
// `;
const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 10px;
`;

const TextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;

const InputTitle = styled.input`
  display: flex;
  width: 245px;
  height: 30px;
  align-items: flex-start;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #cbd5dd;
  background: #fff;
  font-size: 10px;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  &::placeholder {
    font-size: 10px;
    color: ${colors.gray[300]};
  }
`;

const Button = styled.button`
  background-color: #247cff;
  width: 60px;
  padding: 10px;
  font-size: 13px;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  margin-left: auto;
  border: none;
  display: flex;
`;

function NicknameEdit({ onClose }) {
  //js
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [nickname, setNickname] = useState(userInfo.nickname || "");
  const handleSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    const updatedUser = {
      ...userInfo,
      nickname,
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
            <InputTitle type="text" placeholder="자기소개를 입력해주세요!" />
          </TextWrap>
          <Button type="submit">확인</Button>
        </form>
      </AlertPopUpBox>
    </>
    // </AlertPopUp>
  );
}

export default NicknameEdit;
