import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../../atoms/userInfoAtom";
import { userStateAtom } from "../../../atoms/userStateAtom";
import { userThemeAtom } from "../../../atoms/userThemeAtom";
import {
  AntCustomFormItem,
  AntCustomInputPw,
  ResignBottomBox,
  ResignButtonWrap,
  ResignCCButton,
  ResignImgBox,
  ResignMainText,
  ResignMiddleBox,
  ResignOKButton,
  ReSignPopUpBox,
  ResignSubText,
  ResignSubTextBox,
  ResignTopBox,
} from "../../../emotions/edit/resign.style";

function ReSign({ onClose }) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);
  const [theme, setTheme] = useRecoilState(userThemeAtom);
  // 네비게이터
  const navigate = useNavigate();
  const handleClickReSign = () => {
    localStorage.removeItem("userInfo");
    setUserInfo({
      nickname: "게스트",
      email: "example@example.com",
      password: "",
    });
    setUserState(false);
    navigate("/");
  };

  // form 요소 저장해두고 참조하기
  const [form] = Form.useForm();

  const onFinish = values => {
    const { password } = values;

    const savedUser = localStorage.getItem("userInfo");
    const parsed = JSON.parse(savedUser);
    const localpassword = parsed.password;
    if (password !== localpassword) {
      alert("비밀번호가 다릅니다.");
    } else {
      handleClickReSign();
      setTheme("blue");
    }
  };

  return (
    // <Container>
    //    <ReSignPopUp>
    <ReSignPopUpBox>
      <ResignTopBox>
        <ResignImgBox>
          <img src="/images/catwhite.svg" alt="탈퇴" />
        </ResignImgBox>
        <span>회원탈퇴</span>
      </ResignTopBox>
      <ResignMiddleBox>
        <ResignMainText>계정을 삭제하시겠어요?</ResignMainText>
        <ResignSubTextBox>
          <ResignSubText>계정을 삭제하면 복구할 수 없습니다.</ResignSubText>
          <ResignSubText>모든 데이터가 완전히 삭제됩니다.</ResignSubText>
        </ResignSubTextBox>
      </ResignMiddleBox>
      <ResignBottomBox>
        <ResignSubText>계속하려면 비밀번호를 입력해주세요.</ResignSubText>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          onFinish={values => onFinish(values)}
        >
          <AntCustomFormItem
            name="password"
            required={true}
            rules={[{ required: true, message: "비밀번호는 필수요소입니다." }]}
          >
            <AntCustomInputPw placeholder="비밀번호를 입력하세요." />
          </AntCustomFormItem>
        </Form>
      </ResignBottomBox>
      <ResignButtonWrap>
        <ResignCCButton onClick={onClose}>취소</ResignCCButton>
        <ResignOKButton onClick={() => form.submit()}>회원탈퇴</ResignOKButton>
      </ResignButtonWrap>
    </ReSignPopUpBox>
    //   </ReSignPopUp>
    // </Container>
  );
}

export default ReSign;
