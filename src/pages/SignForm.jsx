import styled from "@emotion/styled";
import React, { useState } from "react";
import { fonts } from "../styles/fonts";
import colors from "../styles/colors";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { getGoogleLoginLink } from "../google/googleapi";
import { getKakaoLoginLink } from "../kko/kkoapi";

const Container = styled.div`
  height: auto;
  background-color: #f0f6ff;
  text-align: center;
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
  cursor: pointer;
`;

const SignDiv = styled.div`
  height: 100%;
  font-family: ${fonts.bold};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 16px;
  row-gap: 10px;
`;

const ImageEdit = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;
const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const TitleP1 = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
const TitleP2 = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  color: ${colors.gray[500]};
`;

const Main = styled.div`
  padding-top: 29px;
`;

// const Span = styled.span`
//   font-size: 13px;
//   font-weight: 500;
//   color: #f87182;
// `;

const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AntCustomInput = styled(Input)`
  width: 350px;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid #c6ddff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding-left: 10px;
  font-size: 13px;
  color: ${colors.black};
  margin-bottom: 2px;
  &::placeholder {
    font-family: "Pretendard";
    font-size: 11px;
    color: #999;
  }
`;
const AntCustomInputPw = styled(Input.Password)`
  width: 350px;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid #c6ddff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding-left: 10px;
  font-size: 13px;
  color: #c2c2c2;
  margin-bottom: 2px;
  &::placeholder {
    font-family: "Pretendard";
    font-size: 11px;
    color: #999;
  }
  .ant-input-suffix svg {
    color: #8ab9ff;
    font-size: 18px;
  }
`;
const AntCustomFormItem = styled(Form.Item)`
  margin-bottom: 5px;
  height: 84px;
  .ant-form-item-explain .ant-form-item-explain-error {
    text-align: left;
    font-size: 10px;
  }
`;

// const InputCheckBoxWrap = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 32px;
//   gap: 7px;
//   font-size: 13px;
//   font-weight: 500;
//   color: #5c5c5c;
//   letter-spacing: 0.52px;
//   padding-bottom: 14px;
// `;

// const InputCheckBox = styled.input`
//   appearance: none;
//   width: 18px;
//   height: 18px;
//   border-radius: 2px;
//   border: 1px solid #c6ddff;
//   background-color: #fff;
//   cursor: pointer;
// `;

// const SignButton = styled.button`
//   display: inline-flex;
//   padding: 15px 68px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   border-radius: 10px;
//   background-color: #8ab9ff;
//   border: none;
//   font-size: 16px;
//   font-weight: 600;
//   color: #f5f5f5;
//   letter-spacing: 1.6px;
//   line-height: normal;
//   cursor: pointer;
// `;
const AntCustomSignButton = styled(Button)`
  display: inline-flex;
  padding: 25px 63px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: #8ab9ff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: 1.6px;
  line-height: normal;
  cursor: pointer;
`;
const HaveLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 7px;
`;
const HaveP = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #757575;
`;

const SpanLogin = styled.span`
  color: #ec48b3;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #999;
  font-size: 14px;
`;

const DividerLine = styled.span`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`;

const DividerText = styled.span`
  color: #757575;
  font-weight: 500;
  font-size: 10px;
  padding: 0 10px;
  white-space: nowrap;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 11px;
  padding: 20px;
`;

