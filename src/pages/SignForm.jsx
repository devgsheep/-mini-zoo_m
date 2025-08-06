import { Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../atoms/userInfoAtom";
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
  GoogleSvg,
  HaveLogin,
  HaveP,
  Image,
  ImageEdit,
  InputWrap,
  KakaoButton,
  KaKaoSvg,
  LogoImg,
  Main,
  SignDiv,
  SignWrap,
  SpanLogin,
  Title,
  TitleP1,
  TitleP2,
  TitleText,
  TopContainer,
} from "../emotions/signform.style";
import { getGoogleLoginLink } from "../google/googleapi";
import { getKakaoLoginLink } from "../kko/kkoapi";

function SignForm() {
  //js
  const [isChecked, setIsChecked] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

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
    const { nickname, email, password } = values;
    const user = {
      nickname,
      email,
      password,
      thumbnail_img: "/images/guest_img.png",
      introduction: "자기소개를 입력해주세요",
    };
    // setUserInfo(user);
    localStorage.setItem("userInfo", JSON.stringify(user));

    // console.log("values : ", values);
    // console.log("userInfo : ", userInfo);
    // console.log("setUserInfo : ", setUserInfo);

    handleClickLogin();
  };

  // 네비게이터
  const navigate = useNavigate();

  // const handleClickSign = () => {
  //   navigate("/login");
  // };
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
  useEffect(() => {
    try {
      const saved = localStorage.getItem("userInfo");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object" && parsed.nickname) {
          setUserInfo(parsed);
        }
      }
    } catch (e) {
      console.error("userInfo 파싱 실패:", e);
    }
  }, []);

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
                >
                  ZOO:M 패밀리에 가입하세요.
                </AntCustomSignButton>
              </FormItem>
            </Form>
          </InputWrap>
        </div>

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
