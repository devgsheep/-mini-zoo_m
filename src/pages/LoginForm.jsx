import styled from "@emotion/styled";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  userEmailAtom,
  userNameAtom,
  userPasswordAtom,
  userStateAtom,
} from "../atoms/userInfoAtom";
import { getGoogleLoginLink } from "../google/googleapi";
import { getKakaoLoginLink } from "../kko/kkoapi";
import colors from "../styles/colors";
import { fonts } from "../styles/fonts";
import PasswordFind from "./popup/profile/PasswordFind";
import { GoogleSvg, KaKaoSvg } from "./SignForm";

const Container = styled.div`
  width: 394px;
  height: 100%;
  background-color: #f0f6ff;
  text-align: center;
`;

const TopContainer = styled.div`
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
  row-gap: 4px;
  padding-top: 31px;
`;

const ImageEdit = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
`;
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleP1 = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
`;
const TitleP2 = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  color: ${colors.gray[500]};
`;

const SpanLogin = styled.span`
  font-family: "pretendard";
  color: #ec48b3;
  font-size: 13px;
  font-weight: 500;
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

const NoHaveLogin = styled.span`
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
  margin: 5px 20px 40px 20px;
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
  padding-bottom: 20px;
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

const GUESTP = styled.p`
  padding-top: 20px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.gray[600]};
  text-decoration: underline;
  cursor: pointer;
`;

const AntCustomFormItem = styled(Form.Item)`
  padding: 0 20px;

  .ant-form-item-explain .ant-form-item-explain-error {
    text-align: left;
    font-size: 10px;
  }
`;

const AntCustomInput = styled(Input)`
  width: 350px;
  height: 46px;
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
  height: 46px;
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
const AntCustomSignButton = styled(Button)`
  width: 350px;
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
const CustomAntCheckbox = styled(Checkbox)`
  & .ant-checkbox-inner {
    border: 1px solid #c6ddff;
  }
`;

function LoginForm() {
  const [form] = Form.useForm();

  const [isChecked, setIsChecked] = useState(false);
  const [userstate, setUserstate] = useRecoilState(userStateAtom);

  const onFinish = values => {
    const { email, password } = values;

    const localname = localStorage.getItem("userName");
    const localemail = localStorage.getItem("userEmail");
    const localpassword = localStorage.getItem("userPassword");
    if (!localemail) {
      alert("회원가입부터 해주십시오.");
    } else if (email !== localemail && password !== localpassword) {
      alert("유효하지 않은 회원정보입니다. 회원가입 해주세요.");
    } else if (email !== localemail) {
      alert("이메일 주소를 확인해주세요");
    } else if (password !== localpassword) {
      alert("비밀번호를 확인해주세요.");
    } else {
      setUserstate(true);
      setUserEmail(localemail);
      setUserName(localname);
      setUserPassword(localpassword);
      handleClickHome();
    }
  };
  // 네비게이터
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/home");
  };
  const handleClickSign = () => {
    navigate("/sign");
  };
  const handleClickMain = () => {
    navigate("/");
  };

  // 비밀번호 모달
  const [isPasswordFindOpen, setIsPasswordFindMoalOpen] = useState(false);
  const openPasswordFindModal = () => setIsPasswordFindMoalOpen(true);
  const closePasswordFindModal = () => setIsPasswordFindMoalOpen(false);

  // 구글 로그인
  const googleLogin = () => {
    getGoogleLoginLink();
  };

  // 카카오 로그인 URL 만들기
  const kkoLogin = () => {
    getKakaoLoginLink();
  };

  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [userEmail, setUserEmail] = useRecoilState(userEmailAtom);
  const [userPassword, setUserPassword] = useRecoilState(userPasswordAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);
  const handleGuestLogin = () => {
    setUserState(false); //
    setUserName("OO");
    setUserEmail("");
    handleClickHome();
  };

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
        <SignDiv>로그인</SignDiv>
      </TopContainer>
      <Title>
        <ImageEdit>
          <LogoImg src="/images/logo.svg" alt="로고" />
        </ImageEdit>
        <div>
          <TitleP1>환영합니다!</TitleP1>
          <TitleP2>당신의 동물 친구들이 기다리고 있어요</TitleP2>
        </div>
      </Title>
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={values => onFinish(values)}
      >
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
              <span
                style={{
                  fontSize: "16px",
                  color: "#5c5c5c",
                  fontFamily: "pretendard",
                }}
              >
                이메일
              </span>
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
            <span
              style={{
                fontSize: "16px",
                color: "#5c5c5c",
                fontFamily: "pretendard",
              }}
            >
              비밀번호
            </span>
          }
        >
          <AntCustomInputPw placeholder="비밀번호를 입력하세요." />
        </AntCustomFormItem>
        <FormItem
          style={{
            display: "flex",
            textAlign: "left",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "350px",
              justifyContent: "space-between",
            }}
          >
            <CustomAntCheckbox
              checked={isChecked}
              onChange={e => setIsChecked(e.target.checked)}
              style={{ color: "#5C5C5C" }}
            >
              로그인 상태 유지
            </CustomAntCheckbox>
            <SpanLogin type="primary" onClick={openPasswordFindModal}>
              비밀번호를 잊으셨나요?
            </SpanLogin>
            <Modal
              open={isPasswordFindOpen}
              onCancel={closePasswordFindModal}
              footer={null}
              closable={false}
              centered
              width={286}
            >
              <PasswordFind onClose={closePasswordFindModal} />
            </Modal>
          </div>
        </FormItem>
        <FormItem style={{ marginBottom: 0 }}>
          <AntCustomSignButton type="primary" htmlType="submit">
            로그인
          </AntCustomSignButton>
        </FormItem>
      </Form>

      <HaveLogin>
        <HaveP>계정이 없으신가요?</HaveP>
        <NoHaveLogin onClick={handleClickSign}>가입하세요</NoHaveLogin>
      </HaveLogin>
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
        <GUESTP onClick={handleGuestLogin}>게스트로 탐색</GUESTP>
      </Footer>
    </Container>
  );
}

export default LoginForm;
