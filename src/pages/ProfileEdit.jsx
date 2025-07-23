import styled from "@emotion/styled";
import React from "react";
import { fonts } from "../styles/fonts";

const Container = styled.div`
  width: 394px;
  height: auto;
  background-color: #f0f6ff;
`;
const TopContainer = styled.div`
  width: 394px;
  height: 47px;
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignWrap = styled.div`
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

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const SignDiv = styled.div`
  height: 100%;
  font-family: ${fonts.bold};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileWrap = styled.div`
  padding: 30px 13px 13px 13px;
`;

const ProfileEditWrap = styled.div`
  margin-bottom: 30px;
`;

const ProfileImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  margin: 0 auto;
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;
const ProfileInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ProfileNickName = styled.div`
  font-size: 20px;
  font-family: ${fonts.bold};
  cursor: pointer;
  gap: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
`;

const ProfileEtc = styled.div`
  font-size: 16px;
  color: #757575;
  font-weight: 300;
  flex-direction: column;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Button = styled.button`
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

const IconCirclePass = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #feccd0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const ButtonSubText = styled.div`
  font-size: 13px;
  font-weight: 300;
  color: #5c5c5c;
`;

const IconCirclePersonalInfo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #adf4d0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconCircleEtc = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fccede;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogOut = styled.div``;
const ReSign = styled.div`
  font-size: 13px;
  color: #8f8f8f;
  font-weight: 500;
  padding-top: 14px;
  text-align: right;
  padding-right: 10px;
  text-decoration: underline;
  cursor: pointer;