const GoogleButton = styled.button`
  display: flex;
  width: 355px;
  height: 43px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background: #fff;
  gap: 10px;
  cursor: pointer;
`;
export const GoogleSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <g clipPath="url(#clip0_119_1288)">
        <path
          d="M6.27054 1.09195C4.47206 1.71586 2.92105 2.90006 1.84534 4.47061C0.769623 6.04116 0.2259 7.91528 0.294034 9.81769C0.362168 11.7201 1.03857 13.5505 2.22388 15.0401C3.40919 16.5297 5.04094 17.5999 6.87944 18.0935C8.36996 18.4781 9.93158 18.495 11.4301 18.1427C12.7875 17.8378 14.0426 17.1856 15.0723 16.2499C16.1439 15.2463 16.9218 13.9697 17.3223 12.5571C17.7575 11.021 17.835 9.40561 17.5487 7.83492H9.17866V11.307H14.026C13.9291 11.8607 13.7215 12.3892 13.4156 12.8609C13.1097 13.3326 12.7118 13.7377 12.2457 14.052C11.6538 14.4435 10.9865 14.7069 10.2868 14.8254C9.58499 14.9559 8.86515 14.9559 8.16335 14.8254C7.45205 14.6783 6.77918 14.3848 6.18757 13.9634C5.23715 13.2906 4.52352 12.3348 4.14851 11.2324C3.76715 10.1094 3.76715 8.89187 4.14851 7.76883C4.41545 6.98163 4.85674 6.26489 5.43944 5.67211C6.10628 4.98128 6.9505 4.48748 7.87951 4.24487C8.80851 4.00226 9.78639 4.02023 10.7058 4.2968C11.4241 4.51728 12.0809 4.90252 12.624 5.4218C13.1705 4.87805 13.7162 4.33289 14.2609 3.78633C14.5421 3.49242 14.8487 3.21258 15.1257 2.91164C14.2968 2.14028 13.3238 1.54006 12.2626 1.14539C10.33 0.443657 8.21535 0.424798 6.27054 1.09195Z"
          fill="white"
        />
        <path
          d="M6.27053 1.09215C8.21518 0.42454 10.3298 0.442902 12.2626 1.14418C13.324 1.54153 14.2965 2.14464 15.1243 2.91887C14.843 3.2198 14.5463 3.50105 14.2594 3.79355C13.7138 4.33824 13.1687 4.88105 12.624 5.42199C12.0809 4.90272 11.4241 4.51748 10.7058 4.29699C9.78668 4.01945 8.80883 4.00045 7.87959 4.24207C6.95034 4.48368 6.10559 4.97658 5.43803 5.66668C4.85532 6.25946 4.41403 6.9762 4.14709 7.7634L1.23193 5.50637C2.27538 3.43716 4.08205 1.85437 6.27053 1.09215Z"
          fill="#E33629"
        />
        <path
          d="M0.458551 7.74229C0.615237 6.96575 0.875368 6.21373 1.23199 5.50635L4.14714 7.769C3.76579 8.89204 3.76579 10.1096 4.14714 11.2326C3.17589 11.9826 2.20418 12.7363 1.23199 13.4938C0.339231 11.7168 0.066956 9.69205 0.458551 7.74229Z"
          fill="#F8BD00"
        />
        <path
          d="M9.1786 7.8335H17.5486C17.8349 9.40418 17.7575 11.0196 17.3222 12.5557C16.9217 13.9682 16.1439 15.2449 15.0722 16.2485C14.1314 15.5144 13.1864 14.786 12.2456 14.0519C12.7121 13.7373 13.1102 13.3318 13.4161 12.8596C13.722 12.3875 13.9294 11.8584 14.0259 11.3041H9.1786C9.1772 10.1482 9.1786 8.99084 9.1786 7.8335Z"
          fill="#587DBD"
        />
        <path
          d="M1.23047 13.4937C2.20266 12.7437 3.17437 11.9899 4.14562 11.2324C4.52139 12.3352 5.23604 13.291 6.1875 13.9634C6.78095 14.3828 7.45528 14.674 8.1675 14.8184C8.8693 14.9489 9.58914 14.9489 10.2909 14.8184C10.9907 14.6999 11.6579 14.4365 12.2498 14.0449C13.1906 14.779 14.1356 15.5074 15.0764 16.2415C14.0469 17.1777 12.7918 17.8304 11.4342 18.1357C9.93573 18.488 8.37411 18.4711 6.88359 18.0865C5.70474 17.7717 4.60361 17.2169 3.64922 16.4566C2.63905 15.6546 1.814 14.6439 1.23047 13.4937Z"
          fill="#319F43"
        />
      </g>
      <defs>
        <clipPath id="clip0_119_1288">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const KakaoButton = styled.button`
  display: flex;
  width: 355px;
  height: 43px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background: #facc15;
  border: 1px solid #facc15;
  gap: 10px;
  cursor: pointer;
`;
export const KaKaoSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
    >
      <path
        d="M9.99909 0C15.2467 0 19.5 3.60725 19.5 8.05823C19.5 12.5082 15.2467 16.1155 10 16.1155C9.4776 16.1145 8.95577 16.0783 8.43748 16.0072L4.44929 18.8455C3.996 19.1064 3.83586 19.0779 4.02224 18.4389L4.82929 14.8179C2.22357 13.3805 0.5 10.8897 0.5 8.05823C0.5 3.60824 4.75238 0 10 0M15.3453 7.93516L16.6753 6.53322C16.7521 6.44649 16.7949 6.33074 16.7948 6.21034C16.7946 6.08995 16.7516 5.97431 16.6746 5.88778C16.5977 5.80126 16.4929 5.7506 16.3823 5.74649C16.2717 5.74237 16.164 5.78512 16.0818 5.86572L14.3374 7.70282V6.1847C14.3374 6.06146 14.2924 5.94326 14.2123 5.85612C14.1323 5.76897 14.0236 5.72001 13.9104 5.72001C13.7971 5.72001 13.6885 5.76897 13.6084 5.85612C13.5283 5.94326 13.4833 6.06146 13.4833 6.1847V8.7021C13.4683 8.77403 13.4683 8.84873 13.4833 8.92066V10.3374C13.4833 10.4606 13.5283 10.5788 13.6084 10.666C13.6885 10.7531 13.7971 10.8021 13.9104 10.8021C14.0236 10.8021 14.1323 10.7531 14.2123 10.666C14.2924 10.5788 14.3374 10.4606 14.3374 10.3374V8.99548L14.7238 8.58888L16.0158 10.5904C16.048 10.6404 16.089 10.6829 16.1364 10.7157C16.1838 10.7484 16.2366 10.7707 16.2919 10.7812C16.3472 10.7917 16.4038 10.7902 16.4586 10.7769C16.5133 10.7636 16.5652 10.7387 16.6111 10.7036C16.657 10.6685 16.6961 10.6239 16.7262 10.5724C16.7563 10.5208 16.7768 10.4633 16.7864 10.4032C16.7961 10.343 16.7948 10.2814 16.7825 10.2218C16.7703 10.1622 16.7474 10.1058 16.7151 10.0558L15.3453 7.93516ZM12.669 9.82937H11.3481V6.19947C11.343 6.08006 11.2959 5.96735 11.2164 5.88479C11.137 5.80223 11.0314 5.75616 10.9215 5.75616C10.8116 5.75616 10.706 5.80223 10.6266 5.88479C10.5471 5.96735 10.5 6.08006 10.4949 6.19947V10.2941C10.4949 10.55 10.6849 10.7587 10.921 10.7587H12.669C12.7823 10.7587 12.8909 10.7098 12.971 10.6226C13.0511 10.5355 13.0961 10.4173 13.0961 10.2941C13.0961 10.1708 13.0511 10.0526 12.971 9.96547C12.8909 9.87832 12.7823 9.82937 12.669 9.82937ZM7.36986 8.75526L7.99957 7.07372L8.57681 8.75428L7.36986 8.75526ZM9.65257 9.23472L9.65438 9.21897C9.65408 9.10192 9.61302 8.98934 9.53948 8.90392L8.59309 6.14729C8.55342 6.01593 8.47785 5.90086 8.37649 5.81747C8.27512 5.73409 8.15278 5.68635 8.02581 5.68063C7.89803 5.68057 7.77322 5.72257 7.66777 5.80111C7.56233 5.87965 7.48118 5.99106 7.435 6.12071L5.93129 10.1326C5.88845 10.2467 5.88903 10.3746 5.93289 10.4883C5.97675 10.6019 6.06031 10.692 6.16517 10.7386C6.27003 10.7852 6.38761 10.7845 6.49205 10.7368C6.59648 10.6891 6.67922 10.5982 6.72205 10.4841L7.02243 9.68366H8.89529L9.1649 10.4713C9.1833 10.5301 9.21236 10.5844 9.25037 10.6308C9.28839 10.6772 9.33458 10.7149 9.38621 10.7416C9.43784 10.7682 9.49386 10.7833 9.55095 10.786C9.60804 10.7886 9.66504 10.7788 9.71858 10.757C9.77211 10.7353 9.82109 10.7021 9.86262 10.6594C9.90414 10.6166 9.93736 10.5653 9.96031 10.5083C9.98327 10.4514 9.99548 10.39 9.99624 10.3278C9.99699 10.2657 9.98627 10.204 9.96471 10.1464L9.65257 9.23472ZM6.64605 6.20439C6.64629 6.14338 6.63543 6.08292 6.61411 6.02648C6.59279 5.97005 6.56143 5.91877 6.52182 5.87558C6.48221 5.83239 6.43515 5.79815 6.38333 5.77483C6.33152 5.75151 6.27598 5.73957 6.2199 5.7397H3.28395C3.17069 5.7397 3.06207 5.78866 2.98198 5.87581C2.9019 5.96295 2.8569 6.08115 2.8569 6.20439C2.8569 6.32764 2.9019 6.44583 2.98198 6.53298C3.06207 6.62012 3.17069 6.66908 3.28395 6.66908H4.33348V10.3472C4.33348 10.4705 4.37847 10.5887 4.45856 10.6758C4.53864 10.7629 4.64726 10.8119 4.76052 10.8119C4.87378 10.8119 4.98241 10.7629 5.06249 10.6758C5.14258 10.5887 5.18757 10.4705 5.18757 10.3472V6.66908H6.219C6.27515 6.66934 6.33079 6.6575 6.38271 6.63424C6.43463 6.61098 6.4818 6.57676 6.5215 6.53356C6.5612 6.49036 6.59265 6.43903 6.61403 6.38253C6.6354 6.32603 6.64629 6.26549 6.64605 6.20439Z"
        fill="black"
      />
    </svg>
  );
};
const CustomAntCheckbox = styled(Checkbox)`
  & .ant-checkbox-inner {
    border: 1px solid #c6ddff;
  }
`;

