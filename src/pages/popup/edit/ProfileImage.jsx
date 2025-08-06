import styled from "@emotion/styled";
import React, { useState } from "react";
import colors from "../../../styles/colors";
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 16px;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;

  text-align: left;
  width: 100%;
`;

const ImageGroup = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 35px;
  margin: 35px;
  overflow: hidden;
  box-shadow: 3px 3px 13.1px -2px rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`;

const Svg = styled.svg`
  position: absolute;
  transform: translateX(-100%) translateY(250%);
  cursor: pointer;
`;
const ProfileImgEdit = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
    >
      <rect width="31" height="31" rx="15" fill="#fff" />
      <path
        d="M23.1 8.8502H20.0885L18.35 6.9502H12.65L10.9115 8.8502H7.9C7.39609 8.8502 6.91282 9.05037 6.5565 9.40669C6.20018 9.76301 6 10.2463 6 10.7502V22.1502C6 22.6541 6.20018 23.1374 6.5565 23.4937C6.91282 23.85 7.39609 24.0502 7.9 24.0502H23.1C23.6039 24.0502 24.0872 23.85 24.4435 23.4937C24.7998 23.1374 25 22.6541 25 22.1502V10.7502C25 10.2463 24.7998 9.76301 24.4435 9.40669C24.0872 9.05037 23.6039 8.8502 23.1 8.8502ZM23.1 22.1502H7.9V10.7502H11.7475L13.486 8.8502H17.514L19.2525 10.7502H23.1V22.1502ZM15.5 11.7002C14.2402 11.7002 13.032 12.2006 12.1412 13.0914C11.2504 13.9822 10.75 15.1904 10.75 16.4502C10.75 17.71 11.2504 18.9182 12.1412 19.809C13.032 20.6997 14.2402 21.2002 15.5 21.2002C16.7598 21.2002 17.968 20.6997 18.8588 19.809C19.7496 18.9182 20.25 17.71 20.25 16.4502C20.25 15.1904 19.7496 13.9822 18.8588 13.0914C17.968 12.2006 16.7598 11.7002 15.5 11.7002ZM15.5 19.3002C14.7441 19.3002 14.0192 18.9999 13.4847 18.4654C12.9503 17.931 12.65 17.2061 12.65 16.4502C12.65 15.6943 12.9503 14.9694 13.4847 14.4349C14.0192 13.9005 14.7441 13.6002 15.5 13.6002C16.2559 13.6002 16.9808 13.9005 17.5153 14.4349C18.0497 14.9694 18.35 15.6943 18.35 16.4502C18.35 17.2061 18.0497 17.931 17.5153 18.4654C16.9808 18.9999 16.2559 19.3002 15.5 19.3002Z"
        fill="#8F8F8F"
      />
    </Svg>
  );
};
const Button = styled.div`
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
`;

function ProfileImage({ onClose }) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  // 이미지 추가

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      const updatedUser = { ...userInfo, thumbnail_img: imageURL };
      setUserInfo(updatedUser);
      localStorage.setItem("userInfo", JSON.stringify(updatedUser));
      onClose();
    }
  };
  return (
    // <AlertPopUp>
    <>
      <AlertPopUpBox>
        <Title>프로필 이미지 변경</Title>
        <form>
          <ImageGroup>
            <input
              type="file"
              accept="image/*"
              id="photo-upload"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label htmlFor="photo-upload">
              <Img
                src={userInfo.thumbnail_img || "/images/guest_img.png"}
                alt="프로필이미지변경"
                style={{ cursor: "pointer", width: 100, height: 100 }}
              />
              <ProfileImgEdit />
            </label>
          </ImageGroup>
          <Button>확인</Button>
        </form>
      </AlertPopUpBox>
    </>
    // </AlertPopUp>
  );
}

export default ProfileImage;
