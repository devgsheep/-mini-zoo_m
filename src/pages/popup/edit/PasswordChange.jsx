import { Form } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../../atoms/userInfoAtom";
import {
  AntCustomFormItem,
  ButtonWrap,
  ChangePw,
  CustumPwChInput,
  InputWrap,
  PasswordChangePopUpBox,
  PasswordChangeTitle,
} from "../../../emotions/edit/passwordchange.style";
import { Button } from "../../Ui";

function PasswordChange({ onClose }) {
  //

  // 비밀번호 비교 상태 저장
  const [match, setMatch] = useState(true);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [form] = Form.useForm();
  // form 요소 저장해두고 참조하기
  // 비밀번호가 바뀔때 마다 체크함.
  const handleChangePassword = () => {
    const password = form.getFieldValue("newpassword");
    const pwConfirm = form.getFieldValue("passwordConfirm");
    if (pwConfirm) {
      setMatch(password === pwConfirm);
    }
  };
  const onFinish = values => {
    const savedpw = userInfo.password;
    const inputpw = values.password;
    const newpw = values.newpassword;
    if (savedpw !== inputpw) {
      alert("비밀번호가 다릅니다.");
      return;
    }

    const updatedUser = { ...userInfo, password: newpw };
    setUserInfo(updatedUser);
    localStorage.setItem("userInfo", JSON.stringify(updatedUser));
    // console.log(savedpw, inputpw, newpw);
    onClose();
  };

  //
  return (
    // <Container>
    //   <PasswordChangePopUp>
    <>
      <Form form={form} onFinish={onFinish}>
        <PasswordChangePopUpBox>
          <PasswordChangeTitle>비밀번호 변경</PasswordChangeTitle>
          <Form.Item name={"password-form"} style={{ height: 36 }}>
            <AntCustomFormItem
              name={"password"}
              required={true}
              rules={[
                { required: true, message: "비밀번호는 필수항목입니다." },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~])[A-Za-z\d!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]{8,}$/,
                  message: "비밀번호 형식에 맞지 않습니다.",
                },
              ]}
              style={{ position: "relative", top: "20px" }}
            >
              <CustumPwChInput type="password" placeholder="현재 비밀번호" />
            </AntCustomFormItem>
          </Form.Item>
          <ChangePw className="changepw">
            <InputWrap>
              <Form.Item name={"password-form"} style={{ height: 36 }}>
                <AntCustomFormItem
                  name={"newpassword"}
                  required={true}
                  rules={[
                    { required: true, message: "비밀번호는 필수항목입니다." },
                    {
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~])[A-Za-z\d!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]{8,}$/,
                      message: "비밀번호 형식에 맞지 않습니다.",
                    },
                  ]}
                >
                  <CustumPwChInput
                    type="password"
                    placeholder="새 비밀번호"
                    onChange={handleChangePassword}
                  />
                </AntCustomFormItem>
              </Form.Item>
            </InputWrap>
            <InputWrap>
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
                      if (!value || getFieldValue("newpassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("비밀번호가 다릅니다."));
                    },
                  }),
                ]}
              >
                <CustumPwChInput
                  type="password"
                  placeholder="새 비밀번호 확인"
                  onChange={handleChangePassword}
                />
              </AntCustomFormItem>
            </InputWrap>
          </ChangePw>
          <ButtonWrap>
            <Button>확인</Button>
          </ButtonWrap>
        </PasswordChangePopUpBox>
      </Form>
    </>
    //   </PasswordChangePopUp>
    // </Container>
  );
}

export default PasswordChange;
