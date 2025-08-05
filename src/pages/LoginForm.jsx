import { Form, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../atoms/userInfoAtom";
import { userStateAtom } from "../atoms/userStateAtom";
import {
  AntCustomFormItem,
  AntCustomInput,
  AntCustomInputPw,
  AntCustomSignButton,
  Container,
  CustomAntCheckbox,
  Divider,
  DividerLine,
  DividerText,
  Footer,
  GoogleButton,
  GUESTP,
  HaveLogin,
  HaveP,
  Image,
  ImageEdit,
  KakaoButton,
  LogoImg,
  NoHaveLogin,
  SignDiv,
  SignWrap,
  SpanLogin,
  Title,
  TitleP1,
  TitleP2,
  TopContainer,
} from "../emotions/loginform.style";
import { getGoogleLoginLink } from "../google/googleapi";
import { getKakaoLoginLink } from "../kko/kkoapi";
import PasswordFind from "./popup/profile/PasswordFind";
import { GoogleSvg, KaKaoSvg } from "../emotions/signform.style";

function LoginForm() {
  // js

  const [form] = Form.useForm();

  const [isChecked, setIsChecked] = useState(false);

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

  // 회원가입 및 로그인 관련
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const handleGuestLogin = () => {
    setUserState(true); // 게스트 로그인시 항목은 보이게끔 로그인으로 처리, 대신 유저의 정보는 초기값으로 세팅
    setUserInfo({
      nickname: "게스트",
      email: "example@example.com",
      password: "",
    });
    handleClickHome();
  };

  // Form 에서 입력이 끝났을때, email 과 password 를 받고, 로컬에 저장된 userInfo 를 객체로 뜯어서 email 과 userData.email ,
  // password 와 userData.password 를 비교하여, 얼라트 창을 띄우고, 값이 모두 같으면 유저의 로그인상태를 true 로 변경시킨후 home 으로 이동시킴.
  const onFinish = values => {
    const { email, password } = values;
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    if (!userData) {
      alert("회원가입부터 해주십시오.");
    } else if (email !== userData.email) {
      alert("유효하지 않은 회원정보입니다. 이메일을 확인해주세요.");
    } else if (email === userData.email && password !== userData.password) {
      alert("비밀번호를 확인해주세요.");
    } else if (email === userData.email && password === userData.password) {
      setUserInfo(userData);
      setUserState(true);
      handleClickHome();
    }
  };
  // jsx
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