`;

function ProfileEdit() {
  return (
    <Container>
      <TopContainer>
        <SignWrap>
          <div>
            <Image src="../images/majesticons_arrow-left.svg" alt="뒤로가기" />
          </div>
        </SignWrap>
        <SignDiv>프로필 편집</SignDiv>
      </TopContainer>
      <ProfileWrap>
        <ProfileEditWrap>
          <ProfileImageWrap>
            <ProfileImage src="../images/panwhite.png" alt="프로필 이미지" />
          </ProfileImageWrap>
          <ProfileInfo>
            <ProfileNickName>
              도현
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.2735 2.98296L13.017 4.7264M12.3944 1.44704L7.67795 6.16349C7.43353 6.40631 7.26721 6.71659 7.2003 7.05457L6.76465 9.23532L8.94538 8.79884C9.28303 8.73131 9.59268 8.56577 9.83645 8.32201L14.5529 3.60556C14.6946 3.46383 14.807 3.29557 14.8837 3.11039C14.9604 2.92521 14.9999 2.72674 14.9999 2.5263C14.9999 2.32586 14.9604 2.12739 14.8837 1.94221C14.807 1.75703 14.6946 1.58877 14.5529 1.44704C14.4111 1.30531 14.2429 1.19289 14.0577 1.11618C13.8725 1.03948 13.674 1 13.4736 1C13.2732 1 13.0747 1.03948 12.8895 1.11618C12.7043 1.19289 12.5361 1.30531 12.3944 1.44704Z"
                  stroke="#A8A8A8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3531 10.8824V13.3531C13.3531 13.7899 13.1796 14.2089 12.8707 14.5177C12.5618 14.8266 12.1428 15.0002 11.706 15.0002H2.64708C2.21025 15.0002 1.7913 14.8266 1.48242 14.5177C1.17353 14.2089 1 13.7899 1 13.3531V4.29406C1 3.85723 1.17353 3.43828 1.48242 3.12939C1.7913 2.8205 2.21025 2.64697 2.64708 2.64697H5.11769"
                  stroke="#A8A8A8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ProfileNickName>
            <ProfileEtc>프로필을 편집하세요</ProfileEtc>
          </ProfileInfo>
        </ProfileEditWrap>

        <ButtonWrap>
          <Button>
            <IconCirclePass>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  d="M1.66667 17.75C1.20833 17.75 0.816111 17.5869 0.49 17.2608C0.163889 16.9347 0.000555556 16.5422 0 16.0833V7.75C0 7.29167 0.163333 6.89945 0.49 6.57333C0.816666 6.24722 1.20889 6.08389 1.66667 6.08333H2.5V4.41667C2.5 3.26389 2.90639 2.28139 3.71917 1.46917C4.53194 0.656945 5.51444 0.250556 6.66667 0.250001C7.81889 0.249445 8.80167 0.655834 9.615 1.46917C10.4283 2.2825 10.8344 3.265 10.8333 4.41667V6.08333H11.6667C12.125 6.08333 12.5175 6.24667 12.8442 6.57333C13.1708 6.9 13.3339 7.29222 13.3333 7.75V16.0833C13.3333 16.5417 13.1703 16.9342 12.8442 17.2608C12.5181 17.5875 12.1256 17.7506 11.6667 17.75H1.66667ZM1.66667 16.0833H11.6667V7.75H1.66667V16.0833ZM6.66667 13.5833C7.125 13.5833 7.5175 13.4203 7.84417 13.0942C8.17083 12.7681 8.33389 12.3756 8.33333 11.9167C8.33278 11.4578 8.16972 11.0656 7.84417 10.74C7.51861 10.4144 7.12611 10.2511 6.66667 10.25C6.20722 10.2489 5.815 10.4122 5.49 10.74C5.165 11.0678 5.00167 11.46 5 11.9167C4.99833 12.3733 5.16167 12.7658 5.49 13.0942C5.81833 13.4225 6.21056 13.5856 6.66667 13.5833ZM4.16667 6.08333H9.16667V4.41667C9.16667 3.72222 8.92361 3.13195 8.4375 2.64583C7.95139 2.15972 7.36111 1.91667 6.66667 1.91667C5.97222 1.91667 5.38194 2.15972 4.89583 2.64583C4.40972 3.13195 4.16667 3.72222 4.16667 4.41667V6.08333Z"
                  fill="#F15555"
                />
              </svg>
            </IconCirclePass>
            <ButtonTextWrapper>
              <ButtonText>비밀번호 변경</ButtonText>
              <ButtonSubText>계정 보안을 강화하세요</ButtonSubText>
            </ButtonTextWrapper>
          </Button>

          <Button>
            <IconCirclePersonalInfo>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 15.0001H13V12.5001H15.5V10.5001H13V8.00015H11V10.5001H8.5V12.5001H11V15.0001ZM12 20.9621C9.99067 20.3655 8.32167 19.1485 6.993 17.3111C5.66433 15.4738 5 13.4035 5 11.1001V5.69215L12 3.07715L19 5.69215V11.1001C19 13.4028 18.3357 15.4728 17.007 17.3101C15.6783 19.1475 14.0093 20.3641 12 20.9621ZM12 19.9011C13.7333 19.3511 15.1667 18.2511 16.3 16.6011C17.4333 14.9511 18 13.1178 18 11.1011V6.37515L12 4.14515L6 6.37515V11.1001C6 13.1168 6.56667 14.9501 7.7 16.6001C8.83333 18.2501 10.2667 19.3511 12 19.9011Z"
                  fill="#48BE75"
                />
              </svg>
            </IconCirclePersonalInfo>
            <ButtonTextWrapper>
              <ButtonText>비밀번호 변경</ButtonText>
              <ButtonSubText>계정 보안을 강화하세요</ButtonSubText>
            </ButtonTextWrapper>
          </Button>
          <Button>
            <IconCircleEtc>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 8.5C11.6022 8.5 11.2206 8.65804 10.9393 8.93934C10.658 9.22064 10.5 9.60218 10.5 10V10.107C10.5 10.2396 10.4473 10.3668 10.3536 10.4606C10.2598 10.5543 10.1326 10.607 10 10.607C9.86739 10.607 9.74021 10.5543 9.64645 10.4606C9.55268 10.3668 9.5 10.2396 9.5 10.107V10C9.5 9.33696 9.76339 8.70107 10.2322 8.23223C10.7011 7.76339 11.337 7.5 12 7.5H12.116C12.6029 7.50015 13.0781 7.64939 13.4777 7.92764C13.8772 8.20589 14.182 8.59982 14.351 9.05645C14.52 9.51308 14.5452 10.0105 14.4231 10.4819C14.301 10.9532 14.0375 11.3759 13.668 11.693L12.897 12.354C12.7727 12.4608 12.6728 12.5932 12.6043 12.7422C12.5358 12.8911 12.5002 13.0531 12.5 13.217V13.75C12.5 13.8826 12.4473 14.0098 12.3536 14.1036C12.2598 14.1973 12.1326 14.25 12 14.25C11.8674 14.25 11.7402 14.1973 11.6464 14.1036C11.5527 14.0098 11.5 13.8826 11.5 13.75V13.217C11.5 12.593 11.773 12.001 12.246 11.595L13.016 10.935C13.2307 10.751 13.384 10.5057 13.4551 10.232C13.5262 9.95831 13.5117 9.66942 13.4137 9.40419C13.3157 9.13895 13.1387 8.91011 12.9067 8.74846C12.6747 8.58681 12.3988 8.5001 12.116 8.5H12ZM12 16.5C12.1989 16.5 12.3897 16.421 12.5303 16.2803C12.671 16.1397 12.75 15.9489 12.75 15.75C12.75 15.5511 12.671 15.3603 12.5303 15.2197C12.3897 15.079 12.1989 15 12 15C11.8011 15 11.6103 15.079 11.4697 15.2197C11.329 15.3603 11.25 15.5511 11.25 15.75C11.25 15.9489 11.329 16.1397 11.4697 16.2803C11.6103 16.421 11.8011 16.5 12 16.5Z"
                  fill="#E43059"
                />
                <path
                  d="M3.5 12C3.5 9.74566 4.39553 7.58365 5.98959 5.98959C7.58365 4.39553 9.74566 3.5 12 3.5C14.2543 3.5 16.4163 4.39553 18.0104 5.98959C19.6045 7.58365 20.5 9.74566 20.5 12C20.5 14.2543 19.6045 16.4163 18.0104 18.0104C16.4163 19.6045 14.2543 20.5 12 20.5C9.74566 20.5 7.58365 19.6045 5.98959 18.0104C4.39553 16.4163 3.5 14.2543 3.5 12ZM12 4.5C10.0109 4.5 8.10322 5.29018 6.6967 6.6967C5.29018 8.10322 4.5 10.0109 4.5 12C4.5 13.9891 5.29018 15.8968 6.6967 17.3033C8.10322 18.7098 10.0109 19.5 12 19.5C13.9891 19.5 15.8968 18.7098 17.3033 17.3033C18.7098 15.8968 19.5 13.9891 19.5 12C19.5 10.0109 18.7098 8.10322 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z"
                  fill="#E43059"
                />
              </svg>
            </IconCircleEtc>
            <ButtonTextWrapper>
              <ButtonText>비밀번호 변경</ButtonText>
              <ButtonSubText>계정 보안을 강화하세요</ButtonSubText>
            </ButtonTextWrapper>
          </Button>
        </ButtonWrap>
        <LogOut>로그아웃</LogOut>
        <ReSign>회원탈퇴</ReSign>
      </ProfileWrap>
    </Container>
  );
}

export default ProfileEdit;
