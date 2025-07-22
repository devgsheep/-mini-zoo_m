import styled from "@emotion/styled";
import React from "react";

const Contaier = styled.div`
  width: 394px;
  height: 852px;
  background-color: #f0f6ff;
`;

const ProfileWrap = styled.div``;

const Header = styled.div``;

const ProfileMain = styled.div`
  width: 367px;
  height: 144px;
  background-color: #fff;
  border-radius: 16px;
  justify-content: center;
  padding: 13px;
  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.05);
`;

const Button = styled.button`
  width: 367px;
  height: 63px;
  border-radius: 16px;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.05);
`;

function Profile() {
  return (
    <Contaier>
      <ProfileWrap>
        <Header>프로필</Header>
        <ProfileMain>프로필창</ProfileMain>
        <Button>나의 감정 성향</Button>
        <Button>알림</Button>
        <Button>테마</Button>
        <Button>개인정보 처리방침</Button>
        <Button>문의</Button>
        <Button>정보</Button>
      </ProfileWrap>
    </Contaier>
  );
}

export default Profile;
