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
  /* padding-top: 30px; */
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
  gap: 10px;
`;

const Button = styled.button`
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

const IconCircleAlert = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #bdd7ff;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <ProfileImageWrap>
          <ProfileImage src="../images/panwhite.png" alt="프로필 이미지" />
        </ProfileImageWrap>
        <ProfileInfo>
          <ProfileNickName>
            닉네임
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

        <ButtonWrap>
          <Button>
            <IconCircleAlert>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.913 8.93C17.7977 7.57764 17.2223 6.30566 16.2828 5.32612C15.3433 4.34657 14.0964 3.71864 12.75 3.547V3C12.75 2.80109 12.671 2.61032 12.5303 2.46967C12.3897 2.32902 12.1989 2.25 12 2.25C11.8011 2.25 11.6103 2.32902 11.4697 2.46967C11.329 2.61032 11.25 2.80109 11.25 3V3.547C9.90347 3.71868 8.65647 4.34675 7.71694 5.3265C6.77741 6.30625 6.20212 7.57846 6.087 8.931L5.835 10.963L5.834 10.973C5.73879 12.1056 5.2276 13.1629 4.399 13.941L4.389 13.951C4.148 14.176 3.886 14.421 3.719 14.91C3.565 15.363 3.5 16.001 3.5 17.015C3.5 17.358 3.562 17.669 3.718 17.93C3.879 18.2 4.111 18.369 4.361 18.475C4.601 18.576 4.866 18.625 5.118 18.657C5.287 18.678 5.475 18.694 5.663 18.71L5.922 18.733C7.314 18.864 9.386 19 12 19C14.1158 19.005 16.2305 18.9082 18.337 18.71C18.525 18.694 18.714 18.678 18.882 18.657C19.134 18.625 19.399 18.577 19.639 18.475C19.9068 18.3679 20.1324 18.1766 20.282 17.93C20.438 17.669 20.5 17.358 20.5 17.015C20.5 16.001 20.435 15.363 20.28 14.91C20.114 14.421 19.852 14.176 19.612 13.95L19.602 13.941C18.773 13.1631 18.2615 12.1058 18.166 10.973V10.963L17.913 8.93ZM12 4.5C13.2376 4.49998 14.43 4.96508 15.3408 5.80305C16.2516 6.64102 16.8142 7.79067 16.917 9.024V9.034L17.17 11.066C17.2879 12.442 17.9101 13.7259 18.917 14.671C19.147 14.886 19.25 14.987 19.334 15.232C19.431 15.519 19.5 16.014 19.5 17.015C19.5 17.245 19.458 17.36 19.424 17.417C19.394 17.467 19.347 17.512 19.248 17.554C19.138 17.601 18.982 17.636 18.758 17.664C18.608 17.684 18.453 17.697 18.278 17.712L17.984 17.738C15.9944 17.9172 13.9976 18.0047 12 18C9.42 18 7.38 17.866 6.016 17.738L5.722 17.712C5.56174 17.6991 5.40172 17.6834 5.242 17.665C5.07469 17.6491 4.91006 17.6121 4.752 17.555C4.652 17.512 4.606 17.467 4.576 17.417C4.542 17.36 4.5 17.245 4.5 17.015C4.5 16.014 4.569 15.518 4.666 15.232C4.75 14.987 4.853 14.886 5.083 14.671C6.08993 13.7259 6.7121 12.442 6.83 11.066L7.082 9.034L7.083 9.024C7.18584 7.79067 7.74843 6.64102 8.65919 5.80305C9.56996 4.96508 10.7624 4.49998 12 4.5ZM7.56 19.55C7.52746 19.4242 7.44726 19.3161 7.33637 19.2484C7.22547 19.1807 7.0926 19.1589 6.96588 19.1875C6.83916 19.2161 6.72855 19.2929 6.65746 19.4016C6.58636 19.5103 6.56038 19.6425 6.585 19.77C6.71611 20.3515 6.99354 20.8898 7.391 21.334C7.71938 21.701 8.1215 21.9945 8.57108 22.1954C9.02065 22.3963 9.50757 22.5001 10 22.5C10.4924 22.5001 10.9793 22.3963 11.4289 22.1954C11.8785 21.9945 12.2806 21.701 12.609 21.334C12.6976 21.2352 12.7433 21.1053 12.7361 20.9728C12.7289 20.8403 12.6693 20.7161 12.5705 20.6275C12.4717 20.5389 12.3418 20.4932 12.2093 20.5004C12.0768 20.5076 11.9526 20.5672 11.864 20.666C11.6295 20.9284 11.3422 21.1383 11.021 21.282C10.6998 21.4257 10.3519 21.5 10 21.5C9.50988 21.5016 9.0302 21.3585 8.62106 21.0886C8.21192 20.8188 7.89152 20.4342 7.7 19.983C7.64027 19.8432 7.59341 19.6983 7.56 19.55Z"
                  fill="#247CFF"
                />
              </svg>
            </IconCircleAlert>
            알림
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
            개인정보 처리방침
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
            문의
          </Button>
        </ButtonWrap>
        <LogOut>로그아웃</LogOut>
        <ReSign>회원탈퇴</ReSign>
      </ProfileWrap>
    </Container>
  );
}

export default ProfileEdit;
