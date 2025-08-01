import { Form, Modal } from "antd";
import { useState } from "react";
import Mail from "./Mail";
import {
  AlertPopUpBox,
  AntCustomFormItem,
  AntCustomInput,
  Button,
  Text,
  Title,
} from "../../../emotions/profile/passwordfind.style";

function PasswordFind({ onClose }) {
  // form 요소 저장해두고 참조하기
  const [form] = Form.useForm();
  const [isMailOpen, setIsMailModalOpen] = useState(false);

  const onFinish = values => {
    console.log(values);
    // PasswordFind 모달 열기
    onClose();
    // 메일전송 모달 열기
    openMailModal();
  };

  // 메일 전송 모달
  const openMailModal = () => setIsMailModalOpen(true);
  const closeMailModal = () => setIsMailModalOpen(false);
  return (
    <>
      <AlertPopUpBox>
        <Title>비밀번호 찾기</Title>
        <Text>가입 시 등록한 이메일 주소를 입력하세요.</Text>

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
                  gap: "2px",
                  marginBottom: "0px",
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
        </Form>
        <Button type="primary" onClick={() => form.submit()}>
          확인
        </Button>
        <Modal
          open={isMailOpen}
          onCancel={closeMailModal}
          footer={null}
          closable={false}
          centered
          width={286}
        >
          <Mail onClose={closeMailModal} />
        </Modal>
      </AlertPopUpBox>
    </>
  );
}

export default PasswordFind;