function SignForm() {
  //js
  const [isChecked, setIsChecked] = useState(false);
  // const [componentDisabled, setComponentDisabled] = useState(false);
  // 비밀번호 비교 상태 저장
  const [match, setMatch] = useState(true);
  // form 요소 저장해두고 참조하기
  const [form] = Form.useForm();
  // 비밀번호가 바뀔때 마다 체크함.
  const handleChangePassword = () => {
    const pw = form.getFieldValue("password");
    const pwConfirm = form.getFieldValue("passwordConfirm");
    if (pwConfirm) {
      setMatch(pw === pwConfirm);
    }
  };
  const onFinish = values => {
    console.log(values);
    handleClickSign();
  };

  // 네비게이터
  const navigate = useNavigate();

  const handleClickSign = () => {
    navigate("/login");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickMain = () => {
    navigate("/");
  };

  // 구글 로그인
  const googleLogin = () => {
    getGoogleLoginLink();
  };
  // 카카오 로그인 URL 만들기
  const kkoLogin = () => {
    getKakaoLoginLink();
  };

  //jsx
  return (
    <Container>
      <TopContainer>
        <SignWrap>
          <div>
            <Image
              src="/images/majesticons_arrow-left.svg"
              alt="뒤로가기"
              onClick={handleClickMain}
            />
          </div>
        </SignWrap>
        <SignDiv>가입하기</SignDiv>
      </TopContainer>
      <Title>
        <ImageEdit>
          <LogoImg src="/images/logo.svg" alt="로고" />
        </ImageEdit>
        <TitleText>
          <TitleP1>ZOO:M에 오신 것을 환영합니다!</TitleP1>
          <TitleP2>동물 친구들과 함께 감정 여행을 시작하세요</TitleP2>
        </TitleText>
      </Title>
      <Main>
        <div>
          <InputWrap>
            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              onFinish={values => onFinish(values)}
            >
              <AntCustomFormItem
                name="nickname"
                required={true}
                rules={[
                  { required: true, message: "별명을 필수요소입니다." },
                  { max: 8, message: "별명은 최대 8자 이상 입니다." },
                ]}
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#5c5c5c" }}>
                      별명
                    </span>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                }
              >
                <AntCustomInput placeholder="당신의 동물 친구들이 부를 이름을 선택하세요" />
              </AntCustomFormItem>
              <AntCustomFormItem
                name="email"
                required={true}
                rules={[
                  { required: true, message: "이메일은 필수요소입니다." },
                  { type: "email", message: "이메일 형식에 맞지않습니다." },
                ]}
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#5c5c5c" }}>
                      이메일
                    </span>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                }
              >
                <AntCustomInput placeholder="example@email.com" />
              </AntCustomFormItem>
              <AntCustomFormItem
                name="password"
                required={true}
                rules={[
                  { required: true, message: "비밀번호는 필수요소입니다." },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~])[a-zA-Z\d!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]{8,}$/,
                    message:
                      "비밀번호는 최소 8자 이상이며, 대소문자, 특수문자, 숫자를 포함해야 합니다.",
                  },
                ]}
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#5c5c5c" }}>
                      비밀번호
                    </span>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                }
              >
                <AntCustomInputPw
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChangePassword}
                />
              </AntCustomFormItem>
              <AntCustomFormItem
                name="passwordConfirm"
                required={true}
                rules={[
                  {
                    required: true,
                    message: "비밀번호를 다시 입력해주세요.",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("비밀번호가 다릅니다."));
                    },
                  }),
                ]}
                label={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#5c5c5c" }}>
                      비밀번호 확인
                    </span>
                    <span style={{ color: "red" }}>*</span>
                  </div>
                }
              >
                <AntCustomInputPw
                  placeholder="비밀번호를 입력하세요."
                  onChange={handleChangePassword}
                />
              </AntCustomFormItem>

              {/* {!match && (
                <div
                  style={{
                    color: "red",
                    textAlign: "left",
                    fontSize: "10px",
                  }}
                >
                  비밀번호가 다릅니다.
                </div>
              )} */}

              <FormItem style={{ marginBottom: 20 }}>
                <CustomAntCheckbox
                  checked={isChecked}
                  onChange={e => setIsChecked(e.target.checked)}
                  style={{ color: "#5C5C5C" }}
                >
                  <span style={{ color: "red" }}>*</span>서비스 이용약관 및
                  개인정보처리방침에 동의합니다.
                </CustomAntCheckbox>
              </FormItem>
              <FormItem style={{ marginBottom: 0 }}>
                <AntCustomSignButton
                  type="primary"
                  htmlType="submit"
                  disabled={!isChecked}
                  // onClick={handleClickSign}
                >
                  ZOO:M 패밀리에 가입하세요.
                </AntCustomSignButton>
              </FormItem>
            </Form>
          </InputWrap>
        </div>

        {/* <InputCheckBoxWrap> */}

        {/* <InputCheckBox type="checkbox" />
          <Span>*</Span>
          서비스 이용약관 및 개인정보처리방침에 동의합니다.
        </InputCheckBoxWrap> */}
        {/* <SignButton onClick={handleClickSign}>
          ZOO:M 패밀리에 가입하세요.
        </SignButton> */}
        <HaveLogin>
          <HaveP>이미 계정이 있으신가요?</HaveP>
          <SpanLogin onClick={handleClickLogin}>로그인하세요</SpanLogin>
        </HaveLogin>
      </Main>
      <Divider>
        <DividerLine />
        <DividerText>또는</DividerText>
        <DividerLine />
      </Divider>
      <Footer>
        <GoogleButton onClick={googleLogin}>
          <GoogleSvg />
          Google로 계속하기
        </GoogleButton>
        <KakaoButton onClick={kkoLogin}>
          <KaKaoSvg />
          카카오로 계속하기
        </KakaoButton>
      </Footer>
    </Container>
  );
}

export default SignForm;
