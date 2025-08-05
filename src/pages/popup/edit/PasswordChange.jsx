import styled from "@emotion/styled";
import React, { useState } from "react";
import colors from "../../../styles/colors";
import { Button } from "../../Ui";
import { Form } from "antd";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../../atoms/userInfoAtom";

// const Container = styled.div`
//   width: 394px;
//   height: auto;
//   background-color: #f0f6ff;
// `;

// const PasswordChangePopUp = styled.div`
//   display: flex;
//   position: fixed;
//   z-index: 99999;
//   width: 394px;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   /* background-color: rgba(0, 0, 0, 0.6); */
//   /* display: none; */
// `;

const PasswordChangePopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
const PasswordChangeTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CustumPwChInput = styled.input`
  width: 246px;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[400]};
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding-left: 10px;
  font-size: 13px;
  color: #c2c2c2;
  &::placeholder {
    font-size: 11px;
    color: #999;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ChangePw = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 25px; */
  gap: 3px;
`;
const AntCustomFormItem = styled(Form.Item)`
  margin-bottom: 5px;
  height: 84px;
  .ant-form-item-explain .ant-form-item-explain-error {
    text-align: left;
    font-size: 10px;
  }
`;

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
    console.log(savedpw, inputpw, newpw);
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
