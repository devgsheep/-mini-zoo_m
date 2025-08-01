import styled from "@emotion/styled";
import { Form, Input, Modal } from "antd";
import { useState } from "react";
import colors from "../../../styles/colors";
import Mail from "./Mail";

const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px 20px 20px 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-bottom: 10px;
`;

const AntCustomFormItem = styled(Form.Item)`
  margin-bottom: 20px;
  .ant-form-item-explain .ant-form-item-explain-error {
    text-align: left;
    font-size: 10px;
  }
  .ant-form-item-label {
    // 이 줄이 인풋과 라벨 사이 여백에 영향
    margin-bottom: -5px !important;
  }
`;

const AntCustomInput = styled(Input)`
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[200]};
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

const Button = styled.button`
  display: inline-flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${colors.blue[500]};
  border: none;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: 1.6px;
  line-height: normal;
  cursor: pointer;
`;

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
